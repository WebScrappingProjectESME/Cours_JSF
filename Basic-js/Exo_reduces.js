
result1 = ['aze','bob','alfred','Bobby','bobette'].reduce( (acc, v) => {(acc[v[0].toLowerCase()]) ? acc[v[0].toLowerCase()]++ : acc[v[0].toLowerCase()] = 1; return acc},{})

// result2 = [1,3,5].reduce( (acc, v, index,array) => {acc[index] = array[index]+2; return acc;},[])
result2 = [1,3,5].reduce( (acc, v) => [...acc, v+2],[])

console.log(result1)
console.log(result2)


