const form = document.querySelector("form")
const resultado = document.querySelector("h3")
const formularioAgradecimento = document.getElementById("agradecimento-servico")
const formularioNormal = document.getElementById("formulario")
const titulo = document.getElementById("obrigado")
const button = document.querySelector("button")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const numero = form.inNum.value
    const email = form.inEmail.value
    const data = form.inData.value
    const servico = form.inService.value
    const modelo = form.inModelo.value

    resultado.innerText = `Olá ${nome}, muito obrigado por nos escolher!
    \n
    Vamos mandar uma mensagem de confirmação no número: ${numero}
    \n
    Mandaremos uma mensagem também no seu E-mail: ${email}
    \n
    Seu serviço foi agendado para o dia: ${data}
    \n
    Serviço escolhido: ${servico}
    \n
    Para o Veículo: ${modelo}`

    titulo.innerText = "OBRIGADO!"

    formularioAgradecimento.style.display = "flex"
})

form.addEventListener("submit", () => {
    formularioNormal.style.display = "none"
})

button.addEventListener("click", () => { location.reload() })