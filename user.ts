// accountInfo
// charInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string; // com o ponto de interrogação ele passa a virar opcional
}

const account: AccountInfo = {
  id: 1,
  name: 'Samuel',
  email: 'sammarxz@protonmail.com'
};

type CharInfo = {
  nickname: string,
  level: number
};

const char: CharInfo = {
  nickname: 'sammarxz',
  level: 200
};

// Intersection - junta os dois types
type PlayerInfo = AccountInfo & CharInfo; // & = union

const myUser: PlayerInfo = {
  id: 1,
  name: 'Samuel',
  nickname: 'sammarxz',
  email: 'sammarxz@protonmail.com',
  level: 100
}