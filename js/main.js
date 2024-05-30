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

// after fetching the colors, call addItem with each color
function fetchColorsList() {
  
}//fetchColorsList

function loadColorsFromStorage() {
  
}//loadColorsFromStorage

