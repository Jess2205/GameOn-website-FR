function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validate(){
  var msg ='';
   
       if(document.getElementById('form').pseudo.value == '' || document.getElementById('form').mdp.value == '')
       { msg += 'Pouet';
       alert(msg);return false;
       }

       else
           return true;
   
  }

// DOM Elements

/* Le background de la page */
const modalbg = document.querySelector(".bground");
console.log (modalbg)

/* Bouton "je m'inscris" */
const modalBtn = document.querySelectorAll(".modal-btn");
console.log (modalBtn)

/* L'endroit où l'utilisateur renseigne ses données */
const formData = document.querySelectorAll(".formData");
console.log (formData)

/* Le body du formulaire */
const modalBody = document.querySelectorAll(".modal-body");
console.log (modalBody)

/* Bouton "Close" X */
const closeFormulaire = document.querySelectorAll(".close");

/* Les éléments du formulaire */

/* Le type de formulaire */
const form = document.querySelectorAll(".reserve");
console.log (form)

/* L'endroit où l'on renseigne le prénom */
const firstName = document.getElementById("first");
console.log (firstName)
/* L'endroit où l'on renseigne le message d'erreur du prénom érroné */
const firstNameX = document.getElementById("first_error");
console.log (firstNameX)

/* L'endroit où l'on renseigne le nom */
const lastName = document.getElementById("last");
console.log (lastName)
/* L'endroit où l'on renseigne le message d'erreur du nom érroné */
const lastNameX = document.getElementById("last_error");
console.log (lastNameX)

/* L'endroit où l'on renseigne l'email */
const email = document.getElementById("email");
console.log (email)
/* L'endroit où l'on renseigne le message d'erreur de l'email érroné */
const emailX = document.getElementById("email_error");
console.log (emailX)

/* L'endroit où l'on renseigne la date de naissance */
const birthdate = document.getElementById("birthdate");
console.log (birthdate)
/* L'endroit où l'on renseigne le message d'erreur de la date érronée */
const birthdateX = document.getElementById("birthdate_error");
console.log (birthdateX)

/* L'endroit où l'on renseigne le nombre de tournois */
const quantity = document.getElementById("quantity"); 
console.log (quantity)
/* L'endroit où l'on renseigne le message d'erreur du nombre de tournois */
const quantityX = document.getElementById("quantity_error");
console.log (quantityX)

/* L'endroit où l'on renseigne la ville */
const city = document.getElementsByName("location");
for (let i = 0 ; i<city.length ; i++){
  console.log (city [i]);
}

/* L'endroit où l'on renseigne le message "location manquante" */
const cityX = document.getElementById("location_manquant");
console.log (cityX)


/* L'endroit où l'on valide les conditions*/
const checkbox1 = document.getElementById("checkbox1");
console.log (checkbox1)
/* L'endroit où l'on renseigne si on veut être prévenu */
const checkbox2 = document.getElementById("checkbox2");
console.log (checkbox2)
/* L'endroit où le message d'erreur des conditions manquantes */
const conditionX = document.getElementById("condition_error");
console.log (conditionX)

/* Bouton de validation */
const validation = document.getElementById("btn-envoie");
console.log (validation)
/* Endroit où le message de validation apparait quand OK */
const validation_ok = document.getElementById("validation-ok");
console.log (validation_ok)

/* Fermer le formulaire */
const fermer = document.getElementById("fermer");

/* Bouton input "envoyer"*/
const submitBtn = document.querySelector(".btn-submit");
console.log (submitBtn)
/* L'endroit où apparait le message de confirmation de l'envoie */
const confirmation = document.getElementById("confirmation");
console.log (confirmation)



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form and not reset datas in the form
function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}

// Validation du formulaire si tout est Ok//
function validateForm(event) {
  event.preventDefault();
  event.stopPropagation();
  if (
    !validateFirstName() &&
    !validateLastName() &&
    !validateEmail() &&
    !validateCity() &&
    !validateQuantity() &&
    !validateBirthdate()
  )

    confirmation.style.fontSize = "30px";
    confirmation.style.textAlign = "center";
    confirmation.style.marginBottom ="50%";
    confirmation.style.marginTop ="50%";
    reserve.style.display = "none";
  
    fermer.style.display = "block";
    
    submitBtn.style.display = "none";
    
    confirmation.style.display = "flex";
    
    
    fermer.addEventListener("click", fermerModal);
    
  }
  
    return;


// Message de remerciement si formulaire validé//

function remerciement() {
  form.innerHTML = /*html*/ `<div class ="content"> 
  Merci pour votre <br>inscription</div>
  <button class="btn-submit" onclick= "closeModal()"> 
  Fermer </button>`;
}

// Les messages d'erreurs //

/* Validation du nom */

function validate (event) {
  
  if (firstName.value.trim() === '' || firstName.value.length <2)  // condition  si le prénom est vide ou inf a 2 caractères

  {
    firstNameX.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    firstNameX.style.fontSize = "14px";
    firstNameX.style.color="red";
  } 
  else{
    firstNameX.innerHTML  = "";
  }
  if (lastName.value.trim() === '' || lastName.value.length <2)  // condition  si le nom est vide ou inf a 2 caractères

  {
    lastNameX.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastNameX.style.fontSize = "14px";
    lastNameX.style.color="red";
  } 
  else{
    lastNameX.innerHTML  = "";
  }
  
  // verification de l'adresse mail grace au regex mailCaractere
  if(email.test(email.value)== true){
    emailX.innerHTML  = "";
  }
  else{
    emailX.innerHTML  =" Veuillez entrer un email correct";
    emailX.style.fontSize = "14px";
    emailX.style.color="red";
    
  }

  /* Pour le nombre de concours, une valeur numérique est saisie.*/
   // condition si vide ou si valeur different d'un nombres
   if (quantity.value === '' || quantity.test(quantity.value) == false){
    quantityX.innerHTML  = "Veuillez entrer le nombre de tournois participé";
    quantityX.style.fontSize = "14px";
    quantityX.style.color="red";
    
  }else{
    quantityX.innerHTML  = "";
  }
  
  /* Validation de la checkbox */
  // verification si une des box est coché.
  
  if ((location1.checked)|| (location2.checked) || (location3.checked)
    ||(location4.checked) ||(location5.checked) ||(location6.checked)) {
    location_m.innerHTML  = "";
  }
  else{
    cityX.innerHTML  = "Vous devez choisir une option";
    cityX.style.fontSize = "14px";
    cityX.style.color="red"; 
    
  }

   /* Validation des conditions */

  if(checkbox1.checked){
    conditionX.innerHTML  = "";
  }
  else{
    conditionX.innerHTML  ="Vous devez vérifier que vous acceptez les termes et conditions";
    conditionX.style.fontSize = "14px";
    conditionX.style.color="red";  
  }

   /* Validation de la date de naissance */
   //Si vide ou caractère autre que des chiffres/nombres 
   
   if (birthdate.value ==='' || (birthdateValidation.test(birthdate.value) == false)){
    birthdateX.innerHTML = "Vous devez entrer votre date de naissance";
    birthdateX.style.fontSize = "14px";
    birthdateX.style.color="red";
    
  }
  else{
    birthdateX.innerHTML = "";
  }
 
}
