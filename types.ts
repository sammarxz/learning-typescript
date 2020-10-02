// Booleans
let isOpen: boolean;
isOpen = true;

// String
let message: string;
message = 'Alguma coisa';

// number
let num1: number;
num1 = 2;

// Array
let items: object[];
items = [
  {
    name: 'Samuel',
    age: 24
  },
  {
    name: 'Bruna',
    age: 21
  }
];

let total: Array<number>;
total = [1,2,3];

// tuple
let title: [number, string];
title = [1, 'Sou uma tupla'];

// enum - serve para criar um conjunto de chave e valor
enum Colors {
  white = '#fff',
  black = '#000'
}
Colors.white;

// any (não é legal)
let qualquerCoisa: any
qualquerCoisa = 'String';
qualquerCoisa = true;
qualquerCoisa = 2;

// void ou vazio
function sayHi():void {
  console.log('Não retorno nada')
}

// null || undefined
type Bla = string | undefined;

// never, nunca vai retornar, basicamente usado quando vai exibir um erro na tela
function error(): never {
  throw new Error('error');
}

// object
let cart: object;
cart = {
  key: 'item'
}

// type inference
let message2 = 'mensagem definida'
// message2 = 2; da erro, pois o typescript define a variavel sendo do tipo string
message2 = 'Outra mensagem'; // OK
