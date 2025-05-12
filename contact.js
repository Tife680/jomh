

  let selectedOption = "General Inquiry";

  function setOption(option) {
    selectedOption = option;
    // Optional: update button styles to show active
    document.getElementById('general').classList.remove('active');
    document.getElementById('support').classList.remove('active');
    if (option === "General Inquiry") {
      document.getElementById('general').classList.add('active');
    } else {
      document.getElementById('support').classList.add('active');
    }
  }


  function sendToWhatsApp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const selectedOption = document.getElementById("inquiryType").value; // Ensure you have this element in your HTML

    const fullMessage = `*New Business Inquiry*%0A` +
                        `*Type:* ${selectedOption}%0A` +
                        `*Name:* ${firstName} ${lastName}%0A` +
                        `*Email:* ${email}%0A` +
                        `*Message:* ${message}`;

    const phoneNumber = "+2347068444891"; // Replace with your actual WhatsApp number (without +)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappURL, "_blank");
}

// second contact 

function sendToWhatsApp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const selectedOption = document.getElementById("inquiryType").value;

    const fullMessage = `*New Business Inquiry*%0A` +
                        `*Type:* ${selectedOption}%0A` +
                        `*Name:* ${firstName} ${lastName}%0A` +
                        `*Email:* ${email}%0A` +
                        `*Message:* ${message}`;

    const phoneNumber = "+2347068444891"; // Replace with your WhatsApp number without +
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappURL, "_blank");
}
