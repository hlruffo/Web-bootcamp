names = ["Angela", "Ben", "Jenny", "Michael", "Chloe", "Hugh"];

function whoBuysLunch(names) {
    let numberOfPeople  = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople) ; 
    let randomPerson = names[randomPersonPosition];

    return randomPerson + " buys lunch today !";
    
}

 
