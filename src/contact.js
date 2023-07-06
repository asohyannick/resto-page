function craeteContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact')
    
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = ' 654426490';

    const address = document.createElement('p');
    address.textContent = 'CM , Cameroon, South West Region, Limbe, Atlantic Waves'

    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = '../resources/two.jpg'
    restaurantLocation.alt = 'AtLantic Wavess, Bakoko'

    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)

    return contact
}

function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(craeteContact());
}

export default loadContact

