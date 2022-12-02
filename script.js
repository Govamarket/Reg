const userName = document.getElementById('userName');
const password = document.getElementById('userPassword');
const userPassword = document.getElementById('confirmUserPassword');
const form = document.getElementById('form');

// Error icons at userName
const blueReject = document.getElementById('blue');
const redReject = document.getElementById('red');
const angryReject = document.getElementById('angry');
const nameReject = document.getElementById('name');

// Error icon at password validation

const blueReject1 = document.getElementById('blue1');
const redReject1 = document.getElementById('red1');
const angryReject1 = document.getElementById('angry1');
const passReject = document.getElementById('pass');

// Confirm password error icon at password validation

const blueReject2 = document.getElementById('blue2');
const redReject2 = document.getElementById('red2');
const angryReject2 = document.getElementById('angry2');
const lateReject = document.getElementById('late');


const nameInputValidator = () => {
    if (userName.value == "") {
        redReject.style.display="flex";
        angryReject.style.display="flex";
    }else if (userName.value.length < 4) {
        nameReject.style.display="flex";
        redReject.style.display="none";
        angryReject.style.display="none";
    }else {
        blueReject.style.display="flex";
        nameReject.style.display="none";
        redReject.style.display="none";
        angryReject.style.display="none";
    }

    if (password.value == "") {
        redReject1.style.display="flex";
        angryReject1.style.display="flex";
    }else if (password.value.length < 4) {
        passReject.style.display="flex";
        redReject1.style.display="none";
        angryReject1.style.display="none";
        blueReject1.style.display="none";
    }else {
        blueReject1.style.display="flex";
        passReject.style.display="none";
        redReject1.style.display="none";
        angryReject1.style.display="none";
    }

    if (userPassword.value == "") {
        redReject2.style.display="flex";
        angryReject2.style.display="flex";
    }else if (userPassword.value.length < 4) {
        lateReject.style.display="flex";
        redReject2.style.display="none";
        angryReject2.style.display="none";
        blueReject2.style.display="none";
    }else if (!userPassword.value.match(password.value)) {
        redReject2.style.display="flex";
        angryReject2.style.display="none";
        blueReject2.style.display="none";
        lateReject.style.display="none";
    }else {
        redReject2.style.display="none";
        angryReject2.style.display="none";
        blueReject2.style.display="flex";
        lateReject.style.display="none";
    }
}


const submitform = (event) => {
    event.preventDefault();
 nameInputValidator();

}