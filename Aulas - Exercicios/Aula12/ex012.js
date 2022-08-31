var agora = new Date()
var hora = agora.getHours()
console.log(`HORÁRIO = ${hora}`)
if (hora < 7) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}