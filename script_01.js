"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgabe
// console.log("Hello");
// console.log(firstName);

/***** 02  Deklaration + Wertzuweisung 1 *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max";  // Wertzuweisung
// console.log(firstName);  // Ausgabe

// let familyName = "Mütze";  // Deklaration + Wertzuweisung
// console.log(familyName);  // Ausgabe
// console.log(firstName + " " + familyName);


/***** 03  Deklaration + Wertzuweisung 2 *******/

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");
// console.log(firstName + " " + familyName);


// JS ist eine untypisierte Sprache! | untyped

// let test;
// test = "Hello";
// test = 2;
// test = true;


// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);


/***** 03a  Konstanten *******/

// const test = "hallo";  // Variable mit Konstanten
// // test ="hi";  // KEINE neue Zuweisung zur LZ möglich --> Fehler
// console.log(test);


/***** 04 Beispiel ******/

// Deklaration
let ageJohn, ageMark; 
let birthYearJohn, birthYearMark;

let date = new Date();
let year = date.getFullYear();
console.log(year);

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

// Ausgabe
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearJohn: " + birthYearMark);

