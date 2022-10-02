import { modalCategory } from "./food-menu.js";
import { food } from "./food-data.js";

const modal = document.getElementById("modal");
const radioButtonsFoodSize = document.querySelectorAll(
  'input[name="food-size"]'
);
const radioButtonsSauce = document.querySelectorAll('input[name="sauce"]');
const radioButtonsFriesPortion = document.querySelectorAll(
  'input[name="fries-portion"]'
);
const radioButtonsDrinkSize = document.querySelectorAll(
  'input[name="drink-size"]'
);
const allRadioButtons = document.querySelectorAll('input[type="radio"]');
const controlsButtons = document.querySelectorAll(".control");
const modalBodies = document.querySelectorAll(".modal-body");
const tabButtons = document.querySelectorAll(".tab-button");
const openModalButton = document.querySelectorAll(".food-button");
const closeModalButton = document.getElementById("close-modal-button");
const fade = document.getElementById("fade");
const modalOptions = document.querySelectorAll(".options");
const modalFooterButton = document.querySelector(".modal-footer-button");
const ordersContainer = document.getElementById("orders")
const foodName = document.getElementById("food-name");
const foodImage = document.getElementById("food-image");
const foodPrice = document.getElementById("food-price");
const removeOrderButtons = document.getElementById("orders");
const orderButton = document.getElementById("order-button");
const finishButton = document.getElementById("finish-button");
const isModalOpen = false;
let inputQuantity = document.querySelector('input[name="quantinty"]');
let price = 28.55;
let foodQuantinty = 1;
let database = [];

const updateDatabase = (database) =>
  localStorage.setItem("orders", JSON.stringify(database));
const getDatabase = () => JSON.parse(localStorage.getItem("orders")) ?? [];

const highlightRadio = (event) => {
  const radio = event.target;
  if (radio.name === "food-size") {
    radioButtonsFoodSize.forEach((input) =>
      input.parentNode.classList.remove("highlight-radio")
    );
    radio.parentNode.classList.add("highlight-radio");
  } else if (radio.name === "sauce") {
    radioButtonsSauce.forEach((input) =>
      input.parentNode.classList.remove("highlight-radio")
    );
    radio.parentNode.classList.add("highlight-radio");
  } else if (radio.name === "fries-portion") {
    radioButtonsFriesPortion.forEach((input) =>
      input.parentNode.classList.remove("highlight-radio")
    );
    radio.parentNode.classList.add("highlight-radio");
  } else if (radio.name === "drink-size") {
    radioButtonsDrinkSize.forEach((input) =>
      input.parentNode.classList.remove("highlight-radio")
    );
    radio.parentNode.classList.add("highlight-radio");
  }
  setTotal();
};

const handleControl = (event) => {
  const control = event.target.id;
  let valueQuantity = parseInt(inputQuantity.value);
  inputQuantity.value =
    control === "control-plus" ? ++valueQuantity : --valueQuantity;
  if (inputQuantity.value < 1) inputQuantity.value = 1;
  foodQuantinty = valueQuantity;
  setTotal();
};

const changeToModalShopTab = (isToModalShop) => {
  const modalFood = document.querySelector(".modal-food");
  const modalShop = document.querySelector(".modal-shop");
  if (isToModalShop) {
    modalBodies.forEach((body) => body.classList.remove("modal-tab-open"));
    modalShop.classList.add("modal-tab-open");
  } else {
    modalBodies.forEach((body) => body.classList.remove("modal-tab-open"));
    modalFood.classList.add("modal-tab-open");
  }
  modal.scrollTop = 0;
  isModalOpen ? null : openModal();
};

const handleButton = (event) => {
  const button = event.target;
  if (button.id === "food-tab") {
    changeToModalShopTab(false);
  } else if (button.id === "shop-tab") {
    changeToModalShopTab(true);
  }
};

const openModal = () =>
  [modal, fade].forEach((element) => {
    element.classList.remove("hidden");
    allRadioButtons.forEach((radio) => {
      if (radio.classList.contains("default")) {
        radio.parentNode.classList.add("highlight-radio");
        radio.checked = true;
      }
    });
    !isModalOpen;
  });
const closeModal = () =>
  [modal, fade].forEach((element) => {
    element.classList.add("hidden");
    allRadioButtons.forEach((radio) => {
      radio.parentNode.classList.remove("highlight-radio");
      radio.checked = false;
      modal.scrollTop = 0;
      foodQuantinty = 1;
    });
  });

const changeCategory = () => {
  const foodCategory = modalCategory;
  const option = document.getElementById(modalCategory + "-options");
  modalOptions.forEach((option) => option.classList.remove("selected-options"));
  option.classList.add("selected-options");
  return foodCategory;
};

const getRadioValues = () => {
  let radioValuestotal = 0;
  allRadioButtons.forEach(
    (radio) => (radioValuestotal += radio.checked ? parseFloat(radio.value) : 0)
  );
  return radioValuestotal;
};

