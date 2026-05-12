function showSection(sectionId) {
    
    // 1. எல்லா செக்ஷன்களையும் மறைக்கிறோம்
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // 2. கிளிக் செய்யப்பட்ட செக்ஷனை மட்டும் காட்டுகிறோம்
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        setTimeout(() => {
            activeSection.classList.add('active');
        }, 10);
    }
}