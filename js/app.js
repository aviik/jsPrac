let take = document.querySelector('li.given');
let answer = document.querySelector('#yourList');
let inflow = [];
// let i=0;
take.addEventListener('click', () => {
  // do {
  //   inflow.push(take.value);
  //   answer.innerHTML = '<li>'+ inflow[i] + '</li>';
  // } while (let i = 0; i<4; i++);
  for (var i = 0; i < inflow.length; i++) {
    inflow.push(take.value);
    answer.innerHTML = '<li>'+ inflow[i] + '</li>';
  }
});
