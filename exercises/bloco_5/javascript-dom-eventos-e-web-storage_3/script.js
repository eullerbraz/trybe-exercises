function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercicio 1
const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

function calendarDays() {
  let daysUl = document.getElementById("days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayLi = document.createElement("li");

    dayLi.innerHTML = day;
    dayLi.classList.add("day");
    if (day === 24 || day === 25 || day === 31) {
      dayLi.classList.add("holiday");
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayLi.classList.add("fryday");
    }
    daysUl.appendChild(dayLi);
  }
}
calendarDays();

//Exercicio 2
function buttonGenerate(buttonName) {
  let button = document.createElement("button");
  let divbtn = document.querySelector(".buttons-container");
  button.id = "btn-holiday";
  button.innerHTML = buttonName;
  divbtn.appendChild(button);
}
buttonGenerate("Feriados");

//Exercicio 3
function holidayButton() {
    let btnHoliday = document.getElementById('btn-holiday');
    let holidays = document.getElementsByClassName('holiday');
    let color = 'green';
    let defaultColor = "rgb(238,238,238)";

    btnHoliday.addEventListener('click', function(){
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === color) {
                holidays[index].style.backgroundColor = defaultColor;
            } else {
                holidays[index].style.backgroundColor = color;
            }
        }
    })
}
holidayButton();
