
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  
}

function editNavConf() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
   
  } else {
    x.className = "topnav";
  }
  
}


// DOM Elements

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
/* Le corps du formulaire */
const modalBody = document.querySelectorAll(".modal-body");
/* Bouton "Close" X */
const closeForm = document.querySelectorAll(".close");
/* Le type de formulaire */
const form = document.querySelectorAll(".reserve");
/* Bouton de validation */
const btnSubmit = document.getElementById("submit");
/* Champs du formulaire */
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkLocation = document.getElementsByName("location");
const locationError = document.querySelector("#locationError");
const checkbox1 = document.getElementById("checkbox1");
const conditionCheckboxError = document.getElementById("generalCheckboxError");

/* Boite de dialogue de confirmation */
const modalConfirmation = document.querySelector(".formConfirmation");
const btnCloseConfirm = document.querySelector(".btn-close-confirm");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";  
}

// Fonction pour fermer la confirmation

btnCloseConfirm.addEventListener("click", () => {
  modalbg.style.display = "none"; 
  
});

//Condition regex pour le contrôle du champs firstName :
  function firstNameControle () {     
            
    if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(firstName.value)){
        firstName.style.border = "solid 2px";
        firstNameError.textContent = "";
        return true;
    } 
                    
    else {
        firstName.style.border = "solid 2px red";
        firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        firstNameError.style.color = 'red';
        firstNameError.style.fontSize = '15px';
        firstNameError.style.marginBottom = '5px';
        return false;
    }
           
}
  

//AddEventListener pour le controle de l'input firstName :
firstName.addEventListener('change', () => {
    firstNameControle();
});

//Condition regex pour le contrôle du champs lastName :
function lastNameControle () {     

  if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(lastName.value)) {
      lastName.style.border = "solid 2px";
      lastNameError.textContent = "";
      return true;
  } 
                          
  else {
      lastName.style.border = "solid 2px red";
      lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastNameError.style.color = 'red';
      lastNameError.style.fontSize = '15px';
      lastNameError.style.marginBottom = '5px';
      return false;
  }
                  
}

//AddEventListener pour le controle de l'input lastName :
lastName.addEventListener('change', () => {
  lastNameControle();
});


//Condition regex pour le contrôle du champs email :
function emailControle () {     
                
  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
    email.style.border = "solid 2px";
    emailError.textContent = "";
    return true;
  } 
                  
  else {
      email.style.border = "solid 2px red";
      emailError.textContent = "Veuillez rentrer une adresse email valide";
      emailError.style.fontSize = '15px';
      emailError.style.color = 'red';
      emailError.style.marginBottom = '5px';
      return false;
  }                
}


//AddEventListener pour le controle de l'input email :
email.addEventListener('change', () => {
  emailControle();
});



//Condition regex pour le contrôle du champs date :
function birthdateControle () {     
                
  if (/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(birthdate.value)) {
      birthdate.style.border = "solid 2px";
      birthdateError.textContent = "";
      return true;
  } 
      
  else {
      birthdate.style.border = "solid 2px red";
      birthdateError.textContent = "Vous devez entrer votre date de naissance.";
      birthdateError.style.fontSize = '15px';
      birthdateError.style.marginBottom = '10px';
      birthdateError.style.color = 'red';
      return false;
  }
              
}


//AddEventListener pour le controle de l'input birthdate :
birthdate.addEventListener('change', () => {
  birthdateControle();
});

      
//Condition regex pour le contrôle du champs quantity :
function quantityControle () {     
                    
  if (quantity.value !=="")  {
      quantity.style.border = "solid 2px";
      quantityError.textContent = "";
      return true;
  }
                   
  else {
      quantity.style.border = "solid 2px red";
      quantityError.textContent = "Vous devez indiquer un nombre de tournois";
      quantityError.style.fontSize = '15px';
      quantityError.style.marginBottom = '10px';
      quantityError.style.color = 'red';
      return false;
  }
}  



//AddEventListener pour le controle de l'input quantity :
quantity.addEventListener('change', () => {
  quantityControle();
});
   

//Condition pour le contrôle du champs check-box location :
function checkboxLocationControl() {

   for(let i = 0; i < checkLocation.length; i++) {

     if(checkLocation[i].checked) {
       locationError.textContent ='';
       return true;
     }

   }
      locationError.textContent ='Vous devez choir une option';
      locationError.style.color = 'red';
      locationError.style.fontSize = '15px';
      locationError.style.marginBottom = '10px';
      return false;

 }

 

 //AddEventListener pour le controle de l'input checkLocation :
 checkLocation.forEach((chekLocationInput) => chekLocationInput.addEventListener('change', function() {
   checkboxLocationControl(); 
 }));
 

//Condition pour le contrôle du champs checkbox :
function conditionCheckboxControle() {
  if(checkbox1.checked ) {                  
      checkbox1.style.border = "solid 2px";
      conditionCheckboxError.textContent = "";
      return true;

  } else {
      checkbox1.style.border = "solid 2px red";
      conditionCheckboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
      conditionCheckboxError.style.fontSize = '15px';
      conditionCheckboxError.style.marginBottom = '10px';
      conditionCheckboxError.style.color = 'red';
      return false;
  }
};

  

//AddEventListener pour le controle de l'input checkbox1 :
checkbox1.addEventListener('change', () => {
  conditionCheckboxControle();
});

          

// Fonction pour ouvrir la modale de confirmation d'inscription :

btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  
  if(firstNameControle() && lastNameControle() && emailControle() && birthdateControle() && quantityControle() && checkboxLocationControl() && conditionCheckboxControle()){
      modalConfirmation.style.display = "block";
      reserve.style.display = 'none';
      
  } else {
      alert('Merci de remplir correctement votre inscription.');
  }
})

if(firstNameControle() ){
  modalConfirmation.style.display = "block";
  reserve.style.display = 'none';
  

}

if(lastNameControle() ){
  modalConfirmation.style.display = "block";
  reserve.style.display = 'none';
  
} 


if(emailControle() ){
  modalConfirmation.style.display = "block";
  reserve.style.display = 'none';
  
} 
  

if(birthdateControle() ){
  modalConfirmation.style.display = "block";
  reserve.style.display = 'none';
  
} 

if(quantityControle() ){
  modalConfirmation.style.display = "block";
  reserve.style.display = 'none';
  
} 

if(checkboxLocationControl() ){
  modalConfirmation.style.display = "block";
  reserve.style.display = 'none';
  
} 

if(conditionCheckboxControlel() ){
  modalConfirmation.style.display = "block";
  reserve.style.display = 'none';
  
} 






