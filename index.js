const list = [1,12,15,72,108,299,2,4,1,1,2,4,2]

// Uma função que devolve os valores que são maiores que a média
function MaiorMedia(listValues){
    const sim = listValues.reduce((total, current) => total + current,0)/ listValues.length
    return listValues.filter((f) => f > sim)
}

MaiorMedia(list)

// Uma função que devolva o menor valor da lista
function MenorValor(listValue){
    return Math.min(...listValue) 
}

MenorValor(list)

//Uma função que devolva o valor da soma dos itens da lista
function ValorSomaItens(listValues){
    return listValues.reduce((total, current) => total + current,0)
} 

//Uma função que devolva todos os valores que são menores que 20
function MenorQue20(listValues){
    return listValues.filter((f) => f < 20)
}

//Uma função que vai devolver o primeiro e o último valor da lista
function FirstLast(listValues){
    const first = listValues.shift()
    const last = listValues.pop()
    return [first, last]
}

FirstLast(list)