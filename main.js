const form = document.getElementById('form')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
let formVal = false

function valNumb(numbComp) {
    numbComp = campoA.value < campoB.value
    return valNumb
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const msgSucess = `O valor de campo A: <b>${campoA.value}<b> é menor que o valor de campo B: <b>${campoB.value}<b>`

    formVal = valNumb(campoA, campoB)
    if (campoA.value < campoB.value) {
        const contMsgSucess = document.querySelector('.msg-sucess')
        contMsgSucess.innerHTML = msgSucess
        contMsgSucess.style.display = 'block'

        campoA.value = ''
        campoB.value = ''
    } else {
        campoA.style.border = '1px solid red'
        document.querySelector('.error-msg').style.display = 'block'

        campoB.style.border = '1px solid red'
        document.querySelector('.error-msg').style.display = 'block'
    }
})

form.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    formVal = valNumb(e.target.value)

    if (!formVal) {
        form.classList.add('error')
        document.querySelector('.error-msg').style.display = 'block'
    } else {
        form.classList.remove('error')
        campoA.style.border = '1px solid black'
        campoB.style.border = '1px solid black'
        document.querySelector('.error-msg').style.display = 'none'
    }
})