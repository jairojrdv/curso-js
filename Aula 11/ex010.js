function verificaVelocidade() {
    var tnvel = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(tnvel.value)
    var multa = vel * 43.90
    res.innerHTML = `<p>Sua velocidade foi de ${vel} km/h</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você atingiu ${vel} km/h e está multado em R$ 43,90 para cada unidade de Km/h, resultando em R$ ${multa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} o valor da multa.</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança e nas normas de trânsito!</p>`

}