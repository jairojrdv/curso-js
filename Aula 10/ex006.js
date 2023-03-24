var area = window.document.getElementById('area')
        addEventListener('click', clicar)
        addEventListener('mouseenter', entrar)
        addEventListener('mouseout', sair)
        function clicar() {
            area.innerText = 'Pronto!'
            area.style.background = 'red'
            area.style.color = 'white'
        }
        function entrar() {
            area.innerText = 'entrou!'
        }
        function sair() {
            area.innerText = 'saiu!'
            area.style.background = 'rgb(0, 243, 0)'
            area.style.color = 'black'
        }