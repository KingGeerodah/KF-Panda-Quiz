// Kung Fu Panda Quiz

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let character = document.getElementById("answer1").value.toLowerCase();
  let name = document.getElementById("answer2").value.toLowerCase();
  let place = document.getElementById("answer3").value.toLowerCase();
  let father = document.getElementById("answer4").value.toLowerCase();
  let feedback1 = document.getElementById("feedback1");
  let feedback2 = document.getElementById("feedback2");
  let feedback3 = document.getElementById("feedback3");
  let feedback4 = document.getElementById("feedback4");
  i = 0;

  // mark question #1
  if (character === "po") {
    feedback1.innerHTML = "Correct!";
    i++;
  } else {
    feedback1.innerHTML = "Incorrect!";
  }
  // mark question #2

  if (name === "oogway" || name === "shifu") {
    feedback2.innerHTML = "Correct!";
    i++;
  } else {
    feedback2.innerHTML = "Incorrect!";
  }
  // mark question #3

  if (place === "china" || place === "valley of peace") {
    feedback3.innerHTML = "Correct!";
    i++;
  } else {
    feedback3.innerHTML = "Incorrect!";
  }
  // mark question #4

  if (father === "mr. ping" || father === "lee shan") {
    feedback4.innerHTML = "Correct!";
    i++;
  } else {
    feedback4.innerHTML = "Incorrect!";
  }
  document.getElementById("result").innerHTML = `${i}/4 or ${(i / 4) * 100}%`;

  if (i === 0) {
    score.innerHTML = "Nice Try!";
  } else if (i === 1) {
    score.innerHTML = "Keep Practicing!";
  } else if (i === 2) {
    score.innerHTML = "Halfway there!";
  } else if (i === 3) {
    score.innerHTML = "You're so close!";
  } else {
    score.innerHTML = "Nice Job! 100%";
  }
}
