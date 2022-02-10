import bear from "./assets/rankerBackground/bear.svg";
import cat from "./assets/rankerBackground/cat.svg";
import elephant from "./assets/rankerBackground/elephant.svg";
import fox from "./assets/rankerBackground/fox.svg";
import girraffe from "./assets/rankerBackground/girraffe.svg";
import monkey from "./assets/rankerBackground/monkey.svg";
import rabbit from "./assets/rankerBackground/rabbit.svg";
import raindear from "./assets/rankerBackground/raindear.svg";

import profileBear from "./assets/newCardProfile/bear.svg";
import profileCat from "./assets/newCardProfile/cat.svg";
import profileElephant from "./assets/newCardProfile/elephant.svg";
import profileFox from "./assets/newCardProfile/fox.svg";
import profileMonkey from "./assets/newCardProfile/monkey.svg";
import profileRabbit from "./assets/newCardProfile/rabbit.svg";
import profileRaindear from "./assets/newCardProfile/raindear.svg";

const rankerBackgorundPhoto = [
  bear,
  cat,
  elephant,
  fox,
  girraffe,
  monkey,
  rabbit,
  raindear,
];

export function randomRankerBackgorundPhoto() {
  let randomNum = Math.floor(Math.random() * rankerBackgorundPhoto.length + 1);
  return rankerBackgorundPhoto[randomNum];
}

const newCardProfile = [
  profileBear,
  profileCat,
  profileElephant,
  profileFox,
  profileMonkey,
  profileRabbit,
  profileRaindear,
];

export function newCardProfileImg() {
  let randomNum = Math.floor(Math.random() * newCardProfile.length + 1);
  return newCardProfile[randomNum];
}
