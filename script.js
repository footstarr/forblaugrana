
document.addEventListener('DOMContentLoaded', function () {
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.getElementById('hamburger-menu');

    // Ketika hamburger menu di klik
    hamburger.onclick = () => {
        navbarNav.classList.toggle('active');
    }

    // Klik di luar sidebar untuk menghilangkan nav
    document.addEventListener('click', function (e) {
        const isClickInsideNavbar = hamburger.contains(e.target) || navbarNav.contains(e.target);

        if (!isClickInsideNavbar) {
            navbarNav.classList.remove('active');
        }
    });
});
