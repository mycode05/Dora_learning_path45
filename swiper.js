// Initial item list
let items = [
  { name: "Apples", category: "Fruit" },
  { name: "Bananas", category: "Fruit" },
  { name: "Cheese", category: "Dairy" },
  { name: "Milk", category: "Dairy" },
  { name: "Carrots", category: "Fruit" },
  { name: "Yogurt", category: "Dairy" },
  { name: "Cookies", category: "Other" },
  { name: "Juice", category: "Other" }
];

const listContainer = document.getElementById("shoppingList");

// Arrow function to render list
const renderList = (list) => {
  listContainer.innerHTML = "";
  list.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `🛒 <strong>${item.name}</strong> <em>(${item.category})</em>`;
    listContainer.appendChild(li);
  });
};

// Event handlers using arrow functions
document.getElementById("sortBtn").addEventListener("click", () => {
  const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
  renderList(sorted);
});

document.getElementById("filterFruits").addEventListener("click", () => {
  const fruits = items.filter(item => item.category === "Fruit");
  renderList(fruits);
});

document.getElementById("filterDairy").addEventListener("click", () => {
  const dairy = items.filter(item => item.category === "Dairy");
  renderList(dairy);
});

document.getElementById("showAll").addEventListener("click", () => {
  renderList(items);
});

document.getElementById("addBtn").addEventListener("click", () => {
  const itemName = document.getElementById("newItemName").value.trim();
  const itemCategory = document.getElementById("newItemCategory").value;

  if (itemName) {
    items.push({ name: itemName, category: itemCategory });
    renderList(items);
    document.getElementById("newItemName").value = "";
  } else {
    alert("Please enter an item name!");
  }
});

// Initial render
renderList(items);
