function statesGenerator() {
  const selectState = document.getElementById("state-select");
  const states = [
    "AC",
    "AL",
    "AM",
    "AP",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MG",
    "MS",
    "MT",
    "PA",
    "PB",
    "PE",
    "PI",
    "PR",
    "RJ",
    "RN",
    "RO",
    "RR",
    "RS",
    "SC",
    "SE",
    "SP",
    "TO",
  ];
  for (let index = 0; index < states.length; index += 1) {
    const optionState = document.createElement("option");
    optionState.innerHTML = states[index];
    selectState.appendChild(optionState);
  }
}
statesGenerator();

function dateFormatValidator(date) {
  if (
    date.indexOf("/") === 2 &&
    date.indexOf("/", 3) === 5 &&
    date.length === 10
  ) {
    return true;
  } else {
    return false;
  }
}

function dayValidator(date) {
  if (parseInt(date.substr(0, 2)) > 0 && parseInt(date.substr(0, 2)) <= 31) {
    return true;
  } else {
    return false;
  }
}

function monthValidator(date) {
  if (parseInt(date.substr(3, 2)) > 0 && parseInt(date.substr(3, 2)) <= 12) {
    return true;
  } else {
    return false;
  }
}

function yearValidator(date) {
  if (parseInt(date.substr(6, 4)) > 0) {
    return true;
  } else {
    return false;
  }
}

function dateValidator(date) {
  const validator =
    dateFormatValidator(date) &&
    dayValidator(date) &&
    monthValidator(date) &&
    yearValidator(date);
  if (validator) {
    return true;
  } else {
    alert("Data Inválida");
    return false;
  }
}

function stopDefAction(event) {
  event.preventDefault();
}

const button = document.querySelector(".submit-button");
button.addEventListener("click", (event) => {
  const date = document.querySelector("#date-text").value;
  
  if (dateValidator(date)) {

  } else {
    stopDefAction(event);
  }
});
