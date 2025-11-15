alert("Assalomu alaykum");
alert("Mini Profile Dashboard ga xush kelibsiz !");
const nameInput = document.querySelector(".input_1");
const ageInput = document.querySelector(".input_2");
const emailInput = document.querySelector(".input_3");
const hobbyInput = document.querySelector(".input_4");
const birthInput = document.querySelector(".input_5");

const saveBtn = document.querySelector(".profile__button");
const clearBtn = document.querySelector(".profile__btn");
const output = document.querySelector(".output");

function normalizeName(name) {
  name = name.trim().toLowerCase();        
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function validateEmail(email) {
  return email.includes("@");
}

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

saveBtn.addEventListener("click", () => {
  
  const name = nameInput.value;
  const age = Number(ageInput.value);
  const email = emailInput.value;
  const hobby = hobbyInput.value;
  const birth = Number(birthInput.value.slice(0, 4)); 


  if (!validateEmail(email)) {
    output.innerHTML = `<p style="color:red;">Email noto‘g‘ri! @ belgisi bo‘lishi shart.</p>`;
    return;
  }

  const fixedName = normalizeName(name);
  const realAge = calculateAge(birth);
  const hobbyRepeat = hobby.trim().repeat(3);

  output.innerHTML = `
    <p style="color:white;">
      <strong>Ism:</strong> ${fixedName} <br>
      <strong>Email:</strong> ${email.toLowerCase()} <br>
      <strong>Yosh (hisoblangan):</strong> ${realAge} <br>
      <strong>Hobby (takrorlangan):</strong> ${hobbyRepeat} <br>
      <strong>Tug‘ilgan yil:</strong> ${birth}
    </p>
  `;
});

clearBtn.addEventListener("click", () => {
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  hobbyInput.value = "";
  birthInput.value = "";
  output.innerHTML = "";
});