export let tamagotchi = {
  foodLevel: 100,
  restLevel: 100,
  funLevel: 100,

    timePasses: function(){
      setInterval(() => {
        this.foodLevel -= 5;
        this.funLevel -= 3;
        this.restLevel -= 4;
      }, 1000);
    },
    feed: function() {
      let that = this;
      if (that.foodLevel >= 100) that.foodLevel += 0;
      else that.foodLevel += 5
    },
    rest: function() {
      let that = this;
      if (that.restLevel >= 100) that.restLevel += 0;
      else that.restLevel += 5
    },
    play: function() {
      let that = this;
      if (that.funLevel >= 100) that.funLevel += 0;
      else that.funLevel += 5
    },
    lowRest : function() {
      let that = this;
      if (that.restLevel <= 30 ) return true;
      else return false;
    },
    lowFood : function() {
      let that = this;
      if (that.foodLevel <= 30 ) return true;
      else return false;
    },
    lowFun : function() {
      let that = this;
      if (that.funLevel <= 30 ) return true;
      else return false;
    },
    diedOfStarvation: function() {
      let that = this;
      if (that.foodLevel <= 0) return true;
      else return false;
    },
    diedOfSleepDep: function() {
      let that = this;
      if (that.restLevel <= 0) return true;
      else return false;
    },
    diedOfBoredom: function() {
      let that = this;
      if (that.funLevel <= 0) return true;
      else return false;
    },
  };
