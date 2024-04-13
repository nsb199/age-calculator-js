const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = age;
  }
}

  

  function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
  
    let ageYears = currentDate.getFullYear() - birthdayDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthdayDate.getMonth();
    let ageDays = currentDate.getDate() - birthdayDate.getDate();
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    if (ageYears > 130) {
      return "You should probably be dead 🙂";
    }
  
    return `${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
  }
  
  

btnEl.addEventListener("click", calculateAge);
