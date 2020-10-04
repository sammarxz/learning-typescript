// Simbolos comuns, com nomeclaturas comuns, mas podem ser qualquer coisa
// S = State
// T = Type 
// K = Key
// V = Value
// E = Element

/* 
  S (state) vai ser instanciado podendo receber um numero ou string, mas caso 
  não passe um tipo ele vai ser do tipo string.
*/

function useState<S extends number | string = string>() {
  let state: S;

  function getState(){
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState };
}

const newState = useState();

newState.setState(123);
console.log(newState.getState()); 

newState.setState("bla");
console.log(newState.getState());

// newState.setState(true); não pode
