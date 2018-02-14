var shoppingList = ['Coffee', 'Milk', 'Sugar', 'Bananas', 'Oatmeal', 'Potatoes', 'Eggs'];
var list = document.getElementById('list');

for (var i = 0; i < shoppingList.length; i++) {
    var itemInList = shoppingList[i];
    var li = document.createElement('li');
    li.innerHTML = itemInList;
    list.appendChild(li);
}   
