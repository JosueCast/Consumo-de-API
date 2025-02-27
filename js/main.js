document.addEventListener("DOMContentLoaded", () => {
    Get();
});

function crearProducto(){

let button = document.getElementById('btnModalEditar');
let label = document.getElementById('labelModal');
button.style.display = "none"
label.textContent = "Agregar Productos";
openModal();
}

function insert() { 

//guardo los datos del formulario antes de enviar
const array = {
        
    nombre: document.getElementById('nombre').value,
    precio: document.getElementById('precio').value,
    stock: document.getElementById('stock').value,
};
SaveProduct(array);
}

function limpiarFormulario() {
        document.getElementById('nombre').value = "";
        document.getElementById('precio').value = "";
        document.getElementById('stock').value = "";
        document.getElementById('id').value = "";
}
    
function editarProducto(id){
    GetById(id);
    let button = document.getElementById('btnModalCrear');
    let label = document.getElementById('labelModal');
    button.style.display = "none"
    label.textContent = "Editar Productos";
    openModal();
}

function update(){
    //guardo los datos del formulario antes de enviar
    const array = {
        
        nombre: document.getElementById('nombre').value,
        precio: document.getElementById('precio').value,
        stock: document.getElementById('stock').value,
        id: document.getElementById('id').value
        
    };
    UpdateProducto(array);
}

function openModal(){
    let modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show(); 
}

function closeModall() {
    limpiarFormulario();
    
    // Habilitar los botones
    document.getElementById("btnModalEditar").style.display = "block";
    document.getElementById("btnModalCrear").style.display = "block";

    // Obtener la instancia existente del modal y cerrarlo correctamente
    let modalElement = document.getElementById("exampleModal");
    let modalInstance = bootstrap.Modal.getInstance(modalElement); 

    if (modalInstance) {
        modalInstance.hide(); // Cierra el modal si la instancia existe
    }
}

function eliminarUsuario(id){
    DeleteProducto(id);
}