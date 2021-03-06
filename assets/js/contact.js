// -------- change text -------------//
let texts = ['C', 'Co', 'Con', 'Cont', 'Conta', 'Contac', 'Contact', 'Contact W', 'Contact Wi', 'Contact Wit', 'Contact With', 'Contact With U', 'Contact With Us'];
let number = 0;
let html = document.getElementById('txt-rotate');
function txtRotate() {
    number++;
    if (number >= texts.length) {
        texts.reverse();
        number = 0;
    }
    html.innerHTML = texts[number];
}
setInterval(txtRotate, 400);
//------------------Name Input Validaton------------------//
document.getElementById('name-input').addEventListener('keypress', e => {
    if(e.key == ' '){
        e.preventDefault();
    }
});
var specialChrac = /^[a-zA-Z]{5,10}$/;
$('#contact-form').submit(function (e) {
    var inputNameValue = $('#name-input').val().toLowerCase();
    if ((/\d+/g.test(inputNameValue))) {
        dontUseNumbers();
        return false;
    } else if ((!specialChrac.test(inputNameValue))) {
        dontUseSpecial();
        return false;
    } else if (inputNameValue.length == 0) {
        FillTheInput();
        return false;
    } else {
        ClearInnerHtml();
        return true;
    }
});
var InputNameLabel = document.getElementById('name-input-label');
function dontUseNumbers() {
    InputNameLabel.innerHTML = "Please Don't Use Numbers !";
}
function ClearInnerHtml() {
    InputNameLabel.innerHTML = "";
}
function dontUseSpecial() {
    InputNameLabel.innerHTML = "Please Don't Use Special Charachters And Name Chracters Must Between (5,10)!";
}
function FillTheInput() {
    InputNameLabel.innerHTML = "Please Fill Out The Field !";
}
// ----------------- Email Input Validaton------------------------ //
document.getElementById('email-input').addEventListener('keypress', e => {
    if(e.key == ' '){
        e.preventDefault();
    }
});
$('#contact-form').submit(function (e) {
    var inputEmailValue = $('#email-input').val().toLowerCase();
    var EmailCharacs = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(EmailCharacs.test(inputEmailValue))) {
        vaildEmail();
        return false;
    } else if (inputEmailValue.length == 0) {
        FillTheEmailInput();
        return false;
    } else {
        ClearEmailInnerHtml();
        return true;
    }
});
var InputEmailLabel = document.getElementById('email-input-label')
function vaildEmail() {
    InputEmailLabel.innerHTML = "Please Enter a Vaild Email Addres";
}
function FillTheEmailInput() {
    InputEmailLabel.innerHTML = "Please Fill Out The Field !";
}
function ClearEmailInnerHtml() {
    InputEmailLabel.innerHTML = "";
}
// ---------------------TextArea Validaton-------------------- //
$('#contact-form').submit(function (e) {
    var inputTextValue = $('#text-input').val();
    if (inputTextValue.length == 0) {
        FillTheTextArea();
        return false;
    } else {
        ClearTextInnerHtml();
        return true;
    }
});
var TextInputLabel = document.getElementById('text-input-label');
function FillTheTextArea() {
    TextInputLabel.innerHTML = "Please Fill Out The Field !";
}
function ClearTextInnerHtml() {
    TextInputLabel.innerHTML = "";
}
// ----------------------------------------- //