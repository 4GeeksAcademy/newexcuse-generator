/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let who = ["The dog", "My grandma", "Their birds", "My computer"];
  let action = ["ate", "stole", "stomped", "broke"];
  let what = ["my homework", "the planet", "the house"];
  let when = [
    "after the class",
    "right on time",
    "when I was sleeping",
    "during my break",
    "while I was on the phone"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return `${who[whoIndx]} ${action[actionIndx]} ${what[whatIndx]} ${when[whenIndx]}`;
};
