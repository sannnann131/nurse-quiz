'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const explanation = document.getElementById('explanation');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const quizSet = [
    {q: '健康な成人の体重における水分の割合は？', c: ['60%', '20%', '40%','80%'],
    e: '約60%であり、体重70kgの場合42リットルの水分が体内にある。'},
    {q: '体温調節中枢はどれ？', c: ['視床下部', '延髄', '小脳','橋'],
    e: '皮膚などの温度受容器で感じた温度を、視床下部で設定された温度と比較し発汗したり、体を震えさせて設定された温度に合わせる。'},
    {q: '交感神経の緊張状態はどれ？', c: ['末梢血管の収縮', '瞳孔の収縮', '気管支の収縮','心拍数の減少'],
    e: '交感神経が緊張すると、激しい運動の直後や、緊張している状態の中にあるような体の状態になると例えられる。抹消血管が収縮することで血圧が上昇する。逆にリラックスすると副交感神経が働き、正解以外の3つの選択肢の状態になる。'},
    {q: '正常な胃液のpHはどれ？', c: ['pH1〜2', 'pH4〜5', 'pH7〜8','pH10〜11'],
    e: '人間の体のpH7.4であるのに対し、胃液はpH１〜２と強い酸性である。'},
    {q: '脂質1gが体内で代謝されたときに生じるエネルギー量は？', c: ['9kcal', '4kcal', '19kcal','14kcal'],
    e: '脂質1gにつき9kcalのエネルギーとなる。炭水化物、タンパク質は1g代謝されると4kcalとなる。'},
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