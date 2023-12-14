"use strict"
// // ЭКРАННАЯ КЛАВИАТУРА 1 и 2

// const keyboard = document.getElementById('keyboard');
// const inputField = document.getElementById('inputField');
// let capsLockEnabled = false;

// // Функция для добавления символа в поле ввода
// function addToInput(value) {
//     if (capsLockEnabled && /[a-zA-Z]/.test(value)) {
//         value = value.toUpperCase();
//     }
//     inputField.value += value;
// }

// // Создаем кнопки для каждой цифры
// for (let i = 1; i <= 9; i++) {
//     const button = document.createElement('button');
//     button.textContent = i;
//     button.addEventListener('click', () => addToInput(i));
//     keyboard.appendChild(button);
// }

// // Кнопка "0"
// const zeroButton = document.createElement('button');
// zeroButton.textContent = '0';
// zeroButton.addEventListener('click', () => addToInput('0'));
// keyboard.appendChild(zeroButton);

// // Кнопки букв
// const letters = 'abcdefghijklmnopqrstuvwxyz';
// for (const letter of letters) {
//     const button = document.createElement('button');
//     button.textContent = letter;
//     button.addEventListener('click', () => addToInput(letter));
//     keyboard.appendChild(button);
// }

// // Кнопка Caps Lock
// const capsLockButton = document.createElement('button');
// capsLockButton.textContent = 'Caps Lock';
// capsLockButton.addEventListener('click', () => {
//     capsLockEnabled = !capsLockEnabled;
//     capsLockButton.style.backgroundColor = capsLockEnabled ? 'lightblue' : '';
// });
// keyboard.appendChild(capsLockButton);








// ЛИНЕЙНЫЙ КАЛЕНДАРЬ

// let numbersList = document.getElementById('numbersList');
// let monthYearElement = document.getElementById('monthYear');
// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let currentYear = currentDate.getFullYear();

// function renderCalendar() {
//     let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   // Clear previous content
//   numbersList.innerHTML = '';

//   // Set month and year above the calendar
//   monthYearElement.textContent = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth));

//   for (let i = 1; i <= daysInMonth; i++) {
//     let listItem = document.createElement('li');
//     listItem.textContent = i;

//     if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
//       listItem.classList.add('current-day');
//     }

//     numbersList.appendChild(listItem);
//   }
// }

// // Initial render
// renderCalendar();

// // Event listeners for navigation
// document.getElementById('prevMonth').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (currentMonth === 0) {
//     currentMonth = 11;
//     currentYear--;
//   } else {
//     currentMonth--;
//   }
//   renderCalendar();
// });

// document.getElementById('nextMonth').addEventListener('click', function (e) {
//   e.preventDefault();
//   if (currentMonth === 11) {
//     currentMonth = 0;
//     currentYear++;
//   } else {
//     currentMonth++;
//   }
//   renderCalendar();
// });


// ПОИСК ТЕГОВ
// let tagDescriptions = {
//     'a': 'Тег &lt;a&gt; предназначен для создания ссылок.',
//     'p': 'Тег &lt;p&gt; представляет собой абзац текста.',
//     'h1': 'Тег &lt;h1&gt; задаёт наибольший заголовок первого уровня.',
//     'div': 'Тег &lt;div&gt; является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     // Добавьте другие теги и их описания по необходимости
//   };

//   let  tagInput = document.getElementById('tagInput');
//   let  tagDescription = document.getElementById('tagDescription');

//   tagInput.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         let  tagName = tagInput.value.toLowerCase();
//         let  description = tagDescriptions[tagName];

//       if (description) {
//         tagDescription.innerHTML = description;
//       } else {
//         tagDescription.innerHTML = 'Описание для этого тега не найдено.';
//       }
//     }
//   });


// ПОИСК ИСТОРИЧЕСКИХ СОБЫТИЙ мб не правильно!!!!!!!!!!!!!!!
// let events = [
//     { date: '01.01', name: 'Новый год', description: 'Начало календарного года' },
//     { date: '07.11', name: 'Октябрьская революция', description: 'Восстание большевиков в 1917 году' },
//     // Добавьте другие события и их описания по необходимости
//   ];

//   let input = document.getElementById('input');
//   let table = document.getElementById('table');

//   input.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         let year = parseInt(input.value);
//         let filteredEvents = events.filter(event => event.date.startsWith(year));

//       renderTable(filteredEvents);
//     }
//   });

//   function renderTable(events) {
//     // Очищаем предыдущее содержимое таблицы
//     table.innerHTML = '';

//     // Создаем заголовок таблицы
//     let headerRow = document.createElement('tr');
//     headerRow.innerHTML = '<th>Дата</th><th>Название</th><th>Описание</th>';
//     table.appendChild(headerRow);

//     // Заполняем таблицу событиями
//     events.forEach(event => {
//         let row = document.createElement('tr');
//       row.innerHTML = `<td>${event.date}</td><td>${event.name}</td><td>${event.description}</td>`;
//       table.appendChild(row);
//     });
//   }