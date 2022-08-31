function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        
        tab.innerHTML = ''
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}