//navbar code for food selection form pop-up
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.querySelector(".form-request");
    var trigger = document.querySelector(".form");
    var submit = document.querySelector(".submit-form");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    submit.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
});