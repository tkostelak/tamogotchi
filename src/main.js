import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { tamagotchi } from '../src/tamagotchi.js';

$(document).ready(function() {
  $("#hungerBarLow").hide();
  $("#sleepyBarLow").hide();
  $("#funBarLow").hide();

  tamagotchi.timePasses();
  let statsCountdown = setInterval(function() {

    if(tamagotchi.lowFood() === true) {
      $("#hungerBarLow").show();
      $("#hungerBarNormal").hide();
    } else {
      $("#hungerBarLow").hide();
      $("#hungerBarNormal").show();
    }
    if(tamagotchi.lowRest() === true) {
      $("#sleepyBarLow").show();
      $("#sleepyBarNormal").hide();
    } else {
      $("#sleepyBarLow").hide();
      $("#sleepyBarNormal").show();
    }
    if(tamagotchi.lowFun() === true) {
      $("#funBarLow").show();
      $("#funBarNormal").hide();
    } else {
      $("#funBarLow").hide();
      $("#funBarNormal").show();
    }

    $("#sleepyBarNormal").css("width", tamagotchi.restLevel + "%");
    $("#hungerBarNormal").css("width", tamagotchi.foodLevel + "%");
    $("#funBarNormal").css("width", tamagotchi.funLevel + "%");

    $("#sleepyBarLow").css("width", tamagotchi.restLevel + "%");
    $("#hungerBarLow").css("width", tamagotchi.foodLevel + "%");
    $("#funBarLow").css("width", tamagotchi.funLevel + "%");

    if(tamagotchi.lowFood() === true) {
      $("#hungerBarLow").show();
      $("#hungerBarNormal").hide();
    } else {
      $("#hungerBarLow").hide();
      $("#hungerBarNormal").show();
    }

    if(tamagotchi.diedOfStarvation() === true) {
      $("#lilHomiePic").hide();
      $("#ripGrave").show();
      $("#lilHomieText").css("text-decoration", "line-through");
      $("#ripStarvingText").text("Lil' Homie died of starvation");
      clearInterval(statsCountdown);
    }

    if(tamagotchi.diedOfSleepDep() === true) {
      $("#lilHomiePic").hide();
      $("#ripGrave").show();
      $("#lilHomieText").css("text-decoration", "line-through");
      $("#ripSleepDepText").text("Lil' Homie died of Sleep Deprivation");
      clearInterval(statsCountdown);
    }

    if(tamagotchi.diedOfBoredom() === true) {
      $("#lilHomiePic").hide();
      $("#ripGrave").show();
      $("#lilHomieText").css("text-decoration", "line-through");
      $("#ripBoredomText").text("Lil' Homie died of Boredom");
      clearInterval(statsCountdown);
    }

  },1000);

  $("#sleepButton").click(function(){
    tamagotchi.rest();
    $("#sleepyBar").css("width", tamagotchi.restLevel + "%");
  });


  $("#feedButton").click(function(){
    tamagotchi.feed();
    if(tamagotchi.foodLevel <= 30) $("#hungerBarLow").css("width",         tamagotchi.foodLevel + "%");
    else $("#hungerBar").css("width", tamagotchi.foodLevel + "%");
  });


  $("#playButton").click(function(){
    tamagotchi.play();
    $("#funBar").css("width", tamagotchi.funLevel + "%");
  });

  $("#ripStarvingText").click(function(){
    $("#ripStarvingText").animate({fontSize: '3em'}, "slow");
  });

  $("#ripSleepDepText").click(function(){
    $("#ripSleepDepText").animate({fontSize: '3em'}, "slow");
  });

  $("#ripBoredomText").click(function(){
    $("#ripBoredomText").animate({fontSize: '3em'}, "slow");
  });
});
