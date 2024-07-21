import {Ui} from "./ui.js";

export class Details{
    constructor(id) {
      // console.log(id);
       this.ui = new Ui();
 
       document.getElementById("btnClose").addEventListener("click", () => {
          document.querySelector(".desplayData").classList.remove("d-none");
          document.querySelector(".desplayDetails").classList.add("d-none");
        document.querySelector(".editany").classList.remove("d-none");
          

       });
       this.getDetails(id);
    }
 
     getDetails(idGames) {
       const loading = document.querySelector(".loading");
       loading.classList.remove("d-none");
 
       const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
       };
         fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
          .then((response) => response.json()) 

          .then((response) => this.ui.displayDetails(response))
          .catch((err) => console.error(err))
          .finally(() => {
             loading.classList.add("d-none");
          });
}
 }
