
function verificaNacionalidade() {
    var txtpais = window.document.querySelector('input#txtpais')
    var res = window.document.querySelector('div#res')
    var pais = txtpais.value
    res.innerHTML = `<p>Que legal, muito bom saber que você é de ${pais}, estamos feliz em te ter aqui!</p>`
    if (pais === "Brasil") {
        res.innerHTML += `<p>Você é brasileiro(a)</p>`
    } else {
        res.innerHTML += `<p>Você é estrangeiro(a)</p>`
    }

}