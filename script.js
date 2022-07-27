var main = function (input) {
  myOutputValue = "";
  for (var counter = 0; counter < input; counter += 1) {
    for (var innercounter = 0; innercounter < 2 * input; innercounter += 1) {
      myOutputValue = myOutputValue + "hello ";
    }
    myOutputValue = myOutputValue + "<br> ";
  }
  return myOutputValue;
};
