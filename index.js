function theBeatlesPlay(musicians, instruments) {
  let arr = []
  for (let i = 0, l = musicians.length; i < l; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
};

function johnLennonFacts(facts){
  let shout = []
  let i = 0;
  while(i < facts.length){
    shout.push(`${facts[i]}!!!`)
    i++
  }
  return shout;
};

function iLoveTheBeatles(num){
  let array = []
  do {
    array.push(`I love the Beatles!`)
    num++
  } while (num < 15)
  return array
};