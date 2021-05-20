const array = ["JavaScript", "HTML", "CSS", "Lógica", "ES6"]

function buildSkillsPhrase (name) {
    const fun1 = paramInterno => (
      `Tryber ${paramInterno} aqui!`
    )

    let result = `${fun1(name)}

    Minhas cinco principais habilidades são:`
    array.sort();
    for (let index = 0; index < array.length; index += 1) {
      result = `${result} 
      -${array[index]}`;
    }
    result = `
    ${result}
    #goTrybe
    `
    return result
}

console.log(buildSkillsPhrase("Euller"))