const minValue = document.querySelector(".min");
const minRange = document.querySelector(".min__range");
const maxValue = document.querySelector(".max");
const maxRange = document.querySelector(".max__range");
const buttonClear = document.querySelector(".button__clear");
const brandsCheckbox = document.querySelectorAll(".brands-checkbox");

let min = 1000,
  max = 1000000;

const minChange = (event) => {
  const newValue = parseInt(event.target.value);
  if (newValue < max) {
    min = newValue;
  }
  minValue.value = min;
  minRange.value = min;
};

const maxChange = (event) => {
  const newValue = parseInt(event.target.value);
  if (newValue > min) {
    max = newValue;
  }
  maxValue.value = max;
  maxRange.value = max;
};

const inputClear = () => {
  let min = 1000,
  max = 1000000;

  minValue.value = min;
  minRange.value = min;
  maxValue.value = max;
  maxRange.value = max;

  for (let link of brandsCheckbox) {
    if (link.checked) {
      link.checked = false;
    }
  }
}

minRange.addEventListener("input", minChange);

minValue.addEventListener("input", minChange);

maxRange.addEventListener("input", maxChange);

maxValue.addEventListener("input", maxChange);

buttonClear.addEventListener("click", inputClear);