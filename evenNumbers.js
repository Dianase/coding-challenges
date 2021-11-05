
function even(arr){
  let evenNums = []
  for(let i=0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      evenNums.push(arr[i])
    }
  }
  return evenNums
}

even([1, 2, 4, 5, 7, 8])

