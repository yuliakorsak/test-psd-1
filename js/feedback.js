const popup = document.createElement('div');
popup.className = 'feedback';
popup.innerHTML = `
  <form class="feedback__form">
    <div class="feedback__close" onclick="closePopup()"></div>
    <p class="feedback__title">Обратная связь</p>
    <label for="feedback__name" class="feedback__label">Ваше имя *
      <input class="feedback__input" type="input" name="feedback__name" id="feedback__name" required>
    </label>
    <label for="feedback__phone" class="feedback__label">Телефон *
      <input class="feedback__input" type="tel" name="feedback__phone" id="feedback__phone" required>
    </label>
    <label for="feedback__email" class="feedback__label">Email *
      <input class="feedback__input" type="email" name="feedback__email" id="feedback__email" required>
    </label>
    <label for="feedback__message" class="feedback__label">Сообщение
      <textarea class="feedback__textarea" type="tel" name="feedback__message" id="feedback__message"></textarea>
    </label>
    <button class="feedback__button" type="button" onclick="validate()">Отправить</button>
  </form>
`;
document.body.appendChild(popup);
document.querySelector('.header__contact').addEventListener('click', openPopup);
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
  popup.classList.add('feedback_fade');
  setTimeout(() => {
    popup.style.display = 'none';
    popup.classList.remove('feedback_fade');
  }, 400);
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