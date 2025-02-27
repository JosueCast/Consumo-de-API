// metodo Get()
function Get() {
    const API_URL = "https://localhost:7080/api/Producto/LeerProductos"; // URL del backend

    fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la respuesta: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        

      //agregando los datos a mi table en boostrap innerhtml
      const tablaBody = document.getElementById("tabla-body");
        console.log(data);
      data.forEach(producto => {
          const fila = `
              <tr>
                  <td>${producto.id}</td>
                  <td>${producto.nombre}</td>
                  <td>${producto.precio}</td>
                  <td>${producto.stock}</td>
                  <td><a href="#" onclick="editarProducto(${producto.id})"  class="btn btn-warning btn-sm me-2">✏ Editar</a>
                    <a href="#" class="btn btn-danger btn-sm" onclick="eliminarUsuario(${producto.id})">🗑 Eliminar</a></td>
              </tr>
          `;
          tablaBody.innerHTML += fila;
      });
  


    })
    .catch(error => console.error("Error obteniendo los datos:", error));
}

//Metodo GetById()
// url del backend: https://localhost:7080/api/Producto/ObtenerPorId/2

function GetById(Id){
    let id = Id;

fetch(`https://localhost:7080/api/Producto/ObtenerPorId/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
    .then(response => response.json())
    .then(data => {
        document.getElementById('nombre').value = data.nombre;
        document.getElementById('precio').value = data.precio;
        document.getElementById('stock').value = data.stock;
        document.getElementById('id').value = data.id;

    })
    .catch(error => console.error('Error:', error));
}
//Metodo SaveProducto
//url del backend: https://localhost:7080/api/Producto/InsertarProducto
function SaveProduct(array){
    //buscamo la url
    fetch("https://localhost:7080/api/Producto/InsertarProducto", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(array),
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Respuesta del servidor:', responseData);
        Swal.fire({
            title: "Agregado con exito!",
            icon: "success",
            draggable: true,
            timer: 1500,
            willClose: () => {
              // Recargar la página después de que el mensaje de éxito desaparezca
              window.location.reload();
          }
          });
        // Aquí puedes cerrar el modal o realizar otras acciones.
        closeModal();
        // Opcional: Actualiza la tabla si es necesario
        
    })
    .catch(error => {
        console.error('Error al agregar el producto:', error);
    });
    }

//Metodo UpdateProducto
//url del backend: https://localhost:7080/api/Producto/EditarProducto/{id}
function UpdateProducto(array){
    bigdata = array
    
    //buscamo la url
    fetch(`https://localhost:7080/api/Producto/EditarProducto/${bigdata.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bigdata),
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Respuesta del servidor:', responseData);
        Swal.fire({
            title: "Actualizado con exito!",
            icon: "success",
            draggable: true,
            timer: 1500,
            willClose: () => {
              // Recargar la página después de que el mensaje de éxito desaparezca
              window.location.reload();
          }
          });
        // Aquí puedes cerrar el modal o realizar otras acciones.
        closeModal();
    })
    .catch(error => {
        console.error('Error al actualizar el producto:', error);
    });
}

//Metodo DeleteProducto
//url backend: https://localhost:7080/api/Producto/EliminarProducto/{id}
function DeleteProducto(id){
   // Mostrar el cuadro de confirmación
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Quieres eliminar este producto? Esta opción es irreversible.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, ¡bórralo!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí haces la llamada para eliminar el producto
      fetch(`https://localhost:7080/api/Producto/EliminarProducto/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(responseData => {
        console.log('Producto eliminado:', responseData);
        
        // Mostrar mensaje de éxito
        Swal.fire({
          title: "¡Borrado!",
          text: "El producto fue borrado satisfactoriamente.",
          icon: "success",
          timer: 1500,
          willClose: () => {
            // Recargar la página después de que el mensaje de éxito desaparezca
            window.location.reload();
        }
        });
      })
      
      .catch(error => {
        console.error('Error al eliminar el producto:', error);
      });
    }
  });
}


