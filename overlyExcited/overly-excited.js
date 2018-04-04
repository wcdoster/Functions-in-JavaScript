// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let otherSentence = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function repeat(str, number) {
    let text = "";
    for (let i = 0; i < number; i++) {
        text += str;
    }
    return text;
}

const addExcitement = (theWordArray, char) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    let buildSentence = ""
    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if ((i+1)%3 === 0){
            let num = (i+1)/3;
            
            theWordArray[i]+= repeat(char, num);
        }
        buildMeUp += theWordArray[i];
        buildSentence += theWordArray[i];
        buildSentence += " ";
        buildMeUp += " ";
        buildMeUp += buildSentence;
        // Print buildMeUp to the console
    }
    console.log(buildMeUp);

}

// Invoke the function and pass in the array
addExcitement(sentence, '?');

addExcitement(otherSentence, ".")