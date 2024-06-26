let userInput: unknown;

userInput = 5;
userInput = 'rhie';

let gg:string;

if (typeof userInput === 'string') {
    console.log(userInput.toUpperCase());
    gg = userInput;
}

let userName: string = userInput as string
let userName2: string = <string>userInput