// console.log("thahapocusdhcuif")


// var taha = prompt("Enter your jobe")
// if (taha >= 0) {
//     alert(taha + " is a number")
// } else if (taha === " ") {
//     alert(taha + " is  a string")
// } else if (!!taha || true || false) {
//     alert(taha + " is a bolean")
// }
// var h1 = ["100"]
// var h2 = ["100"]
var punch ="Punch"
var kick = "Kick"
var superpunch = "Super Punch"
var cover = "Cover"
var headkick ="Head kick"
var leaps ="Leaps"
var count =0
var randontime;
var moves=[punch,kick,superpunch,cover,headkick,leaps]
var players = ["Uamir", "Usman","Ayan"]
var player1 = prompt("Player 1 Name")
var player2 = players[Math.floor(Math.random() * 3)]
alert(player1+ " " + "&" +" "+ player2 +" " + "Fight together")
console.log(player1+ " " + "&" +" "+ player2 +" " + "Fight together")
alert("Get Ready For The Toss")
var con1 = prompt("Please select Heads OR Tails")
var gen = Math.random()*1
var spin = Math.floor(gen);
console.log(spin)
if (con1.toLowerCase() == "heads" || con1.toLowerCase() == "tails") {
   if (spin == "0") {
      alert(player1 +" "+"You Won The Toss You Hit First To"+" "+player2)
      console.log(player1 +" "+"You Won The Toss You Hit First To"+" "+player2)
   }
   else if (spin == "1"){
      alert(player1 +" "+ " You Lost The Toss"+" "+player2+" "+"Will Hit First")
      console.log(player1 +" "+ " You Lost The Toss"+" "+player2+" "+"Will Hit First")
   }
}

var player1health=100;
var player2health=100;
function get() {
       var randomattack = moves[Math.floor(Math.random()*6)]
       if (randomattack === kick){
         return[kick,10]
       }
      else if(randomattack === punch){
         return[punch,20]
      }
      else if(randomattack === superpunch){
         return[superpunch,30]
      }
      else if(randomattack ===headkick ){
         return[headkick,40]

      }
      else if( randomattack === leaps){
         return[leaps,50]
      }
      else{
         return[cover,0]
      }
}
function playeraction(count){
   var fight=get()
   if (count % 2){
      player1health=player1health - fight[1]
      console.log(player1,"Hit To",player2,"is",fight[0],"&",player1,"Remaning Health Is",player1health)
   }
   else{
      player2health=player2health - fight[1]
      console.log(player2,"Hit To",player1,"is",fight[0],"&",player2,"Remaning Health Is",player2health,)
   }
}
function reslut (){
   if(player1health <= 0){
      console.log(player2,"is won")
      alert(player2+" "+"is won")
   }
    if(player2health<= 0){
      console.log(player1,"is Won")
      alert(player1+" "+"is Won")
   }
}
function handlefight(){
   count++
   playeraction(count)
   if(player1health <= 0 || player2health <= 0){
      clearInterval(randontime)
      reslut ()
}

}
randontime = setInterval(handlefight,1000)
// function player1(){
//    var moves=["punch","kick","superman punch"]
//    var random1=math.floor(Math.random()*3)
//    var hazir  = moves[random1]

// if(hazir === "punch"){
//    p1health=p1health-10;
//    console.log("you hit"+hazir)
//    console.log("Your remaining health ="+ " "+p1health)
// }
// else if(hazir === "kick"){
//    p1health=p1health-20;
//    console.log("you hit"+selectmove)
//    console.log("Your remaining health ="+ " "+p1health)
// }
// else if(hazir === "superman punch"){
//    p1health=p1health-30;
//    console.log("you hit"+selectmove)
//    console.log("Your remaining health ="+ " "+p1health)
// }
// }
// function player2(){
//    var moves=["punch","kick","superman punch"]
//    var random2=math.floor(Math.random()*3)
//    var selectmoves =moves[random2]

