import throttle from 'lodash.throttle';

const formInputElements = document.querySelector('.feedback-form');

// console.log(formInputElements.elements);

formInputElements.addEventListener('input', inputData);

function inputData(event) {
  const data = {
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  };
  console.log(data);
  saveToStorage(data);
}

function saveToStorage(params) {
  localStorage.setItem('feedback-form-state', JSON.stringify(params));
}

const sdfsdfsdf = function recoverInput() {
  const parsedValues = JSON.parse('feedback-form-state');
  try {
    JSON.parse(parsedValues);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  console.log(parsedValues);
  if (localStorage.getItem('feedback-form-state')) {
    formInputElements.elements.email.value = parsedValues.email;
    formInputElements.elements.message.value = parsedValues.message;
  }
};
