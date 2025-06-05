const emailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

//Ecouteur d'événement
btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
//Ici, il faudra appeler l'Api pour vérifier les credentials en BDD.
if(emailInput.value == "test@mail.com" && passwordInput.value =="123"){
    alert("Vous êtes connecté");

    //Création d'un token, (Il faudra récupérer un vrai token)
    const  token= "hhyouhdshivrhrgfhtpzhggozgjthhfjezofgzorggfpizeoguyrti";//-->Objectif, passer ce token en cookie.
    setToken (token);

      //Rôle de l'utilisateur
    setCookie(RoleCookieName, "admin", 7);

    //Si connecté --> redirection vers la page d'acceuil
    window.location.replace("/");
}
else{
    emailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
}
}

//Savoir si on est connecté
function isConnected(){
    if(getToken() ==null  ||  getToken() ==undefined){
        return false;
    }
    else {
        return true;
    }
}



