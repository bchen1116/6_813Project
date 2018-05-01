// code for navbar
window.addEventListener('load', function() {
    var modal = document.querySelector(".form-request");
    var trigger = document.querySelector(".form");
    var submit = document.querySelector(".submit-form");
    var closeButton = document.querySelector(".close-button");
    var a1 = document.querySelectorAll(".dropdown-item")
    var navigationalItems = document.querySelectorAll(".nav-link");
    // console.log(navigationalItems[0])
    navigationalItems[2].style.color = "#f0eceb"
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        } else if (event.target === a1[0]) {
            window.location.replace("/profile.html");
        } else if (event.target === a1[1]) {
           window.location.replace("/login.html");
        }
        
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    submit.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});
