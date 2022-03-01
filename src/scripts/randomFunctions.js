function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  function randomProperty (obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};
  
export { randomIntFromInterval, randomProperty}


