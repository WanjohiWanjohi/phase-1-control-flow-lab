function scuberGreetingForFeet(number) {
  if (number <= 400) {
    return 'This one is on me!';
  } else if (number > 2000 && number < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (number > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName) {
  if (cityName.toUpperCase() == 'NYC') {
    return "Ok, sounds good.";
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tipDescription) {
  if (tipDescription.toLowerCase() == "generous") {
    return "Thank you so much.";
  } else if (tipDescription.toLowerCase() == "not as generous") {
    return "Thank you.";
  }else{
    return "Bye.";
  }
}