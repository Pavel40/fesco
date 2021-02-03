const navLinks = document.getElementById('nav-links');
function navigation() {
    const style = window.getComputedStyle(navLinks);
    const display = style.getPropertyValue('display');
    if (display === "none") {
        navLinks.style.display = 'block';
    }
    else {
        navLinks.style.display = 'none';
    }
}