import { syllableFinder } from '../src/haiku.js';
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
      alert (lineOneCount);
      let lineTwoCount = syllableFinder(haikuLineTwo);
      alert (lineTwoCount);
      let lineThreeCount = syllableFinder(haikuLineThree);
      alert (lineThreeCount);
  });
});
