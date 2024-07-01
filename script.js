window = {};
//window was undefined so I added the above code and that removed the error.
window.onload = function () {
  initShoppingList();
};

function initShoppingList() {
   let form = document.getElementById("item-form");
   form.addEventListener("submit", (event) => {
    handleItemForm(event, form);
  });
}

function handleItemForm(event, formRef) {
  if (event.preventDefault) {
     event.preventDefault();
}

addItemToShoppingList();
  formRef.reset();

  return false;
}

function addItemToShoppingList() {
   let itemName = document.getElementById("item-name");
   let itemAmount = document.getElementById("item-amount");
   let id = getRandomInt(0, 10000000);

   let itemHtml = createListItemHtml(itemName.value, itemAmount.value, id);
   console.log("Item HTML: ", itemHtml);
   let itemListRef = document.getElementById("shopping-list");
   itemListRef.insertAdjacentHTML("afterend", itemHtml);

function createListItemHtml(itemName, itemAmount, id) {
  return `<li id="item${id}">
            ${itemName} - ${itemAmount}
            <button id="button${id}" type="button" class="delete-button">Delete Item</button>
            </li>`;
  }

function removeListItem(id) {
   let listItem = document.getElementById("item" + id);
   listItem.parentNode.removeChild(listItem);
  }

setDeleteButtonEvent(id);

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button" + id);
    deleteButton.addEventListener("click", () => {
      removeListItem(id);
    });
  }

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }}