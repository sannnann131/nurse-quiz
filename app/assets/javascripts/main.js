'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');

  const quizSet = [
    {q: 'クイズ1', c: ['1-1', '1-2', '1-3', '1-4']},
    {q: 'クイズ2', c: ['2-1', '2-2', '2-3', '2-4']},
    {q: 'クイズ3', c: ['3-1', '3-2', '3-3', '3-4']},
  ];
  let currentNum = 0;

  question.textContent = quizSet[currentNum].q;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    choices.appendChild(li);
  });
}