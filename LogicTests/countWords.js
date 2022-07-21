//Problem:

// 2. Given a given input text, Code a program (in javascript or typescript) that
// displays the number of repetitions of each word.
// Sample text: "Hi how are things? How are you?Are you a developer? I
// am also a developer"

//Solved:

//regex to delete spaces and symbols of string.
const REGEX = new RegExp(/\W/g)
//dict for count letters

const text = "Hi how are things? How are you?Are you a developer? I am also a developer"

const countWords = (text) => {
    const amount = {}
    //here we transform text to lower case to ease count
    const textSplitted = text.toLocaleLowerCase().replace(REGEX, '').split('');
    textSplitted.map(word => {
        if(!amount[word]){
            amount[word] = 1;
        }else{
            amount[word]++
        }
    })
    console.log(amount);
   return amount;
}

countWords(text);




