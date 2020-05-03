
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

var myChar = "";
var myDef = "";



characters.Revan.healthPoints = 120;
characters.Bastila.healthPoints = 150;
characters.Malak.healthPoints = 180;
characters.Calo.healthPoints = 100;

characters.Revan.attackPower = 8;
characters.Bastila.attackPower = 10;
characters.Malak.attackPower = 12;
characters.Calo.attackPower = 10;

$(".youAttacked").empty();
$(".attackedBack").empty();
$(".youDefeated").empty();
$(".youWon").empty();
$(".youLose").empty();
$(".noEnemy").empty();

$(".namer").html(characters.Revan.fullName);
$(".nameb").html(characters.Bastila.fullName);
$(".namem").html(characters.Malak.fullName);
$(".namec").html(characters.Calo.fullName);

$("#rev").appendTo("#picRow");
$("#bast").appendTo("#picRow");
$("#mala").appendTo("#picRow");
$("#caloN").appendTo("#picRow");

$(".Revanhp").html(characters.Revan.healthPoints);
$(".Bastilahp").html(characters.Bastila.healthPoints);
$(".Malakhp").html(characters.Malak.healthPoints);
$(".Calohp").html(characters.Calo.healthPoints);

$(".firstRow").css({"background-color": "black", "outline-color": "yellow", 
"border-width": "3px", "outline-style": "solid", "border-color": "yellow", "outline-width": "3px"});

};

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

$(".firstRow").click(function(){
        
   if (myChar == "") {
   console.log(this);	       
   $(this).appendTo("#yourChar");
   myChar = $(this);
   YourCharacter = $(myChar).attr("value");
      }
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
          
   for (var i = 0; i < 4; i++) {
       $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

       $("._" + [i]).not(myChar).css({"background-color": "red", "max-width": "100%", "outline-color": "black", 
           "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


   }
           
   $("#picRow").hide();
  
});

   
$(".move").click(function(){

    
     $(this).appendTo("#defender");
     myDef = $(this);
     YourDefender = $(myDef).children().attr("value");
     $(".youDefeated").empty();


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



$(".attackButton").click(function(){


     if ($("#defender").children().length == 0) {
         $(".noEnemy").html("No enemy here.");
     }

     if (!(attackerHP < 1) || !(defenderHP < 1)) {


     attackerHP = (attackerHP - defenderCAP);
     
 
     battleDmg = battleDmg + defenderCAP;
    
    $("." + YourCharacter).html(attackerHP);

 
     $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     defenderHP = (defenderHP - attackerAP);

     $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");


    $("." + YourDefender).html(defenderHP);


    console.log(attackerAP);
    attackerAP = (attackerAP + origAP);
    
    attack.attackPower = attackerAP;
    console.log(attackerAP);
 

 } 
 
     if (defenderHP <= 0) {

         $(".youAttacked").empty();
         $(".attackedBack").empty();
         $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");
         $("#defender").empty();


        

     }
     
     if ($(".move").children().length == 0){
      
      $(".youAttacked").empty();
      $(".attackedBack").empty();
      $(".youDefeated").empty();
      $(".noEnemy").empty();
      $(".youWon").html("You Won!!!! GAME OVER!!!"); 

      $(".restart").show();

      $(".restart").click(function(){
          location.reload(true);
      })
                       
     }

     if (attackerHP <= 0) {

         $(".restart").show();

         $(".attackButton").hide();

         $(".youAttacked").empty();
          $(".attackedBack").empty();
         $(".youDefeated").empty();
         $(".youLose").html("You've been defeated...GAME OVER!!!")

          $(".restart").click(function(){
              location.reload(true);
          });

     }      
     
});


});