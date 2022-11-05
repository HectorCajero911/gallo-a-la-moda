//Animacion inicio-crear cuenta
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//Codigo mostrar contraseña//
const iconEye = document.querySelector(".icon-eye");
iconEye.addEventListener("click", function(){
    const icon = this.querySelector("i");

    if(this.nextElementSibling.type === "password"){
        this.nextElementSibling.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
    else{
        this.nextElementSibling.type = 'password';
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
});

//Codigo mostrar contraseña 2//
const iconEye2 = document.querySelector(".icon-eye2");
iconEye2.addEventListener("click", function(){
    const icon = this.querySelector("i");

    if(this.nextElementSibling.type == "password"){
        this.nextElementSibling.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
    else{
        this.nextElementSibling.type = 'password';
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
});