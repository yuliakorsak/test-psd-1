Кейс «Вёрстка PSD-макета» - тестовое задание в рамках практики в Нетологии.

[Макет (PSD, JPEG)](/assets/) | [Источник](http://pixelplus.ru/test/frontend/markup.zip)

Описание задания и требования:
>1. Необходимо засечь время выполнения с момента ознакомления с заданием до окончания верстки. Это важно для оценки скорости работы.
>2. Основной шрифт PT Sans 14px и межстрочное расстояние 22px (если иное не указано на макете). Цвет текста должен соответствовать макету. Шрифт подключается с сервиса Google Fonts.
>3. Шапка, меню и подвал сайта должны тянуться на всю ширину сайта. При этом содержимое шапки, меню и подвала должно помещаться в область шириной в 980px + отступы по 10px с каждой стороны. При уменьшении или увеличении ширины окна браузера верстка не должна ехать.
>4. Слайдер должен тянуться на всю ширину экрана, при этом изображение внутри блока должно быть по центру. Изображение должны скрываться, если его ширина больше окна браузера (не должно растягивать верстку) и должно быть по центру, если его ширина меньше окна браузера. Смена картинок слайдера происходит каждые 4 секунды с fade-эффектом.
>5. Основные блоки сайта header, menu, slider, content (catalog), footer, feedback должны быть самостоятельными. То есть при удалении какого-либо блока верстка не должна распадаться. При удалении блоков menu, slider, content (catalog) верхняя и нижняя части макета должны быть прижаты к верху и к низу окна браузера соответственно.
>6. Изменение размеров и/или удаление одного из блоков области header не должно влиять на другой блок.
>7. Основное навигационное меню (область menu) и меню в области footer должны быть сверстаны в виде стилизованных списков. При этом меню в области menu должно быть выравнено по центру, редактирование\удаление\добавление пунктов не должно влиять на выравнивание.
>8. Логотип в области header должен быть выполнен в виде картинки (возможен внешний div). Для картинки обязательно наличие width, height и alt.
>9. Номера телефонов в области header должны быть сверстаны текстом с подключенным шрифтом. Шрифт подключать при помощи CSS-свойства @font-face. Подключение должно быть кроссбраузерным.
>10. Блок content (catalog) содержит два дочерних блока leftblock и centerblock. Высота каждого из блоков или отсутствие одного из них не должно влиять на второй или ломать верстку.
>11. Форма обратной связи появляется с fade-эффектом по клику на ссылку «обратная связь» в шапке сайта. Окно должно должно быть стилизовано в соответствии с макетом. Так же должен быть стилизованы поля, заполненные с ошибкой (или не заполненные).

Противоречие между PSD макетом и JPEG макетом всплывающего окна [markup.jpg](assets/markup.jpg) решено по  [PSD макету](/assets/markup.psd). Асимметричное расположение правой навигационной кнопки слайдера оставлено в соответствии с макетом.

Протестировано в браузерах: Chrome 135, Firefox 137, Edge 132, Opera 117, Safari 18.1

Время выполнения - ~8 часов.

[GitHub Pages](https://yuliakorsak.github.io/test-psd-1/)
