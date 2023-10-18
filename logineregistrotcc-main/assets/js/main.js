const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

      input = document.querySelector("input"),
      emailIcon = document.querySelector(".email-icon"),

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }

            password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
                return;
        })
    })
})

links.forEach(link => { 
    link.addEventListener("click", e => {
        e.preventDefault(); // Previne do formulário se submeter ao outro
        forms.classList.toggle("show-signup");
    })
})

input.addEventListener("keyup", () => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(input.value === ""){
        emailIcon.classList.replace("bx-check-circle", "bx-envelope");
        return emailIcon.style.color = "#8b8b8b";

    } if(input.value.match(pattern)) {
        emailIcon.classList.replace("bx-envelope", "bx-check-circle");
        return emailIcon.style.color = "#4bb543";
    }
    emailIcon.classList.replace("bx-check-circle", "bx-envelope");
    return emailIcon.style.color = "#de0611";

})