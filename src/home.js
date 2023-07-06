function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const chefImage = document.createElement('img');
    chefImage.src = '../resources/three.jpg';
    chefImage.alt = 'Chef';

    home.appendChild(createParagraph('Best pizza in your country'));
    home.appendChild(createParagraph('Made with passion since 1908'));
    home.appendChild(chefImage);
    home.appendChild(createParagraph('Order Online or visit us'));


    return home;
}

function createParagraph(text) {
    const paaragraph = document.createElement('p');
    paaragraph.textContent = text;
    return paaragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;