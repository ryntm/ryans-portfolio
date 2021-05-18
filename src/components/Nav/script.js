function showMenu() {
    let menu = document.getElementsByClassName("menu")
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    };
}