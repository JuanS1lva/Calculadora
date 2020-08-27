let num1='';
let num2='';
let operacion='';
let resultado=0;
let realizado=false;
let punto=false;
let teclado = document.getElementById("teclado")
teclado.addEventListener("keydown",()=>{
    
})
let calculadora = document.getElementById("caja")
caja.addEventListener("click",(e)=>{
        if(Number.isNaN(parseFloat(e.target.innerText))){
            const temp = e.target.innerText;
            if(e.target.innerText=='='){
                switch (operacion) {
                    case '+':
                        resultado=parseFloat(num1)+parseFloat(num2);
                        swal("Buen trabajo", num1+" + "+num2+" = " +resultado, "success");
                        break;
                    case '-':
                        resultado=parseFloat(num1)-parseFloat(num2);
                        swal("Buen trabajo", num1+" - "+num2+" =" +resultado, "success");
                        break;
                    case 'x':
                        resultado=parseFloat(num1)*parseFloat(num2);
                        swal("Buen trabajo", num1+" * "+num2+" = " +resultado, "success");
                        break;
                    case '/':
                        resultado=parseFloat(num1)/parseFloat(num2);
                        if(Number.isNaN(resultado) || !Number.isFinite(resultado)){
                            swal("Error!!", num1+" / "+num2+" = Math Error ("+resultado+")", "error");
                            resultado="Math Error"
                        }
                        else{
                            swal("Buen trabajo", num1+" / "+num2+" = " +resultado, "success");
                        }
                        break;
                    default:
                        break;
                }
                operacion=''
                teclado.innerHTML=resultado;
                if(resultado=="Math Error"){
                    num1=''
                }
                else{
                    num1=String(resultado);
                }
                num2='';
                realizado=true;
            }
            else if(e.target.innerText=='AC'){
                teclado.value = '0'
                num1='';
                num2='';
            }
            else if(e.target.innerText=='.'){
                if(!punto){
                    if(operacion==''){
                        teclado.innerHTML = num1+e.target.innerText;
                        num1=num1+e.target.innerText;
                        punto=true;
                    }
                    else{
                        teclado.innerHTML = num2+e.target.innerText;
                        num2=num2+e.target.innerText;
                        punto=true;
                    }
                }
            }
            else{
                operacion= temp;
                realizado=false;
                punto=false;
            }
        }
        else{
            if(!realizado){
                if(operacion==''){
                    const temp = e.target.innerText;
                    teclado.innerHTML = num1+e.target.innerText;
                    num1=num1+e.target.innerText;
                }
                else{
                    const temp = e.target.innerText;
                    teclado.innerHTML = num2+e.target.innerText;
                    num2=num2+e.target.innerText;
                }
            }
            else{
                if(operacion==''){
                    const temp = e.target.innerText;
                    teclado.innerHTML = e.target.innerText;
                    num1=e.target.innerText;
                    realizado=false;
                }
            }
        }
})
/*

let lista =document.getElementById("lista")
let agregar =document.getElementById("agregar")
agregar.addEventListener('click',()=>{
    let texto = document.getElementById("listaAgregar").value;
    let etiqueta = document.createElement("li");
    etiqueta.textContent=texto;
    lista.appendChild(etiqueta)
})
-----


function cajaTexto(){
    let name=prompt("Tu nombre");
    document.write("<h1> Tu nombre es: "+ name +"</h1")
}

----

let cuadro=document.getElementById("box");
cuadro.addEventListener("mouseover",()=>{
    cuadro.classList.replace("box","box2")
})
cuadro.addEventListener("mouseleave",()=>{
    cuadro.classList.replace("box2","box")
})
cuadro.addEventListener("mousemove",()=>{
    console.log("Muevoooooo")
}) 

-----

    let teclado = document.getElementById("teclado")
teclado.addEventListener("keydown",()=>{
    console.log("Teclaaaa")
})
teclado.addEventListener("keyup",(e)=>{
    console.log(e.key)
    if(e.key == "w"){
        console.log("Arriba")
    }
})

*/