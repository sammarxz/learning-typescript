/* 
  São um conjunto de dados que usamos pra descrever a estrutura de um Objeto.
  Então diferente do type alias que a gente podia descrever um conjunto pequeno
  de primitivos, a Interface trabalha exclusivamente para objetos. Então
  utilizamos ela para descrever objetos enquanto o type alias funciona para
  objetos também e para tipos primitivos;
*/

interface Game {
  title: string;
  description: string;
  readonly genre: string;
  plataform?: string[];
  getSimilars?: (title: string) => void
}

const tlou: Game = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  genre: 'Action',
  plataform: ['ps4', 'ps3', 'pc'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  }
}

// tlou.genre = 'Adventure'; error pq é readonly

if (tlou.getSimilars) { tlou.getSimilars(tlou.title) };

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}