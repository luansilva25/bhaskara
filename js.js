

function calcular(){
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const c = document.getElementById('c').value
    
    
    const delta= (b**2)-(4*a*c)
   
    if(delta > 0){
    const raiz= Math.sqrt(delta)
    const xI= (-b + raiz) / (2*a)
    const XII= (-b - raiz) / (2*a)
    document.getElementById('resul').innerHTML = `<p style = 'color:white'> xI:${xI} e xII:${XII}</p>`
    }else{
        document.getElementById('resul').innerHTML = 'resultado deu negativo por favor insira outros numeros'
    }
    
    
}
function reset(){
    document.getElementById('a').value=''
    document.getElementById('b').value=''
    document.getElementById('c').value=''
    document.getElementById('resul').innerHTML = ''
}


