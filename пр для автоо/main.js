"use strict"

// ЭКРАННАЯ КЛАВИАТУРА 1 и 2

let keyboard = document.getElementById('keyboard');
let inputField = document.getElementById('inputField');
let capsLockEnabled = false;

function addToInput(value) {
    if (capsLockEnabled && /[a-zA-Z]/.test(value)) {
        value = value.toUpperCase();
    }
    inputField.value += value;
}

for (let i = 1; i <= 9; i++) {
    let button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => addToInput(i));
    keyboard.appendChild(button);
}

let zeroButton = document.createElement('button');
zeroButton.textContent = '0';
zeroButton.addEventListener('click', () => addToInput('0'));
keyboard.appendChild(zeroButton);

let letters = 'abcdefghijklmnopqrstuvwxyz';
for (let letter of letters) {
    let button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => addToInput(letter));
    keyboard.appendChild(button);
}

let capsLockButton = document.createElement('button');
capsLockButton.textContent = 'Caps Lock';
capsLockButton.addEventListener('click', () => {
    capsLockEnabled = !capsLockEnabled;
    capsLockButton.style.backgroundColor = capsLockEnabled ? 'lightblue' : '';
});
keyboard.appendChild(capsLockButton);








ЛИНЕЙНЫЙ КАЛЕНДАРЬ

let numbersList = document.getElementById('numbersList');
let monthYearElement = document.getElementById('monthYear');
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  numbersList.innerHTML = '';

  monthYearElement.textContent = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(new Date(currentYear, currentMonth));

  for (let i = 1; i <= daysInMonth; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;

    if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
      listItem.classList.add('current-day');
    }

    numbersList.appendChild(listItem);
  }
}


renderCalendar();

document.getElementById('prevMonth').addEventListener('click', function (e) {
  e.preventDefault();
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', function (e) {
  e.preventDefault();
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  renderCalendar();
});


ПОИСК ТЕГОВ
let tagDescriptions = {
    'a': 'Тег &lt;a&gt; предназначен для создания ссылок.',
    'p': 'Тег &lt;p&gt; представляет собой абзац текста.',
    'h1': 'Тег &lt;h1&gt; задаёт наибольший заголовок первого уровня.',
    'div': 'Тег &lt;div&gt; является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
  };

  let  tagInput = document.getElementById('tagInput');
  let  tagDescription = document.getElementById('tagDescription');

  tagInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        let  tagName = tagInput.value.toLowerCase();
        let  description = tagDescriptions[tagName];

      if (description) {
        tagDescription.innerHTML = description;
      } else {
        tagDescription.innerHTML = 'Описание для этого тега не найдено.';
      }
    }
  });


ПОИСК ИСТОРИЧЕСКИХ СОБЫТИЙ мб не правильно!!!!!!!!!!!!!!!
let events = [
    { date: '01.01', name: 'Новый год', description: 'Начало календарного года' },
    { date: '07.11', name: 'Октябрьская революция', description: 'Восстание большевиков в 1917 году' },
  ];

  let input = document.getElementById('input');
  let table = document.getElementById('table');

  input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        let year = parseInt(input.value);
        let filteredEvents = events.filter(event => event.date.startsWith(year));

      renderTable(filteredEvents);
    }
  });

  function renderTable(events) {
    table.innerHTML = '';

    let headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Дата</th><th>Название</th><th>Описание</th>';
    table.appendChild(headerRow);

    events.forEach(event => {
        let row = document.createElement('tr');
      row.innerHTML = `<td>${event.date}</td><td>${event.name}</td><td>${event.description}</td>`;
      table.appendChild(row);
    });
  }

// 9 гороскоп

function getHoroscope() {
    let birthdate = document.getElementById('birthdate').value;
    let  selectedDay = document.querySelector('input[name="day"]:checked').value;
   
  
    let horoscopeText = ''; 
  
   
    let horoscopes = [
      'Сегодня будет удачный день для новых начинаний.',
      'Ваша энергия сегодня будет на высоте, не упустите возможность сделать что-то важное.',
      'Будьте осторожны с финансами сегодня, возможны непредвиденные расходы.'
    ];
    horoscopeText = horoscopes[Math.floor(Math.random() * horoscopes.length)];
  
    let horoscopeDisplay = document.getElementById('horoscope');
    horoscopeDisplay.textContent = horoscopeText;
  }



10 сайт предсказаний

let timer;
let isPredictionStopped = false;
function startPrediction() {
  let timerDisplay = document.getElementById('timer');
  timer = setInterval(function() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    timerDisplay.textContent = randomNumber;
  }, 100);
}
function stopPrediction() {
  clearInterval(timer);
  let predictionButton = document.getElementById('stop');
  predictionButton.classList.remove('active');
  isPredictionStopped = true;
  let predictionNumber = document.getElementById('timer').textContent;
  let predictionText = document.getElementById('text');
  if (predictionNumber % 2 === 0) {
    predictionText.textContent = ' все хорошо';
    predictionText.style.color = 'green';
  } else {
    predictionText.textContent = 'все плохо';
    predictionText.style.color = 'red';
  }
}
