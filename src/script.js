document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop normal form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    const mailtoLink =
      "mailto:sarina.hemmatpour@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
  
      console.log(mailtoLink);
    window.location.href = mailtoLink;
  });
  