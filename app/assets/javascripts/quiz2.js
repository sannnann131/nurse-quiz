'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const explanation = document.getElementById('explanation');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');
  const quizSet = [
    {q: '大動脈に血液を送り出す部位はどれ？', c: ['左心室','右心室','左心房','右心房'],
    e: '左心室→大動脈→大静脈→右心房→右心室→肺動脈→肺静脈→左心房  この流れで全身に血液が循環する。'},
    {q: '免疫機能に関与する細胞はどれ？', c: ['白血球', '血小板', '網赤血球','成熟赤血球'],
    e: '血小板は止血機能、赤血球は酸素運搬機能。網赤血球は成長する前の赤血球を表す。'},
    {q: '大腸で吸収されるのはどれ？', c: ['水分', '脂質', 'タンパク質','糖質'],
    e: '脂質、糖質、タンパク質全て小腸で吸収される。水分もほとんど小腸で吸収されるが、大腸でも10%程度吸収される。大腸は1.5m程度あり、そこでゆっくりと水分を吸収することで便を水溶から固形にする役割がある。'},
    {q: '胆汁の作用はどれ？', c: ['脂肪の乳化', '殺菌', 'タンパク質の分解','炭水化物の分解'],
    e: '胆汁は肝臓で作られ、胆嚢に蓄積され、食事の時に小腸に送られる。脂肪が乳化されると、膵臓からでるリパーゼの働きにより、小腸で吸収されやすくなる。'},
    {q: '球関節はどれ?', c: ['肩関節', '膝関節', '下橈尺関節','肘関節'],
    e: '関節とは骨と骨が連結する部分にあたる。上腕の骨と、肩甲骨はそれぞれ半球のように窪んでいるため、広く動かすことが出来る。腕を回すことができるのも肩関節が球関節であるおかげである。膝関節や肘関節は蝶番関節といわれ、曲げ伸ばしが主な機能になる。下橈尺関節は手の関節を内側に向けたり、外側に向けることができる車軸関節といわれる。'},
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