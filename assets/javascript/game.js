// global variables.
var attack;
var defend;
var attackcharacter;
var attackerHP;
var battleDmg = 0;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

function reset() {	

$("#picRow").show();

$(".restart").hide();
$(".attackButton").show();

// reset myChar and myDef to equal nothing.
var myChar = "";
var myDef = "";
// var YourCharacter;
// var YourDefender;


// reset health points.
characters.Revan.healthPoints = 120;
characters.Bastila.healthPoints = 150;
characters.Malak.healthPoints = 180;
characters.Calo.healthPoints = 100;

// reset attack power.
characters.Revan.attackPower = 8;
characters.Bastila.attackPower = 10;
characters.Malak.attackPower = 12;
characters.Calo.attackPower = 10;

// delete all in-game text.
$(".youAttacked").empty();
$(".attackedBack").empty();
$(".youDefeated").empty();
$(".youWon").empty();
$(".youLose").empty();
$(".noEnemy").empty();

//writing each characters full name to the html so they show up on the page.
$(".namer").html(characters.Revan.fullName);
$(".nameb").html(characters.Bastila.fullName);
$(".namem").html(characters.Malak.fullName);
$(".namec").html(characters.Calo.fullName);

//adding the picture for each character so they show up on the page.
$("#rev").appendTo("#picRow");
$("#bast").appendTo("#picRow");
$("#mala").appendTo("#picRow");
$("#caloN").appendTo("#picRow");

//writing each characters healthpoints to the html so they show up on the page.
$(".Revanhp").html(characters.Revan.healthPoints);
$(".Bastilahp").html(characters.Bastila.healthPoints);
$(".Malakhp").html(characters.Malak.healthPoints);
$(".Calohp").html(characters.Calo.healthPoints);

// reset border colors. 
$(".firstRow").css({"background-color": "black", "outline-color": "yellow", 
"border-width": "3px", "outline-style": "solid", "border-color": "yellow", "outline-width": "3px"});

};

// array to hold each characters stats.
var characters = { 

Revan: {
    name: "Revan",
    visual: 'assets/images/Revan.jpg',
    healthPoints: 120,
    attackPower: 8,
    fullName: "Darth Revan",
    counterAttackPower: 24
    },

Bastila:{
    name: "Bastila",
    visual: 'assets/images/Bastila.jpg',
    healthPoints: 150,
    attackPower: 10,
    fullName: "Bastila Shan",
    counterAttackPower: 10
    },

Malak:{ 
    name: "Malak",
    visual: 'assets/images/Malak.jpg',
    healthPoints: 180,
    attackPower: 12,
    fullName: "Darth Malak",
    counterAttackPower: 15
    },

Calo:{ 
    name: "Calo",
    visual: 'assets/images/Calo.png',
    healthPoints: 100,
    attackPower: 10,
    fullName: "Calo Nord",
    counterAttackPower: 5
    }
};


