export function syllableFinder(words) {
  console.log(words);
  let wordsLowerCase = words.toLowerCase();
  let wordArray = wordsLowerCase.split(" ");
  console.log(wordArray);
  let syllableCount = 0;

  wordArray.forEach(function(word) {

    let vowelCount = 0;
    let characterArray = word.split("");

    if(word.includes("ai"))
    {
      vowelCount -= 1;
    }
    if(word.includes("oy"))
    {
      vowelCount -= 1;
    }
    if(word.includes("ou"))
    {
      vowelCount -= 1;
    }
    if(word.includes("eu"))
    {
      vowelCount -= 1;
    }
    if(word.includes("ie"))
    {
      vowelCount -= 1;
    }
    if(word.includes("au"))
    {
      vowelCount -= 1;
    }
    if(word.includes("oo"))
    {
      vowelCount -= 1;
    }
    if(word.length == 3 && word.includes("ie"))
    {
      vowelCount += 1;
    }

    if(word.includes("eye") && (!("" + characterArray[characterArray.length-1] + characterArray[characterArray.length-2] + characterArray[characterArray.length-3] + "").includes("eye")) && characterArray[characterArray.length-1] !== "r")
    {
      vowelCount -= 1;
    }
    if(word.includes("ea"))
    {
      vowelCount -= 1;
    }
    if(word.includes("ay"))
    {
      vowelCount -= 1;
    }
    if(word.includes("ae"))
    {
      vowelCount -= 1;
    }
    if(word.includes("ey"))
    {
      vowelCount -= 1;
    }
    if(word.includes("uu"))
    {
      vowelCount -= 1;
    }
    if(characterArray[characterArray.length-1] == "e")
    {
      vowelCount -= 1;
    }
    if(characterArray[0] == "y")
    {
      vowelCount -= 1;
    }
    characterArray.forEach(function(character) {
      if (character.includes("a") || character.includes("e") || character.includes("i") || character.includes ("o") || character.includes("u") || character.includes("y"))
        {
          vowelCount += 1;
        }
      });
    if(vowelCount === 0) vowelCount += 1;
    if(word === ("")) vowelCount = 0;
    syllableCount += vowelCount;
  });
return syllableCount;
}

export function syllableChecker(input, syllableGoal) {
  let syllableNum = syllableFinder(input);
  if (syllableNum == syllableGoal)
  {
    return true;
  }
  else
  {
    return false;
  }
}
