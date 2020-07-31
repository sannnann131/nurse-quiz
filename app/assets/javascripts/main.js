'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const explanation = document.getElementById('explanation');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const quizSet = [
    {q: '平均寿命で正しいのはどれ？', c: ['0歳の平均余命である', '20歳の平均余命である', '60歳の平均余命である','死亡者の平均年齢である'],
    e: '平均寿命は産まれたばかりの人が平均して何年生きられるかを表している。'},
    {q: '2018年の日本人女性の平均寿命はどれ？', c: ['87.32歳', '72.32歳', '77.32歳','82.32歳'],
    e: '男性は81.25歳。女性は世界で2位、男性は世界で3位である。男女の世界1位は香港。'},
    {q: '2018年の平均世帯人数はどれ？', c: ['2.44人', '1.44人', '3.44人','4.44人'],
    e: '一人暮らしの割合は14.5%、核家族世帯(夫婦およびその子供のみの世帯)は57.9％'},
    {q: '2017年、20歳以上の男性における喫煙習慣者の割合に最も近いのはどれ？', c: ['30%', '20%', '10%','40%'],
    e: '男性は29.4%、女性は7.2%。ピークは1966年で、男性は83.7%が喫煙していた。'},
    {q: '2016年、通院者率が男女とも最も高いのはどれ?', c: ['高血圧症', '腰痛症', '糖尿病','眼の病気'],
    e: '高血圧以外はおよそ20人に1人が通院しているが、高血圧は10人に1人が通院している。'},
  ];
  let currentNum = 0;
  let isAnswered;
  let score = 0;

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
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }

  function display(explanation) {
    explanation.textContent = quizSet[currentNum].e;
  }

  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;
    
    while (choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    while (explanation.firstChild) {
      explanation.removeChild(explanation.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      li.addEventListener('click', () => {
        display(explanation);
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

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `正解数: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}