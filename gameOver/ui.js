export class Ui{
    displayGames(data){

      let gameDesplay = ``;
      for(let i = 0; i < data.length; i++){
        gameDesplay+=`<div class="col-md-3 d-flex justify-content-center py-0  cardScale">
      <div class=" shadow-lg " >
      <div class="card p-0 cardEditor" data-id="${data[i].id}" style="width: 18rem;">
          <img src="${data[i].thumbnail}" class="card-img-top w-100" alt="...">
          <div class=" gameName px-0 py-2 d-flex justify-content-between align-items-center">
              <h3>${data[i].title}</h3>
              <span><a class="btn btn-primary p-1" href="#" role="button"> free</a></span>
          </div>
          
          <div class="card-body py-2 text-center">
            <p class="card-text">${data[i].short_description.split(" ", 10)}</p>
          </div>
          <div class="gamedet border-top border-dark px-2  d-flex justify-content-between align-items-center">
              <span>${data[i].genre}</span>
              <span>${data[i].platform}</span>
          </div>
  </div>
  </div>
  </div>`
      }
      document.getElementById("gameData").innerHTML = gameDesplay;
    }
    displayDetails(data){
      const content = `<div class="col-md-4 text-white ">
                  <img src="${data.thumbnail}" class="w-100" alt="">
              </div>
              <div class="col-md-8 text-white">
  
                  <h3 class="fw-bolder pb-2">title : ${data.title} </h3>
  <p>Category: <span><button type="button" class="btn btn-info p-1 fw-5">${data.genre}</button></span> </p>
  <p>Platform: <span><button type="button" class="btn btn-info p-1 fw-5">${data.platform}</button></span></p>
  <p>Status: <span><button type="button" class="btn btn-info p-1 fw-5">${data.status}</button></span></p>
  <p class="fw-lighter">${data.description}</p>
  <a type="button" href="${data.game_url}" class="btn btn-outline-warning py-2 ">Open Game</a>
              </div>` ;
              document.getElementById("gameDDDetails").innerHTML = content;
    }
  }