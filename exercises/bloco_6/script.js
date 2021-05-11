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
