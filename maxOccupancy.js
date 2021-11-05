//outputs max occupancy that night
//Bonus: what hour does this occur (club opens at 7pm)




let incoming = [36, 44, 23, 39, 48, 56, 38, 14, 12, 0]

let outgoing = [12, 16, 21, 24, 18, 33, 94, 60, 10, 15]


function maxOcc(arr, arr1){
  let result = []
  let currentOccupancy = 0
  let maximum = 0;
  for (let i=0; i< arr.length; i++){
    currentOccupancy = currentOccupancy + arr[i] - arr1[i]
    result.push(currentOccupancy)
    maximum = Math.max(...result)
  }
  return maximum
}



console.log(maxOcc(incoming, outgoing))

