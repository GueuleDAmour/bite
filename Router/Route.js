export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      //demande d'autorisation pour accéder à  la page.
      this.autorize= authorize;
    }
}
/*Tableau
[] ->Tout le monde peut y accéder
[disconnnected]-> Réserver aux utilisateurs déconnectés
["client"]->Réserver aux utilisateurs avec le rôle client
["admin"]->Réserver aux utilisateurs avec le rôle admin
["admin","client"]-> Réserver aux utilisateurs avec le rôle admin OU client
*/