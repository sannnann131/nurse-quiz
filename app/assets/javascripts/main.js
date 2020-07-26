'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');

  const quizSet = [
    {q: '平均寿命で正しいのはどれ？', c: ['0歳の平均余命である', '20歳の平均余命である', '60歳の平均余命である','死亡者の平均年齢である']},
    {q: '2018年の日本人女性の平均寿命はどれ？', c: ['87.32歳', '72.32歳', '77.32歳','82.32歳']},
    {q: '2018年の平均世帯人数はどれ？', c: ['2.44人', '1.44人', '3.44人','4.44人']},
    {q: '2017年、20歳以上の男性における喫煙習慣者の割合に最も近いのはどれ？', c: ['30%', '20%', '10%','40%']},
    {q: '2016年、通院者率が男女とも最も高いのはどれか?', c: ['高血圧症', '腰痛症', '糖尿病','眼の病気']},
  ];
  let currentNum = 0;
  let isAnswered;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });


    if (currentNum === quizSet.length - 1) {
      btn.textContent = '正解数を見る';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    currentNum++;
    setQuiz();
  });
}