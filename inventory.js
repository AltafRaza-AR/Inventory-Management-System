let inventory = [];

function displayInventory() {
    const inventoryDisplay = document.getElementById('inventory-display');
    inventoryDisplay.innerHTML = '';

    if (inventory.length === 0) {
        inventoryDisplay.innerHTML = '<p>No items in the inventory.</p>';
        return;
    }

    inventory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}
        <button onclick="deleteItemFromInventory(${item.id})">Delete</button>`;
        inventoryDisplay.appendChild(itemDiv);
    });
}

function addItemToInventory() {
    const id = parseInt(document.getElementById('item-id').value);
    const name = document.getElementById('item-name').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const price = parseFloat(document.getElementById('item-price').value);

    if (!id || !name || !quantity || !price) {
        alert("Please fill out all fields.");
        return;
    }

    const item = { id, name, quantity, price };
    addItem(inventory, item);
    displayInventory();
}

function addItem(inventory, item) {
    inventory.push(item);
    console.log(`Item added:`, item);
}

function deleteItemFromInventory(id) {
    deleteItem(inventory, id);
    displayInventory();
}

function deleteItem(inventory, id) {
    const index = inventory.findIndex(i => i.id === id);
    if (index !== -1) {
        let removedItem = inventory.splice(index, 1);
        console.log(`Item removed:`, removedItem[0]);
    } else {
        console.log(`Item with id ${id} not found.`);
    }
}
