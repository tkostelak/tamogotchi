import { syllableFinder } from '../src/haiku.js';
import { syllableChecker } from '../src/haiku.js';

describe ('syllableFinder', function() {

  it ('should return the number of syllables in a string', function() {
    let string = "hello man";
    let result = syllableFinder("hello man");
    expect(result).toEqual(3);
    expect(result).not.toEqual(4);
  });
});

//When testing our function, syllable finder initially returned 0 syllables for pie due to it containing a diphtong and a silent e.

describe ('syllableFinder', function() {

  it ('should return the number of syllables in a string', function() {
    let string = "pie die";
    let result = syllableFinder("pie die");
    expect(result).toEqual(2);
    expect(result).not.toEqual(0);
  });
});

//Eye ending up being a difficult edge case because we had to make y a vowel in our logic, which means that eye would be a word consisting only of vowels. We had to tweak our logic so that a vowel would be subtracted only if eye was at the end of the word, and not ending in r.
describe ('syllableFinder', function() {

  it ('should return the number of syllables in a string', function() {
    let string = "eyes eyesore conveyer";
    let result = syllableFinder("eyes eyesore conveyer");
    expect(result).toEqual(6);
    expect(result).not.toEqual(9);
  });
});

//Since these words are only 3 letters and have only one vowel which is a silent e, since these cases are exceptions we made a rule that if vowel count is equal to 0, add 1 to the vowel count.
describe ('syllableFinder', function() {

  it ('should return the number of syllables in a string', function() {
    let string = "the she";
    let result = syllableFinder("the she");
    expect(result).toEqual(2);
    expect(result).not.toEqual(0);
  });
});
