var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.country = document.getElementById('country');
    fields.question = document.getElementById('subject');
   })

   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isEmail(email) {
    let regex = /^\S+@\S+\.\S+$/;
    return regex.test(String(email).toLowerCase());
}

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
   
    return valid;
   }

   class User {
    constructor(firstName, lastName, country, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
    this.question = question;
    }
}

function sendContact() {
    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, country.value, email.value);

      alert(`${usr.firstName}, thanks for submitting!`)

    } else {
        alert("There was an error")
    }
}