const contactform = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactform.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onload = function() {
        console.log(xhr.responseText);

        if (xhr.responseText == 'success') {

            if (name.value == '',
                email.value == '',
                subject.value == '',
                message.value == '') {
                alert("Fill All the Details!");
            } else {
                alert("Email Sent");
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
            }
        } else {
            alert("Something Went Wrong!");
        }
    }
    xhr.send(JSON.stringify(formData));


})