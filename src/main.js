import { getWordBySyllable} from '../src/haiku.js';
import { syllableFinder } from '../src/haiku.js';
import { syllableChecker } from '../src/haiku.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


$(document).ready(function() {

  let randomWords = require('random-words');

  $("#generateHaiku").click(function(event) {

    event.preventDefault();

    let firstWordLineOne = getWordBySyllable(2);
    let secondWordLineOne = getWordBySyllable(1);
    let thirdWordLineOne = getWordBySyllable(2);

    let firstWordLineTwo = getWordBySyllable(3);
    let secondWordLineTwo = getWordBySyllable(1);
    let thirdWordLineTwo = getWordBySyllable(3);

    let firstWordLineThree = getWordBySyllable(2);
    let secondWordLineThree = getWordBySyllable(2);
    let thirdWordLineThree = getWordBySyllable(1);

    $("#haikuContainer").hide();
    $("#resultHaikuContainer").show();
    $("#randomHaikuResult").html('<div id="backgroundImageRandomHaiku">' + '</div>' + '<div id="resultHaikuContainer">' +  firstWordLineOne + ' ' + secondWordLineOne + ' ' + thirdWordLineOne + '<br>' + firstWordLineTwo + ' '  + secondWordLineTwo + ' ' + thirdWordLineTwo + '<br>' + firstWordLineThree + ' ' + secondWordLineThree + ' ' + thirdWordLineThree + '</div>');
  });

  $("#haikuForm").submit(function(event) {
    event.preventDefault();

      var haikuLineOne = $("#haikuFirstLine").val();
      var haikuLineTwo = $("#haikuSecondLine").val();
      var haikuLineThree = $("#haikuThirdLine").val();

      let lineOneCount = syllableFinder(haikuLineOne);
      let lineTwoCount = syllableFinder(haikuLineTwo);
      let lineThreeCount = syllableFinder(haikuLineThree);

      if ((syllableChecker(haikuLineOne, 5) === true) && (syllableChecker(haikuLineTwo, 7) === true) && (syllableChecker(haikuLineThree, 5) === true))
      {

        $("#resultHaikuContainer").hide();
        $("#haikuContainer").show();
        $("#results").html('<div id="haikuContainer">' + 'Congrats. It is a Haiku! ' + '<hr>' + haikuLineOne + '<br>' + haikuLineTwo + '<br>' + haikuLineThree + '</div>');
      }
      else
      {
        $("#resultHaikuContainer").hide();
        $("#haikuContainer").hide();
        $("#results").html('<br>' + '<h3>Good try, but no haiku. ' + 'Line one contains ' + lineOneCount + ' syllables, line two contains ' + lineTwoCount + ' syllables, and line three contains ' + lineThreeCount + ' syllables.' + '</h3>');
      }
  });
});
