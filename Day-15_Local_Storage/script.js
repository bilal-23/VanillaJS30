'use strict'

const addItems = document.querySelector('.add-items');
const itemList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem('items')) || [];
populateList(items, itemList);

//fucntions

function addItem(e) {
    e.preventDefault(); //stops refreshing a page
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: 'false'
    };
    // console.log(item);
    items.push(item);
    populateList(items, itemList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
    // console.table(items);
}

function populateList(plates = [], platesList) { // first one is array where data will be stored and second is the html element where we will show the element

    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li> 
        <input type="checkbox" data-index=${i} id="item${i}"
         ${plate.done ? 'checked' : ''}>
        <label for="item${i}"> ${plate.text} </label>
        </li>
        `
    }).join('');

}

// function toggleDone(e) {
//     if (!e.target.matches('input')) return;
//     const el = e.target;
//     const index = el.dataset.index;
//     items[index].done = !items[index].done;
//     localStorage.setItem('items', JSON.stringify(items));
//     populateList(items,itemList);
// }
function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList);
  }

//Events
addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);
