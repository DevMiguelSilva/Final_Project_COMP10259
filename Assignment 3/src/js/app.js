const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function validateForm() {
  //Name
  let name = document.forms["myForm"]["name"].value;
  let count = 0;
  for(let x in name){
    count++;
  }
  if (count < 5){
  alert("The name must have atleast 5 characters.");
  return false;
  }

  //Last name
  let lastname = document.forms["myForm"]["lastname"].value;
  count = 0;
  for(let x in lastname){
    count++;
  }
  if (count < 5){
  alert("The last name must have atleast 5 characters.");
  return false;
  }

  //Phone
  let phone = document.forms["myForm"]["phone"].value;
  count = 0;
  for(let x in phone){
    count++;
  }
  if (count != 10){
  alert("The phone number must have 10 digits.");
  return false;
  }

  //Message
  let message = document.forms["myForm"]["message"].value;
  count = 0;
  for(let x in message){
    count++;
  }
  if (count < 50){
  alert("The message must have at least 50 characters.");
  return false;
  }

  sendEmail();
      
}

function sendEmail(){

  emailjs.init("AfegTByGcE_GO2Dom");

  let templateParams = {
    var_name: document.forms["myForm"]["name"].value,
    var_lastname: document.forms["myForm"]["lastname"].value,
    var_email: document.forms["myForm"]["email"].value,
    var_date: document.forms["myForm"]["date"].value,
    var_phone: document.forms["myForm"]["phone"].value,
    var_message: document.forms["myForm"]["message"].value,
    var_emailTo: document.forms["myForm"]["email"].value,
  };

  emailjs.send('service_zxizytp', 'template_3ci735r', templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
    console.log('FAILED...', error);
  });

}

//Animation code

const text = document.querySelector(".headerText");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(OnTick, 50);

function OnTick(){
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}