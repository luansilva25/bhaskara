

function calcular(){
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const c = document.getElementById('c').value

    
    const delta= (b**2)-(4*a*c)
    const raiz= Math.sqrt(delta)
    const xI= -(b)+ raiz / 2*a
    const XII= (-(b) - raiz) / 2*a
    if(delta > 0){}
    alert(`${xI} e ${XII}`)
    
}
function reset(){
    document.getElementById('a').value=''
    document.getElementById('b').value=''
    document.getElementById('c').value=''
}


