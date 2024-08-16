const textArea = document.querySelector(".inicial_texto_ingresado");
const mensaje = document.querySelector(".texto_encriptado");
const contenido = document.querySelector(".encriptado_contenedor");
const btnCopiar = document.querySelector(".boton_copiar")
const contenidoSalida = document.querySelector(".encriptado")
const btnEncriptaar = document.querySelector(".boton-encriptar")
const btnDesencriptaar = document.querySelector(".boton-desencriptar")

function limitarTexto(e){
    let texto = e.target.value;
    if (/[A-Z]/.test(texto) || /[^a-z\s]/.test(texto)) {
        alert('Solo letras minúsculas y sin acentos');
    }
    texto = texto.replace(/[^a-z\s]/g, '');
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
    if (mediaQuery.matches) { 
        contenidoSalida.style.height = '120px';       
    } 
})

function modificarText() {

    contenidoSalida.style.height = 'auto';
    const scrollHeight = textArea.scrollHeight; 
    contenidoSalida.style.height = scrollHeight + 'px';
    if (scrollHeight > 400) {
        mensaje.style.height = '320px';
        contenidoSalida.style.height = '400px';
    }
}


function limpiarText(){
    document.querySelector(".texto_encriptado").value = '';
}

const mediaQuery = window.matchMedia('(max-width: 1140px)');

function checkMediaQuery() {
    if (mediaQuery.matches) {
        btnDesencriptaar.addEventListener('click', function() {
            modificarText();
         });
        btnEncriptaar.addEventListener('click', function() {
            modificarText();
         });
    } else {
        btnDesencriptaar.removeEventListener('click', function() {
            modificarText();
         });
        btnEncriptaar.removeEventListener('click', function() {
            modificarText();
         });
    }
}

checkMediaQuery();

mediaQuery.addEventListener('change', checkMediaQuery);