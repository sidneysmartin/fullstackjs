"use strict";
const songs = [
  { name: "Lucky you", singer: "Joyner", duration: 4.34 },
  { name: "Just like you", singer: "NF", duration: 3.23 },
  { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.13 },
  { name: "Cold Sholder", singer: "Central Cee", duration: 5.23 },
];

const [, , { singer:s }] = songs;

console.log(s);
