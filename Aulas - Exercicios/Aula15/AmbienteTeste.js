/*let num = [5,8,4]

num[3] = 6
num.push(7)
console.log(num.length)
num.sort()

console.log(num)*/

//////////////////////////////////////////////////////////


let num = [5, 8, 2, 9, 3]
/*
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Posição 0 -> Valor ${num[0]}`)
*/

//////////////////////////////////////////////////////////
/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`Posição: ${pos} Valor: ${num[pos]}`)
}

for (let pos in num) {
    console.log(num[pos])
}
*/
//////////////////////////////////////////////////////////

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Valor não foi encontrado!')
} else {
    console.log(`Posição: ${pos} Valor: ${num[pos]}`)
}