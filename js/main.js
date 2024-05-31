const itemsContainer = document.querySelector("#list-items");

function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.pantone_value + '</p>\n' +
        '        <div style="background:' + item.color + ';">' + item.color + '</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';

    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
}//addItem

function fetchColorsList() {
    fetch('https://reqres.in/api/colors')
        .then(response => response.json())
        .then(colors => {loadColorsFromStorage(colors)})
        .catch(error => console.error('Error obteniendo los colores', error));
}//fetchColorsList

function loadColorsFromStorage(colors) {
    const colorList = colors.data;
    colorList.forEach(item => {
        addItem(item);
    });
    localStorage.setItem('colors', JSON.stringify(colorList));
}//loadColorsFromStorage

fetchColorsList()

