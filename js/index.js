alert ('Hello Java Script!');

let userName= prompt('Enter your name');
let greetings='Hello';
alert(greetings+userName);

let userAge= parseFloat(prompt('How old are you?'));
alert (userAge);
let nextAge=add(userAge,1);
alert('Наступного року вам буде' +nextAge);

if (userAge>=18) {// < > <= >= === &&
 alert('Повнолітні')

} else {
  alert ('No')
}

function add(a,b) {
    let rezult = a+b;
    return rezult;
}


