document.getElementById('credit-card-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt("20" + document.getElementById('year').value);
    const feedback = document.getElementById('feedback');

    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    let isValid = true;
    let message = "";


    if (cardNumber !== '1234123412341234') {
        isValid = false;
        message = "Invalid Card Number.";
    } 

    else if (year < currentYear || (year === currentYear && month < currentMonth)) {
        isValid = false;
        message = "The card is expired.";
    }

    else if (month < 1 || month > 12) {
        isValid = false;
        message = "Invalid month.";
    }

    if (isValid) {
        feedback.style.color = "green";
        feedback.innerText = "Payment Successful! Thank you.";
    } else {
        feedback.style.color = "red";
        feedback.innerText = message;
    }
});