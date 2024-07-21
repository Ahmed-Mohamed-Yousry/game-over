import {Details} from "./details.js";
import {Ui} from "./ui.js";

export class Games {
    constructor() {
        this.getGames("shooter");
  
        document.querySelectorAll(".menu a").forEach((link) => {
           link.addEventListener("click", (e) => {
              document.querySelector(".menu .active").classList.remove("active");
              e.target.classList.add("active");
              this.getGames(e.target.dataset.category);
           });
        });
  
        this.ui = new Ui();
     }
    async getGames(categoreOption) {
        
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        };
        const api = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoreOption}`,
          options
        );
        const response = await api.json();
        // displayGames(response)
        this.ui.displayGames(response);
        this.startEvent();
        loading.classList.add("d-none");
        // console.log(response);
      }
      startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
              const id = item.dataset.id;
              this.showDetails(id);
              console.log(id);
           });
        });
     }
  
     showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".desplayData").classList.add("d-none");
        document.querySelector(".desplayDetails").classList.remove("d-none");
        document.querySelector(".editany").classList.add("d-none");

     }
}

  
 