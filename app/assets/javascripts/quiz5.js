'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const explanation = document.getElementById('explanation');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const quizSet = [
    {q: '胸の痛みを訴える病気はどれ？', c: ['急性心筋梗塞', '腎結石', '髄膜炎','メニエール病'],
    e: '急性心筋梗塞は一般的に激しい胸の痛みを訴える。（背部など広い範囲の痛みを訴えることもある）'},
    {q: '抑うつ状態でみられるのはどれ？', c: ['無気力', 'せん妄', '徘徊','幻覚'],
    e: '抑うつ状態はうつ病ではないものの、気分が落ち込んでいる状態を指し、無気力で不眠や食欲不振などが見られる。'},
    {q: '貧血とは、末梢血液中の何が不足することを言う？', c: ['ヘモグロビン濃度', 'アルブミン濃度', '血小板数','血漿量'],
    e: 'ヘモグロビンは血液の中で酸素を運ぶ機能をもつため、貧血となると体内が酸欠状態になり、疲れやめまい、動悸や息切れを起こす。'},
    {q: '鮮紅色(鮮やかな赤色)の下血が見られた時の出血部位で正しいのは？', c: ['直腸', '胃', '十二指腸','食道'],
    e: '直腸は肛門と近いため、血の色がそのままでるため鮮紅色となる。他の3つは肛門と遠いため、その間に酸素と結びつくことで暗い赤色となる。'},
    {q: '空腹時の腹痛を特徴とする疾患は？', c: ['十二指腸潰瘍', '虫垂炎(盲腸)', 'イレウス(腸閉塞)','胆石症'],
    e: '十二指腸潰瘍は、十二指腸から食べ物がなくなって空っぽになることで、潰瘍(一部が溶けている状態)の部分に痛みを生じる。その他の3つは食事と関連なく痛みを生じる。'},
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