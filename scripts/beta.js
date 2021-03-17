function opcoes(){
    var horas = document.getElementById('hr')
    horas.innerHTML = '<h1>Oi</h1>'
    horas.innerText = 'oi'
}

function limparBarra(){
    var barra = document.getElementById('inptxt')
    barra.value = ''
}

function corrigirBarra(){
    var barra = document.getElementById('inptxt')

    if (barra.value == 'nome da atividade'){
    }else if (barra.value != ''){
    }else{barra.value = 'nome da atividade'}
}