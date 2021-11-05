let string = ['l','k','m','k','y','m','m']
let query = ['k', 'l', 'm', 'p']
const results = []

function howManyTimes(str, qur){
  let results = []
  
  let count = 0

  for (let i = 0; i < str.length; i++){
    for (let k = 0; k < qur.length; k++){
      if(qur.charAt([k]) === str.charAt([i])){
        count++
      }
    }
    results.push(count)
  }
  return results
}

console.log(howManyTimes(string, query))


