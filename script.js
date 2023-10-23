let NumValues = [];
function add() {
  let numbers = document.getElementById('numbers').value;
  NumValues.push(numbers);
  console.log(NumValues)
}

function small() {
  let min = Math.min.apply(Math, NumValues);
  alert(min)
}

function bigger() {
  let max = Math.max.apply(Math, NumValues);
  alert(max)
}