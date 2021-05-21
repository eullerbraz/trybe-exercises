const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercicio 1
const addKey = (obj, key, value) => {
  obj[key] = value;
}

addKey(lesson2, 'turno', 'manhã');

//Exercicio 2
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson3));

//Exercicio 3
const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson1));

//Exercicio 4
const listvalues = (obj) => Object.values(obj);
console.log(listvalues(lesson3));

//Exercicio 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//Exercicio 6
const totalOfStudents = (obj) => {
  let total = 0;
  const lessons = Object.keys(obj);
  for (const lesson of lessons) {
    total += obj[lesson].numeroEstudantes;
  }
  return total;
}
console.log(totalOfStudents(allLessons));

//Exercicio 7
const getValueByNumber = (obj, pos) => Object.values(obj)[pos];
console.log(getValueByNumber(lesson1, 0));

//Exercicio 8
const verifyPair = (obj, key, value) => {
  let exist = false;
  let entries = Object.entries(obj);
  for (let pair of entries) {
    if (pair[0] === key && pair[1] === value) {
      exist = true;
    }
  }
  return exist;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

//Exercicio Bonus 1
const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const lessons = Object.keys(obj);
  for (let lesson of lessons) {
    if (obj[lesson].materia === 'Matemática') {
      total += obj[lesson].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));

//Exercicio Bonus 2
const createReport = (obj, teacher) => {
  const report = {};
  report.professor = teacher;
  let students = 0;
  const subjects = [];
  const lessons = Object.keys(obj);
  for (let lesson of lessons) {
    if (obj[lesson].professor === teacher) {
      students += obj[lesson].numeroEstudantes;
      subjects.push(obj[lesson].materia);
    }
  }
  report.aulas = subjects;
  report.estudantes = students;
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'))
