function sendMail() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (document.contact.fname.value == "") {
        alert("Please provide your first name!");
        document.contact.fname.focus();
        return false;
    };
    if (document.contact.lname.value == "") {
        alert("Please provide your last name!");
        document.contact.lname.focus();
        return false;
    };
    if (document.contact.email.value == "") {
        alert("Please provide your email address!");
        document.contact.email.focus();
        return false;
    } else if (!filter.test(document.contact.email.value)) {
        alert('Please provide a valid email address!');
        document.contact.email.focus();
        return false;
    };
    if (document.contact.message.value == "") {
        alert("Please enter a message!");
        document.contact.message.focus();
        return false;
    };

    const params = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_wwi6ckd";
    const templateID = "template_f6o4ffk";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully");
        })
        .catch((err) => console.log(err));
}

