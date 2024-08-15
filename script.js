const textArea = document.querySelector(".inicial_texto_ingresado");
const mensaje = document.querySelector(".texto_encriptado");
const contenido = document.querySelector(".encriptado_contenedor");
const btnCopiar = document.querySelector(".boton_copiar")

function limitarTexto(e){
    let texto = e.target.value;
    texto = texto.replace(/[^a-z\s]/g, ''); // Permite solo letras minúsculas y espacios
    e.target.value = texto;
}

textArea.addEventListener("input", limitarTexto);

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    contenido.style.display = 'none';
    btnCopiar.style.visibility = "inherit";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    contenido.style.display = 'none';
    btnCopiar.style.visibility = "inherit";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesecriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = mensaje;
    copiar.select();
    document.execCommand("copy");
    limpiarText();
    btnCopiar.style.visibility = 'hidden'
    contenido.style.display = 'block';
})

function limpiarText(){
    document.querySelector(".texto_encriptado").value = '';
}

function condicionesIniciales(){
    document.querySelector(".encriptado_contenedor").value = 'contenido';
}