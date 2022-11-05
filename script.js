"use strict";
let str1 = "Lorem ipsum dolor SPAM sit.";
let str2 = "Lorem ipsum dolor sit.";

function check(str, text) {
  let s = str.toLowerCase();
  let spam = text.toLowerCase();
  let result = s.includes(spam);
  return result;
}

check(str1, "spam");
