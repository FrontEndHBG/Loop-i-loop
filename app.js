const shoppingList = ['Coffee', 'Milk', 'Sugar', 'Bananas', 'Oatmeal', 'Potatoes', 'Eggs'];
const list = document.getElementById('list');

for (let i = 0; i < shoppingList.length; i++) {
    let itemInList = shoppingList[i];
    let li = document.createElement('li');
    li.innerHTML = itemInList;
    list.appendChild(li);
}   
