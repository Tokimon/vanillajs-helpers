"use strict";

exports.default = randomRGBColor;
function c() {
  return Math.round(Math.random() * 255);
}

/**
 * Generate a random RGB color
 * @return {Array} - Three random numbers from 0-255 as an array ([r, g, b])
 */
function randomRGBColor() {
  return [c(), c(), c()];
}