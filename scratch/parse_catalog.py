import re

def parse_catalog():
    with open(r"c:\Users\marco\Documents\parfums\docs\Catalogo.Parfums.txt", "r", encoding="utf-8") as f:
        content = f.read()

    pages = content.split("--- PAGE ")
    
    dama_products = {}
    varon_products = {}
    
    # ------------------ PARSE FEMALE (PAGE 5) ------------------
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
                    # Let's see: we want to split the parts into left and right.
                    # Standard left part: brand_left, year_left, family_left
                    # Standard right part: brand_right, year_right, family_right
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
                        # Fallback for simpler lines
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

    # ------------------ PARSE MALE (PAGE 7) ------------------
    p7_text = ""
    for page in pages:
        if page.startswith("7 ---") or page.strip().endswith("\n07") or "H-13 POLO SPORT" in page:
            p7_text = page
            break

    lines_p7 = [line.strip() for line in p7_text.split("\n") if line.strip()]
    
    i = 0
    while i < len(lines_p7):
        line = lines_p7[i]
        
        # Clean line headers like "Masculinas" or "Listado de"
        line = re.sub(r'^(Fragancias|Listado de|Masculinas)\s*', '', line).strip()
        
        # Match two-column H-01 DRAKKAR NOIR H-34 ONE MILLION
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

        # Match single column H-13 to H-33
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

    print(f"Parsed {len(dama_products)} dama products.")
    print(f"Parsed {len(varon_products)} varon products.")
    
    missing_h = [f"H{str(x).zfill(2)}" for x in range(1, 46) if f"H{str(x).zfill(2)}" not in varon_products]
    print(f"Missing H codes: {missing_h}")

if __name__ == "__main__":
    parse_catalog()
