// Your job is to write a function that accepts any band name as an argument.
//  The function will increment a global variable by one each time it is invoked,
//   and return that number, and the band name concatenated together.

let i = 0
bandList = []

function bandName (name) {
    i++
    let band = i + "." + name;
    bandList.push(band);
    console.log(band);
}

bandName('The Beatles');
bandName('The Rolling Stones');
bandName('Led Zeppelin');