$(document).ready(function(){
reset();

// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
// "Your Character" and moves the other three into "Enemies available to attach".
$(".firstRow").click(function(){
        
   if (myChar == "") {
   // appends the chosen character to "Your Character"
   console.log(this);	       
   $(this).appendTo("#yourChar");
   myChar = $(this);
   YourCharacter = $(myChar).attr("value");
      }
   // if else statements that determine who is currently "Your Character" and assign
   // that person to the character array's properties. 
   if (YourCharacter == characters.Revan.name) {
           attackerHP = characters.Revan.healthPoints - battleDmg;
           attackerAP = characters.Revan.attackPower;
           origAP = 8;
           attackerCAP = characters.Revan.counterAttackPower;
           attackerFN = characters.Revan.fullName;
           attack = characters.Revan;
   }
   else if (YourCharacter == characters.Bastila.name){
           attackerHP = characters.Bastila.healthPoints - battleDmg;
           attackerAP = characters.Bastila.attackPower;
           origAP = 10;
           attackerCAP = characters.Bastila.counterAttackPower;
           attackerFN = characters.Bastila.fullName;
           attack = characters.Bastila;
   }
   else if (YourCharacter == characters.Malak.name){
           attackerHP = characters.Malak.healthPoints - battleDmg;
           attackerAP = characters.Malak.attackPower;
           origAP = 12;
           attackerCAP = characters.Malak.counterAttackPower;
           attackerFN = characters.Malak.fullName;
           attack = characters.Malak;
   }
   else if (YourCharacter == characters.Calo.name){
           attackerHP = characters.Calo.healthPoints - battleDmg;
           attackerAP = characters.Calo.attackPower;
           origAP = 10;
           attackerCAP = characters.Calo.counterAttackPower;
           attackerFN = characters.Calo.fullName;
           attack = characters.Calo;
   }
          
   // clones the three remaining characters to "Enemies available to attack" three separate divs.
   for (var i = 0; i < 4; i++) {
       $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

       // changing color
       $("._" + [i]).not(myChar).css({"background-color": "red", "max-width": "100%", "outline-color": "black", 
           "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


   }
           
   // Clears the characters from the top.
   // $("#picRow").empty();
   $("#picRow").hide();
  
});

// When the player clicks on any of the characters in the "enemies available to attack" section, the game 
// determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
// characters remain in "enemies available to attack" section.     
$(".move").click(function(){

     // if (myDef === "") {
        // clones the chosen character to "Defender"
     // moves that character to the "Defender" section on the page.
     $(this).appendTo("#defender");
     myDef = $(this);
     YourDefender = $(myDef).children().attr("value");
     $(".youDefeated").empty();

 // }
     // if else statements that determine who is currently "Defender" and assign
   // that person to the character array's properties.
   if (YourDefender == characters.Revan.name) {

           defenderHP = characters.Revan.healthPoints;
           defenderAP = characters.Revan.attackPower;
           defenderCAP = characters.Revan.counterAttackPower;
           defenderFN = characters.Revan.fullName;
           defend = characters.Revan;

       }
       else if (YourDefender == characters.Bastila.name){
           defenderHP = characters.Bastila.healthPoints;
           defenderAP = characters.Bastila.attackPower;
           defenderCAP = characters.Bastila.counterAttackPower;
           defenderFN = characters.Bastila.fullName;
           defend = characters.Bastila;

   }
   else if (YourDefender == characters.Malak.name){
           defenderHP = characters.Malak.healthPoints;
           defenderAP = characters.Malak.attackPower;
           defenderCAP = characters.Malak.counterAttackPower;
           defenderFN = characters.Malak.fullName;
           defend = characters.Malak;

           
   }
   else if (YourDefender == characters.Calo.name){
           defenderHP = characters.Calo.healthPoints;
           defenderAP = characters.Calo.attackPower;
           defenderCAP = characters.Calo.counterAttackPower;
           defenderFN = characters.Calo.fullName;
           defend = characters.Calo;

           
   }


});


// when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
// property of the "Defender".Their counter attack decreases your health.
$(".attackButton").click(function(){

     // if player clicks attack button and no one is in the "defender" div, then 
     // game says "no enemy here".
     if ($("#defender").children().length == 0) {
         $(".noEnemy").html("No enemy here.");
     }

     if (!(attackerHP < 1) || !(defenderHP < 1)) {

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracts the defendersCAP from the attackers HP.)
     attackerHP = (attackerHP - defenderCAP);
     
     // writing the attacker/Your Character's new healthpoints to the html. 
     battleDmg = battleDmg + defenderCAP;
    
    $("." + YourCharacter).html(attackerHP);

 
     // writing the text "You attacked Bastila Shan for 8 damage".
     $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracts the attackers AP points from the defenders HP.)
     defenderHP = (defenderHP - attackerAP);

     // writing the text "Bastila Shan attacked you back for 10 damage."
     $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");


    
    // write the defender's new healthpoints to the html.
    $("." + YourDefender).html(defenderHP);


    // Your Character's attack power goes up by AP. 
    console.log(attackerAP);
    attackerAP = (attackerAP + origAP);
    
    // redefining "YourCharacter"'s attack power to equal the new value. 
    attack.attackPower = attackerAP;
    console.log(attackerAP);
 

 } 
     // if your character defeats the defender.
     if (defenderHP <= 0) {

         // clear text from the bottom and add defeated text.
         $(".youAttacked").empty();
         $(".attackedBack").empty();
         $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");
         // remove defender from the page.
         $("#defender").empty();


        

     }
     
     // if all enemies have been defeated and the attacker still has health, then the player wins
     if ($(".move").children().length == 0){
      
      // clear out the other paragraphs and let user know they won.
      $(".youAttacked").empty();
      $(".attackedBack").empty();
      $(".youDefeated").empty();
      $(".noEnemy").empty();
      $(".youWon").html("You Won!!!! GAME OVER!!!"); 

      // show the restart button. 
      $(".restart").show();

      // When you click "Restart" the game begins again. 
      $(".restart").click(function(){
          location.reload(true);
      })
                       
     }

     // if your characters hp = 0 then you lose.
     if (attackerHP <= 0) {

         // show the restart button.
         $(".restart").show();

         // hide the attack button.
         $(".attackButton").hide();

         // You lose.
         $(".youAttacked").empty();
          $(".attackedBack").empty();
         $(".youDefeated").empty();
         $(".youLose").html("You've been defeated...GAME OVER!!!")

          // When you click "Restart" the game begins again. 
          $(".restart").click(function(){
              location.reload(true);
          });

     }      
     
});


// The game remembers every time you attack and slowly increases your attack power. 
});