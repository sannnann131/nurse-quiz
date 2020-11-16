'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const explanation = document.getElementById('explanation');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const quizSet = [
    {q: '医療保険はどれ？', c: ['国民健康保険', '介護保険', '雇用保険','厚生年金保険'],
    e: '国民健康保険は市町村が運営、自営業や無職の人が加入する医療保険である。'},
    {q: '国民健康保険に加入する30歳男性本人の自己負担割合は？', c: ['3割', 'なし', '1割','2割'],
    e: '65歳以下の場合医療保険加入者の自己負担は3割となる。'},
    {q: '医療保険の給付の対象となるのは？', c: ['疾病の診察', 'レーシック手術', '健康診断','美容診断'],
    e: '給付の対象とならないものは自己負担である。'},
    {q: '平成29年の国民医療費はどれ？', c: ['約40兆円', '約4兆円', '約4000億円','約400兆円'],
    e: '43兆円であり、人口一人当たり33万2000円となる。'},
    {q: '国民医療費に含まれる費用はどれ？', c: ['入院時の食事', '人間ドック', '正常な分娩','予防接種'],
    e: '含まれないものは全て自己負担となる。入院中の食事は1食460円と医療保険制度で決められている。'},
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