// if(selectmove === "punch"){
//    p2health=p2health-10;
//    console.log("player2 hit"+selectmoves)
//    console.log("player1 remaining health ="+ " "+p2health)
// }
// else if(selectmove === "kick"){
//    p2health=p2health-20;
//    console.log("player2 hit"+selectmoves)
//    console.log("player1 remaining health ="+ " "+p2health)
// }
// else if(selectmove === "superman punch"){
//    p2health=p2health-30;
//    console.log("player2 hit"+selectmoves)
//    console.log("player1 remaining health ="+ " "+p2health)
// }
// }
// var p1time=setInterval(p1time,5000)
// var p2time=setInterval(p2time,3000)
// }
// //    var con1 = prompt("Please select Heads OR Tails")
// // var gen = Math.random()*2
// // var spin = Math.floor(gen);
// // console.log(spin)
// // if (con1.toLowerCase() == "heads" || con1.toLowerCase() == "tails") { 
// //    if (spin = 0) {
// //       alert("You won")
// //       alert("You Hit first")
// //    }
// //    else if (spin = 1) {
// //       alert("You Lost")
// //       alert("Umair will hit first")

// //    }
// // }


// if (spin == 0) {
//    alert("You Hit A Kick To Umair")
//    var h1 = (h1 - Kick - Math.random()*20)
//    var h1 = Math.floor(h1)
//    console.log("Umair Remaining Health =" + h1)
//    alert("Umair Remaining Health Is =" + h1)
   
   
// }

// else if (spin == 1) {
//    alert("Umair Hit You A  Punch")
//    var h2 = (h2 - Punch - Math.random()*20)
//    var h2 = Math.floor(h2)
//    console.log("Remaining Health =" + h2)
//    alert("Arif Remaining Health Is = " + h2)
   
   
// }
// // console.log(h1 +"Umair  ki value")
// // console.log(h2 +"Arif ki value" )
// // setInterval(displayHello, 5000);

// // function displayHello() {
// // var gen5 = (gen2-Math.random()*20)
// // console.log("gen5"+ gen5)
// // var gen6 = (gen4-Math.random()*20)

// // console.log("gen6"+ gen6)
// // }
//       if(spin =="0"){
//          alert("Umair Will Hit A Super Punch")
//          var h2=h2 - SuperPunch - Math.random()*30
//          var h2=Math.floor(h2)
//          console.log("Arif Remaining Health Is ="+h2)
//       }
//       else if(spin =="1"){
//          alert("Arif Will Hit A Flying Kick  ")
//          var h1=h1- FlyingKick - Math.random()*30
//          var h1=Math.floor(h1)
//          console.log("Umair Remining Health Is ="+h1)
//       }
//     var interval=  setInterval(displayHello, 1000);

// function displayHello() {
// var gen5 = h1-Math.random()*70
// var umair =Math.floor(gen5)
// console.log(umair)
// var gen6 = h2-Math.random()*70
// var arif =Math.floor(gen6)
// console.log(arif)
// if(umair <=0){
//    alert("Game Over")
//    alert("Umair Hard Luck to You Lost The Match")
//    alert("Congratulation Arif Won The Match")
//    clearInterval(interval)
// }
// else if(arif <= 0){
//    alert("Game Over")
//    alert("Arif Better Luck to You Lost The Match")
//    alert("Congratulation Umair Won The Match")
//    clearInterval(interval)
// }
// }
//       // alert(spin= 1 +"Umair Will Hit A Super Punch")
//       // var gen5 = h2-Math.random()*50
//       // var gen6= Math.floor(gen5)
//       // console.log("Arif Remaining Health Is="+gen6)
//       // alert("Arif Remaining Health Is="+gen6)

//       //  alert(spin=0 +"Arif Will Hit A flying Kick To Umair")
//       //  var gen7 = h1-Math.random()*50
//       //  var gen8 =Math.floor(gen7)
//       //  console.log("Umair Remaining Health Is ="+gen7)
//       //  alert("Umair Remaining Health Is ="+gen7)
