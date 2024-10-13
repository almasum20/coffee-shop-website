document.addEventListener("DOMContentLoaded", function (event) {
    // search
    document.addEventListener("click", function (event) {
        if (event.target.closest(".nav-search")) {
            document.querySelector(".search-bar").classList.add("search-bar-active");
        } else if (event.target.closest(".search-cancel")) {
            document
                .querySelector(".search-bar")
                .classList.remove("search-bar-active");
        }
    });
    // login or sign up 
    document.addEventListener('click', (event) => {
        const formElement = document.querySelector(".form");

        // check if the click element has the class "nav-user" or "already-account"
        if (event.target.closest(".nav-user, .already-account")) {
            formElement.classList.add("login-active");
            formElement.classList.remove("sign-up-active");
        }
        // check if the click element has the class "sign-up-btn"
        if (event.target.closest(".sign-up-btn")) {
            formElement.classList.remove("login-active");
            formElement.classList.add("sign-up-active");
        }
        // check if the click element has the class "form-cancel"
        if (event.target.closest(".form-cancel")) {
            formElement.classList.remove("login-active");
            formElement.classList.remove("sign-up-active");
        }
        
    });
    // fix header 
    const header = document.querySelector("header");
    let lastcrolly = window.scrollY;
    window.addEventListener("scroll", () => {
        const correntScrolly = window.scrollY;
        if (correntScrolly === 0) {
            header.classList.remove("header-fix");
        } else if (correntScrolly < lastcrolly) {
            header.classList.add("header-fix");
        } else {
            header.classList.remove("header-fix");
        }
        lastcrolly = correntScrolly;
    });
});