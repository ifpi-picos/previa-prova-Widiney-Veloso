export function maiorNumero(lista) {
    if (lista.length <= 0 || typeof lista == "string" ){
        return null
    } else{
        let maiorNumero = Math.max(...lista)
        return maiorNumero
    }    
}

export function verificarParOuImpar(numero) {
    let resultado = numero % 2
    if (typeof numero == "string") {
        return null
    }else if (resultado > 0) {
        return "Ímpar"
    } else if (resultado === 0) {
        return "Par"
    }
}

export function contarCaracter(nome){
    let quantidadeDeA = 0
    let contador = 0
    while (contador < nome.length){
        if (nome[contador] == "a" || nome[contador] == "A"){
            quantidadeDeA ++
        } 
        contador++
    }

    return quantidadeDeA > 0 ? quantidadeDeA : null
}

export function atualizarPropriedade(objeto, chave, valorNovo){
    if(typeof objeto == "object" ){
        if(chave in objeto){
            objeto[chave] = valorNovo
            return objeto
        } else {
            return null
        }
    }
}