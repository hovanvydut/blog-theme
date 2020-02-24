(function toggleMainMenu() {
    const toggleMenu = document.getElementsByClassName('toggle-menu')[0];
    const header = document.getElementsByTagName('header')[0];
    const main = document.getElementsByTagName('main')[0];
    toggleMenu.addEventListener('click', e => {
        toggleMenu.classList.toggle('active');
        header.classList.toggle('active');
        main.classList.toggle('active');
    });
})();

(function selectMainMenuItem() {
    const mainMenuItem = Array.from(
        document.getElementsByClassName('main-menu__item')
    );
    mainMenuItem.forEach(item => {
        item.addEventListener('click', e => {
            mainMenuItem.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        });
    });
})();
