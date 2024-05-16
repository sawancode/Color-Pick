const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "red"
      break;
    case "tarus":
      body.style.backgroundColor = "green"
      break;
    case "gamini":
      body.style.backgroundColor = "blue"
      break;
    case "cancer":
      body.style.backgroundColor = "black"
      break;
    case "leo":
      body.style.backgroundColor = "purple"
      break;
    case "virgo":
      body.style.backgroundColor = "pink"
      break;
    case "libra":
      body.style.backgroundColor = "crimson"
      break;
    case "scorpio":
      body.style.backgroundColor = "yellow"
      break; 
    case "sgittarius":
      body.style.backgroundColor = "orange"
      break;
    case "aquarius":
      body.style.backgroundColor = "aqua"
      break;
    case "capricorn":
      body.style.backgroundColor = "khaki"
      break;
    case "pisces":
      body.style.backgroundColor = "indigo"
      break;
      
    default:
      break;
  }
};
