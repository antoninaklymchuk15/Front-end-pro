const rightResponse = 10;
const wrongResponse = 0;
const SURVEY = [
  {
    question: "Сколько хромосом у здорового человека?",
    answer: "46",
    ask: prompt,
  },
  {
    question: "Путин - хуйло?",
    answer: true,
    ask: confirm,
  },
  {
    question: "Сколько хромосом у Путина?",
    answer: "47",
    ask: prompt,
  },
  {
    question: "Сколько тупых овец в московии (в млн)?",
    answer: "144",
    ask: prompt,
  },
  {
    question: "Снесли ли памятник Екатерине-2 в Одессе?",
    answer: true,
    ask: confirm,
  },
  {
    question: "Сколько черных пакетов выделяются на одного орка?",
    answer: "1",
    ask: prompt,
  },
  {
    question: "На сколько вы оцениваете работу ЗСУ от 1 до 10?",
    answer: "10",
    ask: prompt,
  },
  {
    question: "Со скольких позиций готовилось нападение на Беларусь?",
    answer: "4",
    ask: prompt,
  },
  {
    question: "Нужно ли сжигать сосийский флаг?",
    answer: true,
    ask: confirm,
  },
  {
    question: "Поддерживаете ли вы уход иностранных компаний из московии?",
    answer: true,
    ask: confirm,
  },
  {
    question: "Считаете ли вы сосию своим домом?",
    answer: false,
    ask: confirm,
  },
];

const result = runSurvey(SURVEY);

alert(result);

function runSurvey(questions) {
  let result = wrongResponse;

  for (let i = 0; i < questions.length; i++) {
    const { ask, question, answer } = questions[i];

    if (ask(question) === answer) {
      result += rightResponse;
    }
  }
  return result;
}
alert("Ваш результат: " + result + " очков.");
