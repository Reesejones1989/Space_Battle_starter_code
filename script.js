// UsShip = {
//     hull: 20,
//     firepower:  5,
//     accuracy: .7,
// }
// alienShip = {
//     hull: Math.floor(Math.random()* 4)+3,
//     firepower: Math.floor(Math.random()*3)+2,
//     accuracy: (Math.random()* (.2)+.6)
// }

// RandomVariables
let hullRandom= Math.floor(Math.random()* 4)+3
let firepowerRandom= Math.floor(Math.random()*3)+2
let accuracyRandom= Math.random()* (.2)+.6
let count = 1 //turn counter

//AlienShip Class with Alien Ship Properties
class alienShip {
    constructor(shipNum, hull,firepower, accuracy){
        this.shipNum=shipNum
        this.hull= hull;
        this.firepower = firepower;
        this.accuracy = accuracy;

    }
    addAlienShip(){
        this.hull=Math.floor(Math.random()*4+3)
        this.firepower=Math.floor(Math.random()*3)+2
        this.accuracy=(Math.random()*(.2)+.6);
    }
    attacking(){
        // firepowerAttack = this.firepower
    }
    defending() {
        
    }
    createAlien(){
        instatiateAliens = [new alienShip(hullRandom,firepowerRandom,accuracyRandom) ];
return instatiateAliens
    }

}
//US Ship with properties
class UsShip {
    constructor (shipNum, hull,firepower, accuracy) {
        this.shipNum=shipNum;
        this.hull = 20 || hull;
        this.firepower = 5 || firepower;
        this.accuracy = .7 || accuracy;
    }
    attacking () {

    }
    defending(){

    }
}
// aliens = 6;
usLives = 1;
alienShipsAlive = [];


//New Ship Creation (couldn't figure out how to do this thru loop)
ship1 = new alienShip(1, hullRandom,firepowerRandom,accuracyRandom)
//  console.log(ship1);
 ship2 = new alienShip(2, Math.floor(Math.random()* 4)+3,firepowerRandom,accuracyRandom)
// console.log(ship2)
ship3 = new alienShip(3, Math.floor(Math.random()* 4)+3,Math.floor(Math.random()*3)+2,(Math.random()* (.2)+.6))
//  console.log(ship3);
 ship4 = new alienShip(4, Math.floor(Math.random()* 4)+3,Math.floor(Math.random()*3)+2,(Math.random()* (.2)+.6))
// console.log(ship4)
ship5 = new alienShip(5, Math.floor(Math.random()* 4)+3,Math.floor(Math.random()*3)+2,(Math.random()* (.2)+.6))
//  console.log(ship5);
 ship6 = new alienShip(6, Math.floor(Math.random()* 4)+3,Math.floor(Math.random()*3)+2,(Math.random()* (.2)+.6))
// console.log(ship6)
alienShipsAlive.push(ship1,ship2,ship3,ship4,ship5,ship6)
// console.log(alienShipsAlive)

oneShip = new UsShip(1,20,5,.7)

//Grab properties and compare them to each other
class battle{
    constructor(){
        this.ship = UsShip
        this.alienShip.hull = alienShip.hull;
        this.alienShip.firepower = alienShip.firepower;
        this.alienShip.accuracy = alienShip.accuracy;
        this.oneShip.firepower=oneShip.firepower
        this.oneShip.hull=oneShip.hull
        this.oneShip.accuracy=oneShip.accuracy

    }
    oneShipAttack(){
        alienShip.hull= alienShip.hull-oneShip.firepower;
        return this.alienShip.hull;
    }
    alienShipAttack(){
        oneShip.hull-=alienShip.firepower;
        return this.oneShipAttack.hull
    }
}


for (i=0;i<alienShipsAlive.length;i++){
// for (i=0;i<count<=6;i++){  - I want the game to go until the count gets to 6
    console.log("Alien HP: " + alienShipsAlive[i].hull +
                " Alien FP: " + alienShipsAlive[i].firepower
            + " USShip HP: " + oneShip.hull
            + " USShip FP: " + oneShip.firepower)
   
    if (count %2===0){   
        if (Math.random() < oneShip.accuracy) {
            console.log('You have been hit!');

            if(oneShip.firepower>=alienShipsAlive[i].hull){
            console.log('Alien Ship Dies, US Ship wins!')
            console.log(count)
            count++
            // alienShipsAlive.shift();
            // console.log(alienShipsAlive)
                                                        }
            else{
            alienShipsAlive[i].hull = alienShipsAlive[i].hull-oneShip.firepower
            console.log("Alien Still alive")
            console.log(count)
            count++
            // count = count;

            }
                    }
        else{
            console.log("Attack Missed")
            console.log(count)
            count++
            // count = count; (have somethings to figure out but it shouldn't count again until an alienShip is destroyed)
        }
                }
    else{
        if (Math.random() < alienShipsAlive[i].accuracy) {
            console.log('You have been hit!');
            if(alienShipsAlive[i].firepower>=oneShip.hull){
            console.log('Aliens win')
            console.log(count)
            count++

                                                        }
            else{
        oneShip.hull=oneShip.hull-alienShipsAlive[i].firepower
        console.log("US Ship Still alive")
        console.log(count)
        count++
             }
                                                        }
        else{
            console.log("Attack Missed")
            console.log(count)
            count++
            }
                                    }
                                }


















//  if (alienShipsAlive.hull < 0){
//     console.log("Alien Ship Destroyed")
//     alienShipsDefeated[i] += 1;
//     aliens=aliens-1
//  }
//  else{
    
//      console.log("The fight continues")
//  }

// let battleResult = alienShipsAlive => {
//     if (alienShipsAlive.hull <=0){
//         console.log("we won")
//     }
//     else{
//         console.log("the fight goes on")
//     }

// }
