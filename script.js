const btnEl = document.getElementById("btn");
const bdEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calAge(){
  const bdVal = bdEl.value;
  if (bdVal === "") {
    alert("Please enter your birthday");
  }
  else {
    const age = getAge(bdVal);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(bdVal){
  const currDate = new Date();
  const bdDate = new Date(bdVal);
  let age = currDate.getFullYear() - bdDate.getFullYear();
  const month = currDate.getMonth() - bdDate.getMonth();

  if (month < 0 || (month === 0 && currDate.getDate() < bdDate.getDate())){
    age--;
  }
  
  return age;
}

btnEl.addEventListener("click", calAge);