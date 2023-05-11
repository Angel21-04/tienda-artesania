function classToggle() {
    const navs = document.querySelectorAll('.menu-items')

    navs.forEach(nav => nav.classList.toggle('menu-ToggleShow'));
}

document.querySelector('.menu-toggle')
    .addEventListener('click', classToggle);