const setTotal = () => {
  let total;
  if (foodQuantinty >= 1) {
    total = ((parseFloat(price) + getRadioValues()) * foodQuantinty).toFixed(2);
  }
  total = total.toString().replace(".", ",");
  foodPrice.textContent = "R$" + total;
};

const setModalData = (button) => {
  let foodCategory = changeCategory();
  const idFood = button.target.id;
  foodImage.style.backgroundImage = `url("src/assets/${food[foodCategory][idFood].image}")`;
  foodName.textContent = food[foodCategory][idFood].name;
  price = food[foodCategory][idFood].price;
  setTotal();
  changeToModalShopTab(false);
  openModal();
};

const setQuantityOfOrders = () => {
  let ordersQuantity = 0;
  const orders = document.querySelectorAll('.order');
  orders.forEach(() => ordersQuantity++)
  document.getElementById("orders-quantinty").value = ordersQuantity;
}

const insertOrder = (name, price, quantinty, descriptions, index) => {
  let foodDescription = [];
  for (let description of descriptions) {
    foodDescription += `<p>${description}</p>`;
  }
  const order = document.createElement("tr");
  order.classList.add("order");
  order.setAttribute("id", index);
  const emptyMessage = document.getElementById("empty-orders-message");
  if (emptyMessage) {
    ordersContainer.innerHTML = "";
    document.getElementById("food-tab").style.pointerEvents = "all";
  } 
  order.innerHTML += `
    <td><input type="text" class="price" name="food-quantity-${index}" value="${quantinty}x"></td>
    <td class="order-info">
        <h5><input type="text" name="food-name-${index}" value="${name}"></h5>
        <div class="options-order">
           ${foodDescription}
        </div>
    </td>
    <td><input type="text" class="price" name="food-price-${index}" readonly value="${price}"></td>
    <td><i class="fa-solid fa-x remove-order" id="${index}"></i></td>
    `;
    ordersContainer.appendChild(order);
};

const clearOrders = () => {
  const orders = document.querySelectorAll(".order");
  if (orders) orders.forEach((order) => order.remove());
};

const displayOrders = () => {
  clearOrders();
  database = getDatabase();
  let ordersPrices = [];
  database.forEach((order, index) => {
    insertOrder(
      order.name,
      order.price,
      order.quantinty,
      order.description,
      index
    );
    ordersPrices.push(order.price);
  });
  if (ordersContainer.innerHTML == ''){
    ordersContainer.innerHTML = `
    <td class="order-info" colspan="4" id="empty-orders-message">
      <h5>Nenhum pedido adicionado ainda</h5>
    </td>
    `;
    finishButton.style.display = "none";
    document.getElementById("food-tab").style.pointerEvents = "none";
    
  } else {
    finishButton.style.display = "block";
  }
  setTotalToPay(ordersPrices);
  setQuantityOfOrders()
};

const setTotalToPay = (prices) => {
  const pricesFormat = prices.map(price => parseFloat(price.replace("R$", "").replace(",", ".")))
  const total = pricesFormat.length > 0 ? pricesFormat.reduce((prev, current) => prev + current) : 0
  const totalToPay = document.querySelectorAll(".total");
  const totalFormat = total.toFixed(2).toString().replace(".", ",")
  totalToPay.forEach(
    (element) => (element.textContent = "R$" + totalFormat)
  );

  document.querySelector("input[name='total']").value = totalFormat;
};

const addOrder = () => {
  let foodDescription = [];
  allRadioButtons.forEach((radio) => {
    if (radio.checked && radio.value !== "0") {
      foodDescription.push(radio.dataset.description);
    }
  });
  database = getDatabase();
  database.push({
    name: foodName.textContent,
    price: foodPrice.textContent,
    quantinty: inputQuantity.value,
    description: foodDescription,
  });
  updateDatabase(database);
  displayOrders();
  changeToModalShopTab(true);
};

const removeOrder = (event) => {
  let index;
  const isRemoveButton = event.target.classList.contains("remove-order");
  if (isRemoveButton) index = event.target.id;
  database = getDatabase();
  database.splice(index, 1);
  updateDatabase(database);
  displayOrders();
};


controlsButtons.forEach((control) =>
  control.addEventListener("click", handleControl)
);
allRadioButtons.forEach((radio) =>
  radio.addEventListener("change", highlightRadio)
);
tabButtons.forEach((button) => button.addEventListener("click", handleButton));
closeModalButton.addEventListener("click", closeModal);
fade.addEventListener("click", closeModal);
openModalButton.forEach((button) =>
  button.addEventListener("click", setModalData)
);
orderButton.addEventListener("click", changeToModalShopTab);
modalFooterButton.addEventListener("click", addOrder);
removeOrderButtons.addEventListener("click", removeOrder);
displayOrders();
