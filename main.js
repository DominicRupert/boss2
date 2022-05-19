// @ts-nocheck

const heros = {
  link: {
    health: 100,
    level: 1,
    gold: 0,

    xp: 0,
  },
};

const bosses = {
  ganon: {
    health: 100,
    level: 1,
    attack: 1,
  },
};

function drawHeros() {
  let template = "";
  for (let key in heros) {
    let link = heros[key];
    template += `
       <div class="col-6 d-flex justify-content-center flex-column">
       <h1 class=" text-white emoji">'🐱‍👤'</h1>
       <h2>${link.level}</h2>
       <h2>${link.health}</h2>

      </div>
      <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: ${link.health}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${key}</div>
    </div>

       `;
  }
  document.getElementById("heros").innerHTML = template;

}

function drawBosses() {
  let template = "";
  for (let key in bosses) {
    let ganon = bosses[key];
    template += `
       <div class="col-6 d-flex justify-content-center flex-column "onClick="heroAttack('${key}')">
       <h1 class=" text-white emoji">🐗</h1>
       <h2>${ganon.level}</h2>
       <h2>${ganon.health}</h2>

       </div>
       <div class="progress">
   <div class="progress-bar" id="bossBar-${key}" role="progressbar" style="width: ${ganon.health}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${key}</div>
 </div>

       `;
  }
  document.getElementById("bosses").innerHTML = template;
 
}
function heroAttack(name) {
    // debugger
  let ganon = bosses[name];
  if (ganon.health <= 100) {
    ganon.health -= 5;
  }
console.log('running')
  updateBoss(name);
}

function bossAttack(name) {
  for (let key in heros) {
    let link = heros[key];
    if ((link.health = 0)) {
      link.health -= 5;
      if (link.health < 0) {
        link.health = 0;
      }
    }
    updateHero(name);
  }
}
function updateHero(name) {
  let link = heros[name];
//   let hero = document.getElementById(name)
//   let heroji = hero.querySelector('.link')
//   // let bar = battleGround.querySelector('.progress-bar')
//   bar.style.width = link.health + "%";
}

function updateBoss(name) {

  let ganon = bosses[name];
  //   let boss = document.getElementById(name);
  //   let bossoji = boss.querySelector('.ganon')
document.getElementById(`bossBar-${name}`).style=`width: ${ganon.health}%` 
//   bar.style.width = ganon.health + "%";

  
}
// let bossInterval = setInterval(bossAttack, 1000)

drawHeros();
drawBosses();
