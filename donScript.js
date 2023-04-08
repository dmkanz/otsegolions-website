function sendMail() {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const filter1 = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    const filter2 = /^\d{5}(-\d{4})?$/;
    const otsego = document.getElementById("otsego").checked;
    const elkriver = document.getElementById("elkriver").checked;
    const rogers = document.getElementById("rogers").checked;
    const albertville = document.getElementById("albertville").checked;


    if (document.donation.fname.value == "") {
        alert("Please provide your first name!");
        document.donation.fname.focus();
        return false;
    };
    if (document.donation.lname.value == "") {
        alert("Please provide your last name!");
        document.donation.lname.focus();
        return false;
    };
    if (document.donation.name.value == "") {
        alert("Please provide the name of individual or organization!");
        document.donation.name.focus();
        return false;
    };
    if (document.donation.phone.value == "") {
        alert("Please provide your phone number!");
        document.donation.phone.focus();
        return false;
    } else if (!filter1.test(document.donation.phone.value)) {
        alert('Please provide a valid phone number!');
        document.donation.phone.focus();
        return false;
    };
    if (document.donation.email.value == "") {
        alert("Please provide your email address!");
        document.donation.email.focus();
        return false;
    } else if (!filter.test(document.donation.email.value)) {
        alert('Please provide a valid email address!');
        document.donation.email.focus();
        return false;
    };
    if (document.donation.address1.value == "") {
        alert("Please provide your address!");
        document.donation.address1.focus();
        return false;
    };
    if (document.donation.city.value == "") {
        alert("Please provide your city!");
        document.donation.city.focus();
        return false;
    };
    if (document.donation.state.value == "") {
        alert("Please provide your state!");
        document.donation.address1.focus();
        return false;
    };
    if (document.donation.zipcode.value == "") {
        alert("Please provide your zip code!");
        document.donation.zipcode.focus();
        return false;
    } else if (!filter2.test(document.donation.zipcode.value)) {
        alert('Please provide a valid zip code!');
        document.donation.zipcode.focus();
        return false;
    };
    if (document.donation.country.value == "") {
        alert("Please provide your country!");
        document.donation.country.focus();
        return false;
    };
    if (document.donation.otype.value == "") {
        alert("Please provide the type of organization!");
        document.donation.otype.focus();
        return false;
    };
    if (document.donation.amount.value == "") {
        alert("Please provide requested amount!");
        document.donation.amount.focus();
        return false;
    };
    if (document.donation.support.value == "") {
        alert("Please provide support details!");
        document.donation.support.focus();
        return false;
    };
    if (document.donation.serve.value == "") {
        alert("Please provide the number of people served!");
        document.donation.serve.focus();
        return false;
    };
    if (document.donation.summary.value == "") {
        alert("Please provide a summary!");
        document.donation.summary.focus();
        return false;
    };
    if (document.donation.odonations.value == "") {
        alert("Please provide other donation details!");
        document.donation.odonations.focus();
        return false;
    };
    if (document.donation.description.value == "") {
        alert("Please provide a description!");
        document.donation.description.focus();
        return false;
    };
    if (otsego == false && elkriver == false && rogers == false && albertville == false) {
        alert("Please provide an area!");
        return false;
    };

    const resbox = document.querySelectorAll('input[type="checkbox"]:checked')
    const params = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        name: document.getElementById("name").value,
        title: document.getElementById("title").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipcode: document.getElementById("zipcode").value,
        country: document.getElementById("country").value,
        otype: document.getElementById("otype").value,
        otypename: document.getElementById("otypename").value,
        tax: document.getElementById("tax").value,
        homepage: document.getElementById("homepage").value,
        upload: document.getElementById("upload").value,
        amount: document.getElementById("amount").value,
        support: document.getElementById("support").value,
        serve: document.getElementById("serve").value,
        summary: document.getElementById("summary").value,
        odonations: document.getElementById("odonations").value,
        description: document.getElementById("description").value,
        residents: ([...resbox].map(c => c.value))
    };

    const serviceID = "service_wwi6ckd";
    const templateID = "template_ecq3quf";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("fname").value = "";
            document.getElementById("lname").value = "";
            document.getElementById("name").value = "";
            document.getElementById("title").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("address1").value = "";
            document.getElementById("address2").value = "";
            document.getElementById("city").value = "";
            document.getElementById("state").value = "";
            document.getElementById("zipcode").value = "";
            document.getElementById("country").value = "";
            document.getElementById("otype").value = "";
            document.getElementById("otypename").value = "";
            document.getElementById("tax").value = "";
            document.getElementById("homepage").value = "";
            document.getElementById("upload").value = "";
            document.getElementById("amount").value = "";
            document.getElementById("support").value = "";
            document.getElementById("serve").value = "";
            document.getElementById("summary").value = "";
            document.getElementById("odonations").value = "";
            document.getElementById("description").value = "";
            document.getElementById("otsego").checked = false;
            document.getElementById("elkriver").checked = false;
            document.getElementById("rogers").checked = false;
            document.getElementById("albertville").checked = false;
            console.log(res);
            alert("Your message was sent successfully");
        })
        .catch((err) => console.log(err));
}
