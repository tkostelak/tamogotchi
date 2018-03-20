export let tamagotchi = {
  foodLevel: 100,
  restLevel: 100,
  funLevel: 100,

    setHungerLevel: function(){
      const hungerInterval = setInterval(() => {
        this.foodLevel--;
        if (this.foodLevel === 0) {
          clearInterval(hungerInterval);
          return "Your Tamagotchi died of starvation!";
        }
      }, 1000);
    },
    setTiredLevel: function(){
      const tiredInterval = setInterval(() => {
        this.tiredLevel--;
        if (this.tiredLevel === 0) {
          clearInterval(tiredInterval);
          return "Your Tamagotchi died of sleep deprivation!";
        }
      }, 1000);
    },
    setEnjoymentLevel: function(){
      const enjoymentInterval = setInterval(() => {
        this.enjoymentLevel--;
        if (this.enjoymentLevel === 0) {
          clearInterval(enjoymentInterval);
          return "Your Tamagotchi died of boredom!";
        }
      }, 1000);
    },
    timePasses: function(){
      setInterval(() => {
        this.foodLevel--;
        this.funLevel--;
        this.restLevel--;
      }, 1000);
    },
    feed: function() {
      let that = this;
      that.foodLevel += 10
    },
    rest: function() {
      let that = this;
      that.restLevel += 10
    },
    play: function() {
      let that = this;
      that.funLevel += 10
    },
  };
