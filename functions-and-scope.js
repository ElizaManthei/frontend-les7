// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten
// te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen.
// Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub
// over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
console.log(grades);

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger).
// Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet,
// ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

    let numberOfCumLaude = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            numberOfCumLaude++;
        }
    }

console.log("\nOpdracht 1a: " + numberOfCumLaude);

    // ---- Verwachte uitkomst: 6

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades)
// en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken,
// zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude (grades) {
    let numberOfCumLaude = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            numberOfCumLaude++;
        }
    }
    return numberOfCumLaude;
}

console.log("\nOpdracht 1b: ");
console.log("cumLaude(grades): " + cumLaude(grades));
console.log("cumLaude([6, 4, 5]): " + cumLaude([6, 4, 5]));
console.log("cumLaude([8, 9, 4, 6, 10]): " + cumLaude([8, 9, 4, 6, 10]));

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is,
// maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

    let average;
    let sumGrades = 0;
    for (let i = 0; i < grades.length; i++){
        sumGrades = sumGrades + grades[i];
    }
average = sumGrades/grades.length;

console.log("\nOpdracht 2a: " + average);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades)
// en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken,
// zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function averageGrade(grades) {
    let average;
    let sumGrades = 0;
    for (let i = 0; i < grades.length; i++){
        sumGrades = sumGrades + grades[i];
    }
    average = sumGrades/grades.length;
    return average;
}
console.log("\nOpdracht 2b: ");
console.log("averageGrade(grades): " + averageGrade(grades));
console.log("averageGrade([6, 4, 5]): " + averageGrade([6, 4, 5]));
console.log("averageGrade([8, 9, 4, 6, 10]): " + averageGrade([8, 9, 4, 6, 10]));

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie
// netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function roundToTwoDecimal(number) {
    let numberOfDecimalPlaces = number.toString().length - (number.toString().indexOf(".") + 1);
    let numberToString = number.toString();
    let numberSeparated = numberToString.split(".");
    let numberBeforeTheDecimalPoint = numberSeparated[0];
    let theNumberAfterTheDecimalPoint = numberSeparated[1];
    let numberOfPlacesBeforeTheDecimalPoint = numberBeforeTheDecimalPoint.length;
    // theNumberAfterTheDecimalPoint.split("\t");
    let arrayAfterTheDecimalPoint = [];
    let arrayBeforeTheDecimalPoint = [];

   for (let i = 0; i < numberOfDecimalPlaces; i++) {
        arrayAfterTheDecimalPoint[i] = Number(theNumberAfterTheDecimalPoint[i]);
   }

   for (let i = 0; i < numberOfPlacesBeforeTheDecimalPoint; i++){
       arrayBeforeTheDecimalPoint[i] = Number(numberBeforeTheDecimalPoint[i]);
   }

   for (let i = numberOfDecimalPlaces - 1; i > 1; i-- ){
       if (arrayAfterTheDecimalPoint[i] > 4){
           arrayAfterTheDecimalPoint[i-1] = arrayAfterTheDecimalPoint[i-1] + 1;
           arrayAfterTheDecimalPoint[i] = 0;
           arrayAfterTheDecimalPoint.pop();
       }
   }

   if(arrayAfterTheDecimalPoint[1] === 10){
       arrayAfterTheDecimalPoint[1] = 0;
       arrayAfterTheDecimalPoint[0] = arrayAfterTheDecimalPoint[0] + 1;
   }

   if (arrayAfterTheDecimalPoint[0] === 10) {
       arrayBeforeTheDecimalPoint[arrayBeforeTheDecimalPoint.length - 1] = arrayBeforeTheDecimalPoint[arrayBeforeTheDecimalPoint.length - 1] + 1;
       for (let i = numberOfPlacesBeforeTheDecimalPoint - 1; i > 0; i--) {
           if (arrayBeforeTheDecimalPoint[i] === 10) {
               arrayBeforeTheDecimalPoint[i - 1] = arrayBeforeTheDecimalPoint[i - 1] + 1;
               arrayBeforeTheDecimalPoint[i] = 0;
           }
       }
        arrayAfterTheDecimalPoint[0] = 0;
       }
   arrayAfterTheDecimalPoint[2] = ".";

    let resultString  = arrayBeforeTheDecimalPoint[0].toString();
   for (let i = 1; i < arrayBeforeTheDecimalPoint.length ; i++) {
       resultString = resultString + arrayBeforeTheDecimalPoint[i].toString();
   }
   resultString = resultString + arrayAfterTheDecimalPoint[2] + arrayAfterTheDecimalPoint[0].toString() + arrayAfterTheDecimalPoint[1].toString();
   let result = Number(resultString);
   return(result);
}

let k =  57.4446;
console.log("\nOpdracht 2c: ");
console.log("1 " + Math.round(k*100)/100);
console.log("2 " + (k).toFixed(2));
console.log("3 " + roundToTwoDecimal(k));
console.log("Average: " + roundToTwoDecimal(average));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is.
// Je mag hier geen bestaande methoden voor gebruiken.
// Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet,
// ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

let hGrade = grades[0];
for (let i = 1; i < grades.length; i++ ){
    if(grades[i] > hGrade) {
        hGrade = grades[i];
    }
}
console.log("\nOpdracht 3a: " + hGrade);
// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades)
// en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken,
// zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade(grades) {
    let hGrade;
    hGrade = grades[0];
    for (let i = 1; i < grades.length; i++ ) {
        if (grades[i] > hGrade) {
            hGrade = grades[i];
        }
    }
    return hGrade;
}

console.log("\nOpdracht 3b: ");
console.log("highestGrade(grades): " + highestGrade(grades));
console.log("highestGrade([6, 4, 5]): " + highestGrade([6, 4, 5]));
console.log("highestGrade([8, 9, 4, 6, 10]): " + highestGrade([8, 9, 4, 6, 10]));

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
