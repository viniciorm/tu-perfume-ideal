import json
import re
import os

def generate_products():
    # 1. Read existing products
    existing_path = r"c:\Users\marco\Documents\parfums\scratch\existing_products.json"
    with open(existing_path, "r", encoding="utf-8") as f:
        existing_list = json.load(f)
    
    existing_map = {p["code"]: p for p in existing_list}
    print(f"Loaded {len(existing_map)} existing products from JSON.")

    # 2. Parse equivalentDatabase from FragranceMap.tsx to get quadrant mappings
    map_path = r"c:\Users\marco\Documents\parfums\src\components\FragranceMap.tsx"
    quadrant_map = {}
    if os.path.exists(map_path):
        with open(map_path, "r", encoding="utf-8") as f:
            map_content = f.read()
        
        # Regex to find: code: "F07", ..., quadrantId: "q1"
        matches = re.finditer(r'code:\s*"([^"]+)",\s*.*quadrantId:\s*"([^"]+)"', map_content)
        for m in matches:
            quadrant_map[m.group(1)] = m.group(2)
        print(f"Extracted {len(quadrant_map)} quadrant mappings from FragranceMap.tsx.")
    else:
        print("Warning: FragranceMap.tsx not found at expected path.")

    # Manual quadrant overrides for missing classic codes
    manual_quadrants = {
        "F09": "q4",  # Tresor
        "F18": "q3",  # Carolina Herrera
        "F20": "q3",  # Eternity
        "F26": "q3",  # Paris
        "F29": "q3",  # 212 Carolina Herrera
        "F47": "q3",  # La Vida es Bella Rosé
        "H07": "q1",  # 212 Heroes Men
    }
    for code, qid in manual_quadrants.items():
        if code not in quadrant_map:
            quadrant_map[code] = qid

    # 3. Parse catalog text to get all F01-F66 and H01-H45
    catalog_path = r"c:\Users\marco\Documents\parfums\docs\Catalogo.Parfums.txt"
    with open(catalog_path, "r", encoding="utf-8") as f:
        content = f.read()

    pages = content.split("--- PAGE ")
    
    dama_products = {}
    varon_products = {}
    
    # Female parser
    p5_text = ""
    for page in pages:
        if page.startswith("5 ---") or page.strip().endswith("\n05") or "F01 PALOMA PICASSO" in page:
            p5_text = page
            break

    lines_p5 = [line.strip() for line in p5_text.split("\n") if line.strip()]
    
    i = 0
    while i < len(lines_p5):
        line = lines_p5[i]
        m_single = re.match(r'^(F0[1-6])\s+(.+)$', line)
        if m_single:
            code = m_single.group(1)
            name_raw = m_single.group(2)
            name_clean = re.sub(r'(Fragancias|Aromas inspirados en:)\s*$', '', name_raw).strip()
            
            i += 1
            if i < len(lines_p5):
                detail_line = lines_p5[i]
                parts = [p.strip() for p in detail_line.split("/")]
                if len(parts) >= 2:
                    brand = parts[0]
                    year = parts[1] if len(parts) >= 3 else "N/A"
                    family = parts[-1]
                    family = re.sub(r'Femeninas\s*$', '', family).strip()
                    dama_products[code] = {
                        "code": code,
                        "name_in_catalog": name_clean,
                        "brand": brand,
                        "year": year,
                        "family": family
                    }
            i += 1
            continue
            
        m_double = re.match(r'^(F[0-3][0-9])\s+(.+?)\s+(F[3-6][0-9])\s+(.+)$', line)
        if m_double:
            code_left = m_double.group(1)
            name_left = m_double.group(2).strip()
            code_right = m_double.group(3)
            name_right = m_double.group(4).strip()
            
            name_left = re.sub(r'\s+Nuevo$', '', name_left).strip()
            name_right = re.sub(r'\s+Nuevo$', '', name_right).strip()
            
            i += 1
            if i < len(lines_p5):
                detail_line = lines_p5[i]
                parts = [p.strip() for p in detail_line.split("/")]
                if len(parts) >= 2:
                    if len(parts) >= 4:
                        brand_left = parts[0]
                        year_left = parts[1]
                        middle = parts[2]
                        
                        family_keywords = ["Floral Frutal", "Oriental Floral", "Chypre Frutal", "Cítrico Maderoso", "Cítrico Gourmand", "Floral Verde", "Floral Especiado", "Floral Maderoso", "Floral Aldehídico", "Maderoso Cítrico", "Chypre Floral", "Floral Floral", "Cítrico Chypre", "Froral Frutal Ambarado", "Oriental Cítrico", "Floral Fresco"]
                        family_left = ""
                        brand_right = ""
                        for kw in family_keywords:
                            if middle.startswith(kw):
                                family_left = kw
                                brand_right = middle[len(kw):].strip()
                                break
                        if not family_left:
                            family_left = " ".join(middle.split()[:2])
                            brand_right = " ".join(middle.split()[2:])
                        
                        year_right = parts[3]
                        family_right = parts[4] if len(parts) > 4 else ""
                        family_right = re.sub(r'Femeninas\s*$', '', family_right).strip()
                    else:
                        brand_left = parts[0]
                        year_left = "N/A"
                        family_left = parts[1]
                        brand_right = parts[1]
                        year_right = "N/A"
                        family_right = parts[-1]
                    
                    dama_products[code_left] = {
                        "code": code_left,
                        "name_in_catalog": name_left,
                        "brand": brand_left,
                        "year": year_left,
                        "family": family_left
                    }
                    dama_products[code_right] = {
                        "code": code_right,
                        "name_in_catalog": name_right,
                        "brand": brand_right,
                        "year": year_right,
                        "family": family_right
                    }
            i += 1
            continue
            
        i += 1

    # Male parser
    p7_text = ""
    for page in pages:
        if page.startswith("7 ---") or page.strip().endswith("\n07") or "H-13 POLO SPORT" in page:
            p7_text = page
            break

    lines_p7 = [line.strip() for line in p7_text.split("\n") if line.strip()]
    
    i = 0
    while i < len(lines_p7):
        line = lines_p7[i]
        line = re.sub(r'^(Fragancias|Listado de|Masculinas)\s*', '', line).strip()
        
        m_double = re.match(r'^(H-?[0-1][0-9])\s+(.+?)\s+(H-?[3-4][0-9])\s+(.+)$', line)
        if m_double:
            code_left = "H" + m_double.group(1).replace("H-", "").strip().zfill(2)
            name_left = m_double.group(2).strip()
            code_right = "H" + m_double.group(3).replace("H-", "").strip().zfill(2)
            name_right = m_double.group(4).strip()
            
            name_left = re.sub(r'\s+Nuevo$', '', name_left).strip()
            name_right = re.sub(r'\s+Nuevo$', '', name_right).strip()
            
            i += 1
            if i < len(lines_p7):
                detail_line = lines_p7[i]
                detail_line = re.sub(r'^(Fragancias|Listado de|Masculinas)\s*', '', detail_line).strip()
                parts = [p.strip() for p in detail_line.split("/")]
                if len(parts) >= 2:
                    if len(parts) >= 4:
                        brand_left = parts[0]
                        year_left = parts[1]
                        middle = parts[2]
                        
                        family_keywords = ["Fougere Fresco", "Fougere Aromático", "Chypre Aromático", "Maderoso Frutal", "Fougere Frutal", "Maderoso Aromático", "Chypre Maderoso", "Fougere Maderoso", "Maderoso Floral", "Cítrico Amaderado", "Cítrico Fresco", "Oriental Maderoso", "Oriental Frutal", "Maderoso Cítrico", "Maderoso Citrico", "Fougere Oriental", "Amaderado Frutal", "Oriental Especiado", "Chypre Maderoso"]
                        family_left = ""
                        brand_right = ""
                        for kw in family_keywords:
                            if middle.startswith(kw):
                                family_left = kw
                                brand_right = middle[len(kw):].strip()
                                break
                        if not family_left:
                            family_left = " ".join(middle.split()[:2])
                            brand_right = " ".join(middle.split()[2:])
                        
                        year_right = parts[3]
                        family_right = parts[4] if len(parts) > 4 else ""
                        family_right = re.sub(r'Masculinas\s*$', '', family_right).strip()
                    else:
                        brand_left = parts[0]
                        year_left = "N/A"
                        family_left = parts[1]
                        brand_right = parts[0]
                        year_right = "N/A"
                        family_right = parts[1]
                        
                    varon_products[code_left] = {
                        "code": code_left,
                        "name_in_catalog": name_left,
                        "brand": brand_left,
                        "year": year_left,
                        "family": family_left
                    }
                    varon_products[code_right] = {
                        "code": code_right,
                        "name_in_catalog": name_right,
                        "brand": brand_right,
                        "year": year_right,
                        "family": family_right
                    }
            i += 1
            continue

        m_single = re.match(r'^(H-?[1-3][0-9])\s+(.+)$', line)
        if m_single:
            code = "H" + m_single.group(1).replace("H-", "").strip().zfill(2)
            name_raw = m_single.group(2)
            name_clean = re.sub(r'(Fragancias|Aromas inspirados en:|Listado de|Masculinas)\s*$', '', name_raw).strip()
            name_clean = re.sub(r'\s+Nuevo$', '', name_clean).strip()
            
            i += 1
            if i < len(lines_p7):
                detail_line = lines_p7[i]
                detail_line = re.sub(r'^(Fragancias|Listado de|Masculinas)\s*', '', detail_line).strip()
                
                parts = [p.strip() for p in detail_line.split("/")]
                if len(parts) >= 2:
                    brand = parts[0]
                    year = parts[1] if len(parts) >= 3 else "N/A"
                    family = parts[-1]
                    family = re.sub(r'(Fragancias|Listado de|Masculinas)\s*$', '', family).strip()
                    
                    varon_products[code] = {
                        "code": code,
                        "name_in_catalog": name_clean,
                        "brand": brand,
                        "year": year,
                        "family": family
                    }
            i += 1
            continue
            
        i += 1

    print(f"Parsed {len(dama_products)} female products and {len(varon_products)} male products from catalog.")

    # 4. Helper dictionaries for generating rich descriptions, notes, and metadata
    FAMILY_NOTES = {
        "Chypre": ["Pachulí", "Musgo de roble", "Bergamota", "Rosa", "Jazmín"],
        "Floral": ["Jazmín Sambac", "Rosa de Damasco", "Nardo silvestre", "Peonía", "Almizcle blanco"],
        "Frutal": ["Pera jugosa", "Manzana verde", "Frambuesa", "Durazno", "Grosella negra"],
        "Cítrico": ["Limón de Sicilia", "Bergamota de Calabria", "Mandarina", "Pomelo rosa", "Nerolí"],
        "Maderoso": ["Madera de Cedro", "Sándalo", "Vetiver", "Pachulí", "Madera de Gaiac"],
        "Amaderado": ["Madera de Cedro", "Sándalo", "Vetiver", "Pachulí", "Madera de Gaiac"],
        "Oriental": ["Vainilla pura", "Ámbar", "Haba Tonka", "Canela", "Azafrán"],
        "Fougere": ["Lavanda francesa", "Romero", "Musgo", "Geranio", "Haba Tonka"],
        "Aromático": ["Menta fresca", "Lavanda francesa", "Romero", "Salvia", "Albahaca"],
        "Especiado": ["Pimienta negra", "Cardamomo", "Canela de Ceilán", "Clavo de olor", "Nuez moscada"],
        "Gourmand": ["Caramelo caliente", "Vainilla", "Chocolate blanco", "Crema batida", "Praliné"],
        "Verde": ["Hojas de Violeta", "Bambú", "Gálbano", "Menta fresca", "Té verde"],
        "Aldehídico": ["Aldehídos chispeantes", "Ylang-Ylang", "Rosa de Grasse", "Jazmín", "Almizcle"],
    }

    # Predefined custom details for major classic perfumes to make them look ultra premium
    CUSTOM_CLASSIC_DETAILS = {
        "F01": {
            "mainNotes": ["Musgo de roble", "Clavel", "Pachulí", "Cilantro", "Rosa", "Ylang-Ylang"],
            "description": "Un clásico chipre floral legendario. Elegante, maduro y de carácter fuerte, con un bouquet complejo coronado por musgo, pachulí y clavel.",
        },
        "F02": {
            "mainNotes": ["Ciruela", "Baya silvestre", "Nardo", "Miel", "Canela", "Incienso"],
            "description": "Una pócima hipnótica y especiada. Seductora, intensa y misteriosa, con una base profunda de incienso y miel endulzada por ciruelas.",
        },
        "F03": {
            "mainNotes": ["Clavel", "Nardo", "Ylang-Ylang", "Sándalo", "Lavanda", "Ámbar"],
            "description": "La elegancia clásica de Oscar de la Renta. Un bouquet floral tradicional y oriental, con ricas maderas cálidas y especias suaves.",
        },
        "F05": {
            "mainNotes": ["Aldehídos", "Ylang-Ylang", "Iris", "Jazmín", "Rosa de Grasse", "Sándalo"],
            "description": "El perfume de los perfumes. Una firma floral aldehídica atemporal que evoca lujo absoluto, jabón refinado y elegancia femenina.",
        },
        "F08": {
            "mainNotes": ["Nerolí de Italia", "Jazmín", "Ámbar", "Almizcle blanco", "Flor de azahar"],
            "description": "Una reinvención floral moderna. Combina el frescor limpio del nerolí con un ámbar vibrante para dar una sensación sofisticada y solar.",
        },
        "F09": {
            "mainNotes": ["Durazno maduro", "Damasco", "Rosa de Damasco", "Lichi", "Sándalo", "Vainilla"],
            "description": "Un poema de amor clásico. Cálido y envolvente, destaca por su salida aterciopelada de durazno y damasco con un corazón de rosa noble.",
        },
        "F10": {
            "mainNotes": ["Mandarina", "Jazmín", "Rosa", "Pachulí", "Vetiver", "Almizcle blanco"],
            "description": "Audaz y elegante. Un chipre fresco que representa el espíritu libre con un pachulí moderno combinado con rosas frescas y cítricos.",
        },
        "F16": {
            "mainNotes": ["Azucena", "Jacinto", "Madreselva", "Flor de azahar", "Jazmín", "Sándalo"],
            "description": "La inocencia de un jardín florido. Fresco, limpio y ultra femenino, dominado por jacintos y azucenas con un toque de sándalo.",
        },
        "F20": {
            "mainNotes": ["Clavel", "Azucena", "Hojas verdes", "Fresia", "Caléndula", "Sándalo"],
            "description": "El tributo al amor eterno. Un floral limpio, verde y radiante con un icónico clavel especiado y maderas reconfortantes.",
        },
        "F23": {
            "mainNotes": ["Flor de Azahar", "Nardo de la India", "Jazmín", "Vainilla Bourbon", "Almizcle"],
            "description": "Un viaje olfativo luminoso. Combina un radiante ramillete de flores blancas (azahar y nardo) con un cálido fondo de vainilla.",
        },
        "F27": {
            "mainNotes": ["Manzana verde", "Pepino fresco", "Toronja", "Lirio de los valles", "Sándalo"],
            "description": "Un mordisco fresco a la Gran Manzana. Crujiente, acuático y enérgico, combinando pepino refrescante con manzana y flores suaves.",
        },
        "F28": {
            "mainNotes": ["Limón", "Bergamota", "Piña", "Té verde", "Jazmín", "Cedro"],
            "description": "La revolución cítrica limpia. Una fragancia unisex emblemática y ultra fresca de té verde y limones jugosos sobre maderas.",
        },
        "F29": {
            "mainNotes": ["Flor de Azahar", "Lirio", "Gardenia", "Jazmín", "Maderas blancas", "Almizcle"],
            "description": "El latido urbano de Nueva York. Un floral limpio, moderno y metálico con pétalos frescos de gardenia y un sofisticado almizcle.",
        },
        "F31": {
            "mainNotes": ["Melón", "Durazno", "Loto", "Nenúfar", "Pachulí", "Sándalo"],
            "description": "Un paraíso exótico y acuático. Intenso y único, combina frutas maduras y flores de loto en un fondo profundo de pachulí.",
        },
        "F44": {
            "mainNotes": ["Vainilla salada", "Jazmín acuático", "Flor de jengibre", "Ámbar gris", "Sándalo"],
            "description": "El perfume de una diosa moderna. Una estela fascinante que desafía las reglas con su audaz combinación de vainilla salada y jazmín.",
        },
        "F45": {
            "mainNotes": ["Violeta noble", "Notas marinas", "Plátano verde", "Magnolia", "Pachulí"],
            "description": "Un aura de misterio y seducción juvenil. Un elixir floral de violetas empolvadas envueltas en brisa marina y sándalo.",
        },
        "F46": {
            "mainNotes": ["Pimienta rosa", "Mandarina", "Algodón de azúcar", "Gardenia", "Vainilla"],
            "description": "Seducción dulce e intrigante. Combina el picante de la pimienta rosa con la dulzura irresistible del algodón de azúcar y vainilla.",
        },
        "F49": {
            "mainNotes": ["Limón de Amalfi", "Manzana caramelizada", "Praliné", "Peonía", "Madera de manzano"],
            "description": "Un cuento de hadas goloso. La manzana de fantasía que mezcla frescura cítrica con el dulzor adictivo del caramelo y el praliné.",
        },
        "H01": {
            "mainNotes": ["Lavanda", "Limón", "Albahaca", "Musgo de roble", "Cuero", "Cedro"],
            "description": "La leyenda clásica del poder masculino. Un aroma fougère fuerte, limpio y robusto con cuero, musgo de roble y hierbas frescas.",
        },
        "H02": {
            "mainNotes": ["Anís estrellado", "Lavanda", "Albahaca", "Vetiver", "Sándalo", "Cuero"],
            "description": "Seducción y sofisticación clásica. Un fougère aromático icónico con un carácter cálido de anís y lavanda sobre cuero rico.",
        },
        "H04": {
            "mainNotes": ["Lavanda", "Romero", "Miel", "Musgo de roble", "Ámbar", "Habatonka"],
            "description": "La esencia del caballero tradicional. Un fougère aromático rico y varonil que destaca por sus hierbas frescas de romero y fondo limpio.",
        },
        "H06": {
            "mainNotes": ["Melón de Cavaillon", "Pepino", "Mandarina", "Albahaca", "Salvia", "Almizcle"],
            "description": "La inmensidad del cielo azul. Fresco y deportivo, destaca por su salida acuática de pepino y melón y un fondo suave de gamuza.",
        },
        "H09": {
            "mainNotes": ["Menta fresca", "Lavanda", "Manzana verde", "Flor de cactus", "Flor de algodonero"],
            "description": "El espíritu americano clásico. Fresco, limpio y casual, con acordes verdes de menta, manzana crujiente y flores de cactus.",
        },
        "H13": {
            "mainNotes": ["Menta", "Aldehídos", "Lavanda", "Bergamota", "Pastos marinos", "Madera de pino"],
            "description": "Energía deportiva al límite. Una inyección fougère ultra fresca con notas de menta helada, lavanda y aire libre marino.",
        },
        "H14": {
            "mainNotes": ["Hojas verdes", "Especias", "Pomelo", "Jengibre", "Salvia", "Sándalo"],
            "description": "Magnetismo urbano y cosmopolita. Combina el frescor verde y metálico de las hojas de violeta con el picante del jengibre y sándalo.",
        },
        "H15": {
            "mainNotes": ["Canela", "Nuez moscada", "Cardamomo", "Lavanda de Nyons", "Regaliz", "Sándalo"],
            "description": "Elixir de extrema riqueza e intensidad. Un concentrado nocturno y picante con especias cálidas de cardamomo y un sándalo licoroso.",
        },
        "H16": {
            "mainNotes": ["Cardamomo", "Pimienta rosa", "Hojas de violeta", "Castaña", "Vainilla", "Salvia"],
            "description": "Fuerza amorosa contemporánea. Una fragancia cálida y magnética con un acorde único de castaña caramelizada y vainilla especiada.",
        },
        "H22": {
            "mainNotes": ["Notas marinas", "Limón", "Lima", "Jazmín", "Durazno", "Ámbar gris"],
            "description": "La brisa fresca del mar mediterráneo. El perfume acuático por excelencia, fresco y cítrico con toques marinos y fondo maderoso limpio.",
        },
        "H24": {
            "mainNotes": ["Manzana verde", "Ciruela", "Canela", "Madera de Caoba", "Vainilla", "Vetiver"],
            "description": "El traje perfecto embotellado. Equilibrado, masculino y moderno, destaca por su salida de manzana verde y su fondo cálido de canela.",
        },
        "H25": {
            "mainNotes": ["Maracuyá", "Jengibre", "Pimienta negra", "Vodka", "Ginebra", "Cuero"],
            "description": "El alma de la fiesta. Un aroma oriental y maderoso, vibrante por sus acordes licorosos de ginebra y maracuyá sobre cuero sensual.",
        },
        "H26": {
            "mainNotes": ["Limón", "Té verde", "Mandarina", "Jazmín", "Almizcle blanco", "Sándalo"],
            "description": "Limpieza y frescura compartida. Una colonia cítrica ideal para uso diario, súper limpia, revitalizante y fresca.",
        },
        "H28": {
            "mainNotes": ["Menta", "Manzana verde", "Limón de Italia", "Habatonka", "Ambrosía", "Vainilla"],
            "description": "Poder, pasión y divinidad. Una bomba de seducción oriental que combina el frescor helado de la menta con la dulzura rica de habatonka.",
        },
        "H44": {
            "mainNotes": ["Lavanda enérgica", "Limón de Amalfi", "Vainilla cremosa", "Vetiver", "Madera de Cedro"],
            "description": "Futurología olfativa. Un fougère aromático nacido del encuentro de un limón enérgico y lavanda con un fondo cremoso de vainilla.",
        }
    }

    # 5. Build the final lists of products
    all_products = []

    # Function to get family and aromaType lists
    def parse_family_and_aroma(cat_family):
        # catalog families are like "Chypre Floral", "Fougere Aromático"
        # Split by spaces and strip
        fams = [f.strip() for f in re.split(r'[\s/-]+', cat_family) if f.strip()]
        
        # Clean family tags
        clean_fams = []
        for f in fams:
            f_clean = f.capitalize()
            if f_clean == "Amaderado" or f_clean == "Amaderada":
                f_clean = "Amaderado"
            clean_fams.append(f_clean)
        
        # Map to valid aromaTypes in CATEGORIES
        aroma_types = set()
        for f in clean_fams:
            f_lower = f.lower()
            if "floral" in f_lower:
                aroma_types.add("Floral")
            if "frutal" in f_lower:
                aroma_types.add("Frutal")
            if "cítrico" in f_lower or "citrico" in f_lower:
                aroma_types.add("Cítrico")
                aroma_types.add("Fresco")
            if "maderoso" in f_lower or "amaderado" in f_lower or "madera" in f_lower:
                aroma_types.add("Maderoso")
            if "oriental" in f_lower:
                aroma_types.add("Oriental")
            if "fougere" in f_lower or "fougère" in f_lower:
                aroma_types.add("Fougere")
            if "chypre" in f_lower or "chipre" in f_lower:
                aroma_types.add("Chypre")
            if "aromático" in f_lower or "aromatico" in f_lower:
                aroma_types.add("Aromático")
            if "especiado" in f_lower:
                aroma_types.add("Especiado")
            if "gourmand" in f_lower:
                aroma_types.add("Dulce")
            if "verde" in f_lower:
                aroma_types.add("Fresco")
            if "fresco" in f_lower:
                aroma_types.add("Fresco")
        if not aroma_types:
            aroma_types.add("Fresco")
        
        return clean_fams, list(aroma_types)

    # Function to get notes based on families
    def generate_notes_from_families(clean_fams):
        notes = []
        for fam in clean_fams:
            # Check matches
            for key, val in FAMILY_NOTES.items():
                if key.lower() in fam.lower():
                    for n in val:
                        if n not in notes:
                            notes.append(n)
        if not notes:
            notes = ["Notas florales", "Esencias cítricas", "Maderas nobles"]
        return notes[:6]

    # Process all female classics F01-F66
    for code_num in range(1, 67):
        code = f"F{str(code_num).zfill(2)}"
        if code in existing_map:
            # Preserve existing definition exactly
            all_products.append(existing_map[code])
            continue
        
        # We need to generate a new product for this code
        cat_data = dama_products.get(code)
        if not cat_data:
            print(f"Error: missing {code} in parsed female catalog.")
            continue
        
        raw_name = cat_data["name_in_catalog"]
        brand_raw = cat_data["brand"]
        # Format name nicely: e.g. "F-01 Paloma Picasso"
        # Capitalize raw name words nicely
        name_title = " ".join([w.capitalize() for w in raw_name.split()])
        name_formatted = f"F-{str(code_num).zfill(2)} {name_title}"
        inspired_by = " ".join([w.capitalize() for w in raw_name.split()])
        inspired_by = re.sub(r'\(.*?\)', '', inspired_by).strip()
        
        # Family & Aroma types
        clean_fams, aroma_types = parse_family_and_aroma(cat_data["family"])
        
        # Quadrant
        qid = quadrant_map.get(code, "q3") # default to q3
        
        # Notes & Description
        custom = CUSTOM_CLASSIC_DETAILS.get(code, {})
        notes = custom.get("mainNotes", generate_notes_from_families(clean_fams))
        
        # Occasions
        is_fresh = any(x in ["Cítrico", "Fresco", "Frutal", "Verde"] for x in aroma_types) or qid in ["q1", "q2"]
        if is_fresh:
            occasions = ["Diario", "Oficina / trabajo", "Primavera / verano"]
            intensity = "Fresco"
        else:
            occasions = ["Salidas de noche", "Citas o momentos especiales", "Otoño / invierno"]
            intensity = "Intenso" if qid == "q4" else "Equilibrado"

        # Overwrite with custom classic details if available
        description = custom.get("description")
        if not description:
            family_str = " / ".join(clean_fams).lower()
            notes_str = ", ".join(notes[:3]).lower()
            description = f"Inspirado en la elegancia de {inspired_by} de {brand_raw}. Una fragancia {family_str} que combina notas de {notes_str} para crear una estela sofisticada, sensual y duradera."

        p_obj = {
            "id": f"m-{code.lower()}",
            "code": code,
            "line": "Mujer",
            "name": name_formatted,
            "inspiredBy": inspired_by,
            "brandReference": brand_raw,
            "gender": "Mujer",
            "family": clean_fams,
            "aromaType": aroma_types,
            "mainNotes": notes,
            "occasion": occasions,
            "intensity": intensity,
            "format": "100 ml",
            "priceKey": "perfume100",
            "stock": "Disponible",
            "image": "/images/perfume-mujer.jpg",
            "tags": ["clásico", "femenino", "elegante"] + [f.lower() for f in clean_fams],
            "description": description
        }
        all_products.append(p_obj)

    # Process all male classics H01-H45
    for code_num in range(1, 46):
        code = f"H{str(code_num).zfill(2)}"
        if code in existing_map:
            # Preserve existing definition
            all_products.append(existing_map[code])
            continue
        
        # We need to generate a new product for this code
        cat_data = varon_products.get(code)
        if not cat_data:
            print(f"Error: missing {code} in parsed male catalog.")
            continue
        
        raw_name = cat_data["name_in_catalog"]
        brand_raw = cat_data["brand"]
        name_title = " ".join([w.capitalize() for w in raw_name.split()])
        name_formatted = f"H-{str(code_num).zfill(2)} {name_title}"
        inspired_by = " ".join([w.capitalize() for w in raw_name.split()])
        inspired_by = re.sub(r'\(.*?\)', '', inspired_by).strip()
        
        clean_fams, aroma_types = parse_family_and_aroma(cat_data["family"])
        qid = quadrant_map.get(code, "q2") # default to q2
        
        custom = CUSTOM_CLASSIC_DETAILS.get(code, {})
        notes = custom.get("mainNotes", generate_notes_from_families(clean_fams))
        
        is_fresh = any(x in ["Cítrico", "Fresco", "Acuático", "Verde"] for x in aroma_types) or qid in ["q1", "q2"]
        if is_fresh:
            occasions = ["Diario", "Oficina / trabajo", "Primavera / verano"]
            intensity = "Fresco"
        else:
            occasions = ["Salidas de noche", "Citas o momentos especiales", "Otoño / invierno"]
            intensity = "Intenso" if qid == "q4" else "Equilibrado"

        description = custom.get("description")
        if not description:
            family_str = " / ".join(clean_fams).lower()
            notes_str = ", ".join(notes[:3]).lower()
            description = f"Inspirado en el carácter y magnetismo de {inspired_by} de {brand_raw}. Un aroma {family_str} que conjuga la fuerza de {notes_str}, diseñado para el hombre moderno y distinguido."

        p_obj = {
            "id": f"h-{code.lower()}",
            "code": code,
            "line": "Hombre",
            "name": name_formatted,
            "inspiredBy": inspired_by,
            "brandReference": brand_raw,
            "gender": "Hombre",
            "family": clean_fams,
            "aromaType": aroma_types,
            "mainNotes": notes,
            "occasion": occasions,
            "intensity": intensity,
            "format": "100 ml",
            "priceKey": "perfume100",
            "stock": "Disponible",
            "image": "/images/perfume-hombre.jpg",
            "tags": ["clásico", "masculino", "varonil"] + [f.lower() for f in clean_fams],
            "description": description
        }
        all_products.append(p_obj)

    # Process all Red and Black premium lines (Q01-Q09, Q51-Q59)
    # They should already be in existing_map. Let's make sure they are copied over.
    for q_code_num in range(1, 10):
        code = f"Q0{q_code_num}"
        if code in existing_map:
            all_products.append(existing_map[code])
        else:
            print(f"Error: Red Premium {code} missing in existing_products.json!")
            
    for q_code_num in range(51, 60):
        code = f"Q{q_code_num}"
        if code in existing_map:
            all_products.append(existing_map[code])
        else:
            print(f"Error: Black Premium {code} missing in existing_products.json!")

    # Process Teens (J00-J09)
    # J00, J01, J07 are in existing_map. The others (J02, J03, J04, J05, J06, J08, J09) must be generated.
    # Teen definitions database
    teen_definitions = {
        "J02": {
            "inspiredBy": "Selena", "brandReference": "Selena Gomez", "gender": "Mujer", "line": "Teen Girl",
            "family": ["Floral", "Frutal", "Gourmand"], "aromaType": ["Dulce", "Frutal", "Gourmand"],
            "mainNotes": ["Frambuesa", "Durazno", "Piña", "Fresa", "Chocolate", "Vainilla"],
            "occasion": ["Diario", "Primavera / verano", "Regalo"], "intensity": "Equilibrado",
            "description": "Un perfume alegre y juguetón. Una mezcla de frutas tropicales deliciosas como piña y frambuesa con un dulce corazón de chocolate y vainilla."
        },
        "J03": {
            "inspiredBy": "Bombshell", "brandReference": "Victoria's Secret", "gender": "Mujer", "line": "Teen Girl",
            "family": ["Floral", "Frutal"], "aromaType": ["Frutal", "Floral", "Fresco"],
            "mainNotes": ["Maracuyá", "Toronja", "Fresa", "Peonía", "Orquídea vainilla", "Almizcle"],
            "occasion": ["Diario", "Primavera / verano", "Regalo"], "intensity": "Fresco",
            "description": "Inspirado en Bombshell de Victoria's Secret. Una fragancia chispeante y fresca de frutas exóticas y flores brillantes, ideal para destacar con energía."
        },
        "J04": {
            "inspiredBy": "Thank U, Next", "brandReference": "Ariana Grande", "gender": "Mujer", "line": "Teen Girl",
            "family": ["Floral", "Frutal", "Gourmand"], "aromaType": ["Dulce", "Frutal", "Gourmand"],
            "mainNotes": ["Pera jugosa", "Frambuesa silvestre", "Crema de Coco", "Pétalos de Rosa pink", "Macarrón dulce", "Almizcle velvet"],
            "occasion": ["Diario", "Regalo", "Salidas de noche"], "intensity": "Cálido",
            "description": "Inspirado en Thank U, Next de Ariana Grande. Abre con pera y frambuesa salvaje, fundiéndose en un adictivo corazón de crema de coco y galleta de macarrón."
        },
        "J05": {
            "inspiredBy": "Meow", "brandReference": "Katy Perry", "gender": "Mujer", "line": "Teen Girl",
            "family": ["Floral", "Frutal", "Gourmand"], "aromaType": ["Dulce", "Gourmand", "Polvoso"],
            "mainNotes": ["Pera", "Tangerina", "Gardenia", "Vainilla", "Almizcle", "Sándalo", "Ámbar"],
            "occasion": ["Diario", "Regalo"], "intensity": "Cálido",
            "description": "Inspirado en Meow de Katy Perry. Un aroma sumamente tierno y dulce con notas de pera y tangerina que se mezclan con vainilla cremosa, almizcle y sándalo."
        },
        "J06": {
            "inspiredBy": "Sweet Like Candy", "brandReference": "Ariana Grande", "gender": "Mujer", "line": "Teen Girl",
            "family": ["Floral", "Frutal", "Gourmand"], "aromaType": ["Dulce", "Frutal", "Gourmand"],
            "mainNotes": ["Mora de zarza", "Bergamota", "Crema batida", "Malvavisco", "Vainilla", "Madera de cachemira"],
            "occasion": ["Diario", "Regalo", "Citas o momentos especiales"], "intensity": "Cálido",
            "description": "Inspirado en Sweet Like Candy de Ariana Grande. Una explosión golosa de moras jugosas y crema batida mezcladas con esponjosos malvaviscos y vainilla."
        },
        "J08": {
            "inspiredBy": "Spirit of the Brave", "brandReference": "Diesel", "gender": "Hombre", "line": "Teen Boy",
            "family": ["Amaderado", "Aromático"], "aromaType": ["Maderoso", "Fresco", "Especiado"],
            "mainNotes": ["Bergamota", "Gálbano", "Ciprés", "Abeto", "Labdanum", "Habatonka"],
            "occasion": ["Diario", "Oficina / trabajo", "Deportivo"], "intensity": "Equilibrado",
            "description": "Inspirado en Spirit of the Brave de Neymar Diesel. Un perfume con actitud fresca y maderosa, que combina ciprés verde y bergamota sobre un fondo de abeto."
        },
        "J09": {
            "inspiredBy": "Invictus Aqua", "brandReference": "Paco Rabanne", "gender": "Hombre", "line": "Teen Boy",
            "family": ["Fougere", "Acuático"], "aromaType": ["Fresco", "Acuático", "Cítrico"],
            "mainNotes": ["Pomelo amargo", "Hojas de violeta", "Notas marinas", "Palo de rosa", "Ámbar gris", "Madera de ámbar"],
            "occasion": ["Diario", "Primavera / verano", "Deportivo"], "intensity": "Fresco",
            "description": "Inspirado en Invictus Aqua de Paco Rabanne. Una oleada ultra fresca de notas marinas saladas y pomelo enérgico, ideal para días de calor y deporte."
        }
    }

    for j_num in range(0, 10):
        code = f"J{str(j_num).zfill(2)}"
        if code in existing_map:
            all_products.append(existing_map[code])
            continue
        
        # Generate Teen product
        t_def = teen_definitions.get(code)
        if not t_def:
            print(f"Error: Missing J code definition for {code}!")
            continue
        
        line_str = t_def["line"]
        gender_str = t_def["gender"]
        img_str = "/images/perfume-teen.jpg" if gender_str == "Mujer" else "/images/perfume-teen-boy.jpg"
        
        p_obj = {
            "id": f"j-{code.lower()}",
            "code": code,
            "line": line_str,
            "name": f"{code[0]}-{code[1:]} {t_def['inspiredBy']} Teen {line_str.split()[-1]}",
            "inspiredBy": t_def["inspiredBy"],
            "brandReference": t_def["brandReference"],
            "gender": gender_str,
            "family": t_def["family"],
            "aromaType": t_def["aromaType"],
            "mainNotes": t_def["mainNotes"],
            "occasion": t_def["occasion"],
            "intensity": t_def["intensity"],
            "format": "Teen 50 ml",
            "priceKey": "teen50",
            "stock": "Disponible",
            "image": img_str,
            "tags": ["teen", "juvenil", t_def["inspiredBy"].lower()] + [f.lower() for f in t_def["family"]],
            "description": t_def["description"]
        }
        all_products.append(p_obj)

    # Process Lavit lines (L76, L59, L71, L68, L62)
    # L76, L59, L71 are in existing. L68, L62 must be generated.
    lavit_definitions = {
        "L68": {
            "inspiredBy": "Cheirosa 68", "brandReference": "Sol de Janeiro",
            "family": ["Floral", "Frutal"], "aromaType": ["Fresco", "Floral", "Frutal"],
            "mainNotes": ["Fruta del dragón rosa", "Lichi", "Jazmín de Brasil", "Hibisco", "Vainilla sheer", "Almizcle solar"],
            "occasion": ["Diario", "Primavera / verano"], "intensity": "Fresco",
            "description": "Inspirado en Cheirosa 68 de Sol de Janeiro. Transporta tus sentidos a los jardines abundantes frente al mar de Brasil. Notas de fruta del dragón, lichi y jazmín de agua."
        },
        "L62": {
            "inspiredBy": "Cheirosa 62", "brandReference": "Sol de Janeiro",
            "family": ["Gourmand"], "aromaType": ["Dulce", "Cálido", "Gourmand"],
            "mainNotes": ["Pistacho tostado", "Almendra", "Helotropo", "Pétalos de Jazmín", "Caramelo salado", "Sándalo", "Vainilla"],
            "occasion": ["Diario", "Primavera / verano", "Otoño / invierno"], "intensity": "Cálido",
            "description": "Inspirado en Cheirosa 62 de Sol de Janeiro. El aroma icónico del verano brasileño. Una mezcla ultra adictiva de pistacho tostado, almendras dulces y caramelo salado."
        }
    }

    for l_num in [76, 59, 71, 68, 62]:
        code = f"L{l_num}"
        if code in existing_map:
            all_products.append(existing_map[code])
            continue
        
        l_def = lavit_definitions.get(code)
        if not l_def:
            print(f"Error: Missing Lavit definition for {code}!")
            continue
        
        p_obj = {
            "id": f"l-{l_num}",
            "code": code,
            "line": "Lavit",
            "name": f"Lavit {l_num} Body Splash",
            "inspiredBy": l_def["inspiredBy"],
            "brandReference": l_def["brandReference"],
            "gender": "Mujer",
            "family": l_def["family"],
            "aromaType": l_def["aromaType"],
            "mainNotes": l_def["mainNotes"],
            "occasion": l_def["occasion"],
            "intensity": l_def["intensity"],
            "format": "Lavit / Body Splash",
            "priceKey": "lavitBodySplash210",
            "stock": "Disponible",
            "image": "/images/lavit-splash.jpg",
            "tags": ["body-splash", "fresco", "lavit", "sol de janeiro", l_def["inspiredBy"].lower()],
            "description": l_def["description"]
        }
        all_products.append(p_obj)

    # Process S-400 Colognes (S01-S30, S100-S117)
    # Female S-400 mappings
    s_female_mappings = {
        "S01": "F22", "S02": "F03", "S03": "F05", "S04": "F09", "S05": "F18",
        "S06": "F13", "S07": "F16", "S08": "F17", "S09": "F29", "S10": "F31",
        "S11": "F41", "S12": "F44", "S13": "F28", "S14": "F38", "S15": "F49",
        "S16": "F07", "S17": "F27", "S18": "F15", "S19": "F64", "S20": "F36",
        "S21": "F55", "S22": "F40", "S23": "F45", "S24": "F46", "S25": "F50",
        "S26": "F60", "S27": "F57", "S28": "F43", "S29": "F23", "S30": "F06",
    }
    
    # Male S-400 mappings
    s_male_mappings = {
        "S100": "H44", "S101": "H02", "S102": "H18", "S103": "H09", "S104": "H04",
        "S105": "H10", "S106": "H11", "S107": "H34", "S108": "H24", "S109": "H13",
        "S110": "H25", "S111": "H27", "S112": "H22", "S113": "H14", "S114": "H36",
        "S115": "H06", "S116": "H38", "S117": "H43",
    }

    # Helper function to generate S-400 item based on parent classic
    def make_s400_product(s_code, parent_code, gender):
        # Find the parent product we already added
        parent = next((p for p in all_products if p["code"] == parent_code), None)
        if not parent:
            print(f"Error: parent {parent_code} not found for S-400 {s_code}!")
            return None
        
        # S-400 name formatting
        # If code is S01 to S30, format number as e.g. "S-01"
        # If code is S100 to S117, format number as "S-100"
        code_formatted = f"S-{s_code[1:]}"
        name_formatted = f"{code_formatted} {parent['inspiredBy']}"
        
        # Descriptions should explain it is a lighter colonia version in 400ml
        description = f"Una versión ligera, fresca y revitalizante en formato colonia de 400 ml, inspirada en {parent['inspiredBy']} de {parent['brandReference']}. Ideal para disfrutar de una frescura prolongada después de la ducha o a lo largo del día."

        return {
            "id": f"s-{s_code.lower()}",
            "code": s_code,
            "line": "S-400",
            "name": name_formatted,
            "inspiredBy": parent["inspiredBy"],
            "brandReference": parent["brandReference"],
            "gender": gender,
            "family": parent["family"],
            "aromaType": parent["aromaType"],
            "mainNotes": parent["mainNotes"],
            "occasion": ["Diario", "Primavera / verano", "Deportivo"],
            "intensity": "Ligero",
            "format": "Colonia S-400",
            "priceKey": "coloniaS400",
            "stock": "Disponible",
            "image": parent["image"],
            "tags": ["colonia", "s-400", "fresco", "suave", parent["inspiredBy"].lower()] + [t for t in parent["tags"] if t not in ["clásico", "premium", "noche", "seductor"]],
            "description": description
        }

    for s_code, parent_code in s_female_mappings.items():
        s_prod = make_s400_product(s_code, parent_code, "Mujer")
        if s_prod:
            all_products.append(s_prod)

    for s_code, parent_code in s_male_mappings.items():
        s_prod = make_s400_product(s_code, parent_code, "Hombre")
        if s_prod:
            all_products.append(s_prod)

    print(f"Compiled all {len(all_products)} products successfully.")
    
    # 6. Write products to products.ts
    output_path = r"c:\Users\marco\Documents\parfums\src\data\products.ts"
    
    # Generate TypeScript code
    ts_code = "import { Product } from \"../types/product\";\n\n"
    ts_code += "export const products: Product[] = "
    
    # Formatted dump of the objects
    # Using JSON dump, then we clean it up to make it prettier TS
    json_dump = json.dumps(all_products, ensure_ascii=False, indent=2)
    # Convert double quotes on keys to no quotes or single quotes where needed, but keeping JSON-like is totally valid TS!
    # Let's keep it simple and just output the valid JS array
    ts_code += json_dump + ";\n"

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(ts_code)
    print(f"Successfully generated and wrote products to {output_path}.")

if __name__ == "__main__":
    generate_products()
