var answers = [
  'Yes.', 'No.', 'It is certain.', 'Certainly not for you.', 'Definitely.', 'Absolutely.', 'Most likely.', 'Indeed.', 'Do not count on it.' , 'Try again later.', 'I would rather not tell you.', 'There is a good chance.'];

document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
};