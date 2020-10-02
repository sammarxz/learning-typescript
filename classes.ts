class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age:number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string; // permite apenas nessa clase
  protected level: number; // permite em todas as classes extendidas

  constructor(name: string, age: number, nickname: string, level:number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }
  
  get getNickname() {
    return this.nickname;
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(newLevel: number) {
    this.level = newLevel
  }
}

const samm = new CharAccount('Samuel', 24, 'sammarxz', 100);
// samm.nickname = 'smarxz'; // dá erro, pq definimos como private
// console.log(samm.nickname); // dá erro tbm, pq só podemos chamar uma prop privada dentro da classe
console.log(samm.getNickname);
console.log(samm.getLevel);

samm.setLevel = 777;

console.log(samm.getLevel);