import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin","Connexion","/pages/auth/signin.html"),
    new Route("/signup","Inscription","/pages/auth/signup.html"),
    new Route("/account","Mon compte","/pages/auth/account.html"),
    new Route("/editPassword","Modifications mot de passe","/pages/auth/editPassword.html"),
    new Route("/allResa","Vos reservations","/pages/reservations/allResa.html"),
    new Route("/reserver","Réserver","/pages/reservations/reserver.html"),
    new Route("/carte","La carte","pages/carte.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";