//1115

let resultado = document.getElementById("resultado")

function acharQuadrante(){
    let numeroX = Number(document.getElementById("inputX").value)
    let numeroY = Number(document.getElementById("inputY").value)

    if (numeroX>0 && numeroY>0) {
        resultado.innerHTML = "primeiro"

    }else if (numeroX<0 && numeroY>0) {
        resultado.innerHTML = "segundo"

    }else if (numeroX<0 && numeroY<0) {
        resultado.innerHTML = "terceiro"

    }else if (numeroX>0 && numeroY<0) {
        resultado.innerHTML = "quarto"   

    }else{
        resultado.innerHTML = "valores inválidos"

    }
    
}

