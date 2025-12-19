const notas = document.querySelectorAll('.resultado')
const estado = document.querySelectorAll('.estado')

estado.forEach(e=>{
    if(e.innerText === 'inscritos'){
        e.style.color = 'orange'
    } else if(e.innerText === 'finalizado incorrectam.'){
        e.style.color ='red'
    } else if(e.innerText === 'finalizado con éxito'){
        e.style.color = 'black'
    } else{
        e.style.color = '#004700'
    }
})
notas.forEach(nota => {
    const notaFloat = parseFloat(nota.innerText)
    
    if(notaFloat <= 60.0){
        nota.style.color ='red';
    } 

    if(nota.innerText === 'Pendiente'){
        nota.style.color = 'orange';
    }

})