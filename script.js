document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '72px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#0a0b10';
                navLinks.style.padding = '24px';
                navLinks.style.borderBottom = '1px solid #2d3248';
            }
        });
    }

    // Direct APK Download Handler
    const directDownloadBtn = document.getElementById('directDownloadBtn');
    if (directDownloadBtn) {
        directDownloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Dark Alarm APK v1.0 is compiling and ready. In the app environment, you can export your signed APK or install directly from your Android device build!');
        });
    }
});
