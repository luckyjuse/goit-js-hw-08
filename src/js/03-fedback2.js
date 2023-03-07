import throttle from 'lodash.throttle';

let formData = {};
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const saveData = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadData = () => {
  try {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY) || {});
  } catch (error) {
    console.log('Error happend:', error);
    formData = {};
  }
  fillForm();
};

const fillForm = () => {
  if (localStorage.getItem(STORAGE_KEY)) {
    refs.email.value = formData.email;
    refs.message.value = formData.message;
  }
};

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

loadData();

refs.form.addEventListener('input', throttle(saveData, 500));

refs.form.addEventListener('submit', onFormSubmit);
