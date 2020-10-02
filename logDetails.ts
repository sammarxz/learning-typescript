// type alias
// como se repete a estrutura de Uid, podemos criar um tipo especifico para ele
// e evitar repetição de código

type Uid = number | string;

function logDetails(uid: Uid, item:string) {
  console.log(`A product with ${uid} has a title ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid}, has a name as ${user}`)
}

logDetails(2, 'Algum título');
logDetails('2', 'Algum título');

logInfo(12, 'Sam');
logInfo('12', 'Sam');

type Os = 'Windows' | 'Linux' | 'Mac OS';

function getOs(plataform: Os) {
  console.log(plataform);
}

getOs('Mac OS'); // Ok
getOs('Solaris'); // Not Ok