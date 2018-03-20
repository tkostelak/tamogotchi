import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { tamagotchi } from '../src/tamagotchi.js';

$(document).ready(function() {

tamagotchi.timePasses();
let statsCountdown = setInterval(function() {
// $("#sleepText").text(tamagotchi.restLevel);
// $("#hungerText").text(tamagotchi.foodLevel);
// $("#funText").text(tamagotchi.funLevel);

$("#sleepyBar").css("width", tamagotchi.restLevel + "%");
$("#hungerBar").css("width", tamagotchi.foodLevel + "%");
$("#funBar").css("width", tamagotchi.funLevel + "%");

},1000);

$("#sleepButton").click(function(){
  tamagotchi.rest();
  $("#sleepyBar").css("width", tamagotchi.restLevel + "%");
});

$("#feedButton").click(function(){
  tamagotchi.feed();
  $("#hungerBar").css("width", tamagotchi.foodLevel + "%");
});

$("#playButton").click(function(){
  tamagotchi.play();
  $("#funBar").css("width", tamagotchi.funLevel + "%");
});



});
