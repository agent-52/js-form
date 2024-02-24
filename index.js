

const email = document.querySelector("#mail");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const emailError = document.querySelector(".emailError")
const passError = document.querySelector(".passError")
const input = document.querySelectorAll("input");
const zipError = document.querySelector(".zipError")
const countryError = document.querySelector(".countryError")
const confiPassError = document.querySelector(".confiPassError")
const form = document.querySelector("form")

const submit = document.querySelector(".submitButton")

email.addEventListener("input", ()=>{
  if(email.validity.valid){
    emailError.textContent = "";
    email.className = "valid"
  }else{
    showEmailError()
  }
})

function showEmailError(){
  if(email.validity.valueMissing){
    document.querySelector(".emailError").textContent = "You need to enter an email address"
  }else if(email.validity.typeMismatch){
    emailError.textContent = "Entered value needs to be an email  address"
  }
  email.className = "invalid"
}

zip.addEventListener("input", ()=>{
  if(zip.validity.valid){
    zipError.textContent = "";
    zip.className = "valid"
  }else{
    showZipError()
  }
})

country.addEventListener("input", ()=>{
  if(country.validity.valid){
    countryError.textContent = "";
    country.className = "valid"
  }else{
    showCountryError()
  }
})

function showCountryError(){
  if(country.validity.valueMissing){
    countryError.textContent = "enter your country here"
  }
  country.className = "invalid"
}

function showZipError(){
  if(zip.validity.valueMissing){
    zipError.textContent = "You need to enter a zip code here"
  }else if(zip.validity.patternMismatch){
    zipError.textContent = "zip should be in the format '12345' or '12345-1234"
  }
  zip.className = "invalid"
}


password.addEventListener("input", ()=>{
  if(password.validity.valid){
    passError.textContent = "";
    password.className = "valid"
  }else{
    showPassError()
  }
  
})

function showPassError(){
  if(password.validity.valueMissing){
    passError.textContent = " you need to Enter your password here"
  }else if(password.validity.patternMismatch){
    passError.textContent = "password must have atleast one capital letter , special character , and atleast one number and small letter "
  }
  password.className = "invalid"
  
}

confirmPassword.addEventListener("input", ()=>{
  if(confirmPassword.value === password.value){
    confiPassError.textContent = "";
    confirmPassword.className = "valid"

  }else{
    showConfiPassError()

  }
})

function showConfiPassError(){
  confiPassError.textContent = "it should match the above password";
  confirmPassword.className = "invalid"
}

form.addEventListener("submit", (event) => {
  if(!password.validity.valid){
    showPassError();
    event.preventDefault();
  }
  if(!email.validity.valid){
    showEmailError();
    event.preventDefault();
  }
  if(!zip.validity.valid){
    showZipError();
    event.preventDefault();
  }
  if(!country.validity.valid){
    showCountryError();
    event.preventDefault();
  }
  if(confirmPassword.value !== password.value){
    showConfiPassError();
    event.preventDefault();
  }
})










addEventListener("focusout", (event) => {});