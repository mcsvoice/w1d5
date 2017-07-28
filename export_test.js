function farThings(value) {

  doThings(value);

  function doThings(test) {
    console.log(test);
  }

}

farThings("Murph!");

module.exports = {
  farThings
};