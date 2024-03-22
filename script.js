window.onload = function() {
    document.querySelector('.loading').style.display = 'none';
};
function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
