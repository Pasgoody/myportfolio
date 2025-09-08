function toggleMenu() {
  const navLinks = document.querySelector(".nav-links-wrapper");
  navLinks.classList.toggle("active");
}

$(document).ready(function () {
  $("#myFORM").submit(function (event) {
    event.preventDefault();

    let isValid = true;

    // clear old errors
    $("#nameError, #emailError, #textareaError").text("");

    let name = $("#name").val().trim();
    let email = $("#email").val().trim(); // ✅ lowercase id
    let textArea = $("#textarea").val().trim();

    if (name === "") {
      $("#nameError").text("Your name is required");
      isValid = false;
    }  

    if (email === "") {
      $("#emailError").text("Valid email is required");
      isValid = false;
    }

    if (textArea === "") {
      $("#textareaError").text("Input field can't be empty");
      isValid = false;
    }

    if (isValid) {
      $.ajax({
        url: "https://formspree.io/f/mvgboeld", // ✅ matches your form action
        method: "POST",
        data: $(this).serialize(),
        dataType: "json",
        success: function () {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          $("#myFORM")[0].reset();
        },
        error: function () {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something went wrong. Try again.",
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    }
  });
});


