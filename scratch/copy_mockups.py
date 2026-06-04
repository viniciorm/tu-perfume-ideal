import os
import shutil
import glob

def copy_mockups_to_artifacts():
    brain_dir = r"C:\Users\marco\.gemini\antigravity\brain\f675bfd1-7faf-4e29-ab60-a97d28178e52"
    artifacts_dir = os.path.join(brain_dir, "artifacts")
    os.makedirs(artifacts_dir, exist_ok=True)
    
    # Find elite_nuit_mockup
    elite_pattern = os.path.join(brain_dir, "elite_nuit_mockup_*.png")
    elite_files = glob.glob(elite_pattern)
    if elite_files:
        src = elite_files[0]
        dst = os.path.join(artifacts_dir, "elite_nuit_mockup.png")
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")
    else:
        print("Elite Nuit mockup not found!")
        
    # Find brise_purete_mockup
    brise_pattern = os.path.join(brain_dir, "brise_purete_mockup_*.png")
    brise_files = glob.glob(brise_pattern)
    if brise_files:
        src = brise_files[0]
        dst = os.path.join(artifacts_dir, "brise_purete_mockup.png")
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")
    else:
        print("Brise de Purete mockup not found!")

if __name__ == "__main__":
    copy_mockups_to_artifacts()
