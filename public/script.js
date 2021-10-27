
let enviar = document.getElementById('enviar')
enviar.addEventListener('click', (e) => {
   e.preventDefault()
    let v1 = document.getElementById('valor1').value
    let v2 = document.getElementById('valor2').value

    var select = document.getElementById('operacoes')
	var value = select.options[select.selectedIndex].text

    function soma(){
        window.location.href=`/adicionar/${v1}/${v2}`
        
    }

    function sub(){
        window.location.href=`/subtrair/${v1}/${v2}`
        
    }

    function mult(){
        window.location.href=`/multiplicar/${v1}/${v2}`
        
    }

    function div(){
        window.location.href=`/dividir/${v1}/${v2}`
        
    }
	
    console.log(value)
    

    if(v1 != '' && v2 != ''){

        if(value =="Adição"){
            soma()

        }

        else if(value=="Subtração"){
             sub()

        }

        else if(value=="Multiplicação"){
             mult()

        }

        else if(value=="Divisão"){
            div()

        }
        

    }

      
    else{
        window.alert('Preencha todos os campos')
    }

    

}

) 
