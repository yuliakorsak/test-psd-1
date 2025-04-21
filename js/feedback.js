const popup = document.createElement('div');
popup.className = 'feedback';
popup.innerHTML = `
<form class="feedback__form" id="feedbackForm">
  <h3 class="feedback__title">Обратная связь</h2>
  <div class="feedback__close"><span class="visually-hidden">Закрыть форму</span></div>
  <label for="name" class="feedback__label feedback__label_required">Ваше имя</label>
  <input class="feedback__input" name="name" id="name" type="text" required>
  <label for="phone" class="feedback__label feedback__label_required">Телефон</label>
  <input class="feedback__input" name="phone" id="phone" type="tel" required>
  <label for="email" class="feedback__label feedback__label_required">Email</label>
  <input class="feedback__input" name="email" id="email" type="email" required>
  <label for="message" class="feedback__label">Сообщение</label>
  <textarea class="feedback__textarea" name="message" id="message"></textarea>
  <button class="feedback__submit" type="button">Отправить</button>
</form>
<div class="feedback__background"></div>`;

popup.style.display = 'none';
document.body.appendChild(popup);

document.querySelector('.header__feedback').addEventListener('click', openPopup);
popup.querySelector('.feedback__background').addEventListener('click', closePopup);
popup.querySelector('.feedback__close').addEventListener('click', closePopup);
popup.querySelector('.feedback__submit').addEventListener('click', validate);

const inputs = popup.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('click', () => {
  if (input.classList.contains('feedback__input_error')) {
    input.classList.remove('feedback__input_error')
    input.placeholder = '';
  }
}));

inputs.forEach(input => input.addEventListener('invalid', (e) => {
  e.preventDefault();
  input.classList.add('feedback__input_error');
  input.placeholder = input.validationMessage;
  input.value = '';
}));


function openPopup() {
  popup.style.display = 'flex';
}

function closePopup() {
  popup.animate(
    [
      { opacity: 1 },
      { opacity: 0 }
    ],
    {
      duration: 400,
    }
  );
  setTimeout(() => { popup.style.display = 'none'; }, 370);
}

function validate() {
  let valid = true;
  inputs.forEach(input => {
    if (!input.reportValidity()) {
      valid = false;
    }
  });
  if (valid) {
    popup.querySelector('form').submit();
  }
} 
