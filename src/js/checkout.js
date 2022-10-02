const inputs = document.querySelectorAll("input");
const radios = document.querySelectorAll('input[type="radio"].radio');
const button = document.getElementById("button");
const deliveryRadios = document.querySelectorAll(".delivery-form");
const form = document.getElementById("form");

const highlightInput = (event) => {
  inputs.forEach((input) => input.parentNode.classList.remove("focus"));
  const inputSelf = event.target;
  inputSelf.parentNode.classList.toggle("focus");
};

const showPaymentDropdown = (payment) => {
  const paymentDropdown = document.querySelectorAll(".payment-dropdown");
  paymentDropdown.forEach((dropdow) => dropdow.classList.remove("active"));
  document.getElementById(`${payment}-dropdown`).classList.toggle("active");
};

const highlightRadio = (event) => {
  radios.forEach((input) => input.parentNode.classList.remove("checked"));
  const radioSelf = event.target;
  radioSelf.parentNode.classList.toggle("checked");
  console.log(radioSelf.id);
  showPaymentDropdown(radioSelf.id);
};

const setTotal = (additional) => {
  const total = document.getElementById("total");
  const newTotal =
    parseFloat(total.textContent.replace("R$", "").replace(",", ".")) +
    additional;
  total.textContent = "R$" + newTotal.toString().replace(".", ",");
};

const setDeliveryForm = (event) => {
  const deliveryForm = event.target.getAttribute("id");
  if (deliveryForm === "motoboy") {
    setTotal(10);
  } else if (deliveryForm === "local") {
    setTotal(-10);
  }
};

const validateInputs = () => {
  const values = [];
  inputs.forEach((input) => {
    if (input.hasAttribute("required")) values.push(input.value);
  });
  console.log(values);
  const areInputFilleds = values.map((value) => value.length > 0);
  return areInputFilleds.every((input) => input);
};

const openModal = () => {
  if (validateInputs()) {
    const clientName = document.getElementById("client-name");
    const inputName = document.getElementById("name");
    clientName.textContent = inputName.value;
    const modal = document.getElementById("modal");
    const fade = document.getElementById("fade");
    [modal, fade].forEach((element) => element.classList.toggle("hidden"));
    localStorage.removeItem("orders");
  }
};

inputs.forEach((input) => input.addEventListener("focus", highlightInput));
radios.forEach((radio) => radio.addEventListener("change", highlightRadio));
button.addEventListener("click", openModal);
deliveryRadios.forEach((delivery) =>
  delivery.addEventListener("change", setDeliveryForm)
);
form.addEventListener("submit", (event) => event.preventDefault());
