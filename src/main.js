import { syllableFinder } from '../src/haiku.js';
import { syllableChecker } from '../src/haiku.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
    $("#haikuForm").submit(function(event) {
      event.preventDefault();

      var haikuLineOne = $("#haikuFirstLine").val();
      var haikuLineTwo = $("#haikuSecondLine").val();
      var haikuLineThree = $("#haikuThirdLine").val();

      let lineOneCount = syllableFinder(haikuLineOne);
      let lineTwoCount = syllableFinder(haikuLineTwo);
      let lineThreeCount = syllableFinder(haikuLineThree);

      if ((syllableChecker(haikuLineOne, 5) == true) && (syllableChecker(haikuLineTwo, 7) == true) && (syllableChecker(haikuLineThree, 5) == true))
      {
        $("#results").html('<div id="haikuContainer">' + '<h3>Congrats. It is a Haiku! ' + 'Line one contains ' + lineOneCount + ' syllables, line two contains ' + lineTwoCount + ' syllables, and line three contains ' + lineThreeCount + ' syllables.' + '</h3>' + '</div>');
      }
      else
      {
        $("#results").html('<h3>Good try, but no haiku. ' + 'Line one contains ' + lineOneCount + ' syllables, line two contains ' + lineTwoCount + ' syllables, and line three contains ' + lineThreeCount + ' syllables.' + '</h3>');
      }
  });
});
