# 📌 Proyecto: Consumo de API

## 📖 Descripción
Este proyecto consiste en el consumo de una API REST utilizando JavaScript y Fetch API. Permite realizar operaciones como listar, agregar, editar y eliminar productos a través de una interfaz web.

## 🚀 Tecnologías Utilizadas
- **HTML5**
- **CSS3** (Bootstrap para el diseño)
- **JavaScript (ES6+)**
- **Fetch API** (Para las peticiones HTTP)
- **Bootstrap 5** (Para los modales y estilos)

## 🎯 Características
✅ Listar productos desde la API
✅ Agregar nuevos productos
✅ Editar productos existentes
✅ Eliminar productos
✅ Uso de modales para las acciones
✅ Manejo de errores y validaciones

## 📌 Instalación y Configuración
1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Abrir el proyecto en un navegador**
   Puedes abrir el archivo `index.html` directamente o usar un servidor local como Live Server en VS Code.

## 🔗 Endpoints de la API
Asegúrate de que la API esté funcionando y que los endpoints sean los correctos.

- **Obtener todos los productos**
  ```sh
  GET https://api.ejemplo.com/productos
  ```
- **Obtener un producto por ID**
  ```sh
  GET https://api.ejemplo.com/productos/{id}
  ```
- **Agregar un nuevo producto**
  ```sh
  POST https://api.ejemplo.com/productos
  Content-Type: application/json
  {
    "nombre": "Producto 1",
    "precio": 100,
    "stock": 20
  }
  ```
- **Actualizar un producto**
  ```sh
  PUT https://api.ejemplo.com/productos/{id}
  Content-Type: application/json
  {
    "nombre": "Producto actualizado",
    "precio": 150,
    "stock": 30
  }
  ```
- **Eliminar un producto**
  ```sh
  DELETE https://api.ejemplo.com/productos/{id}
  ```

## 🛠 Uso del Proyecto
1. Abre la página web.
2. Se mostrará la lista de productos.
3. Puedes agregar un producto haciendo clic en "Agregar Producto".
4. Para editar un producto, haz clic en el botón "Editar" y completa los campos.
5. Para eliminar un producto, haz clic en "Eliminar".
6. El sistema actualizará la información en la API en tiempo real.

## 💡 Mejoras Futuras
🔹 Agregar autenticación con JWT
🔹 Implementar paginación en la lista de productos
🔹 Mejorar la interfaz de usuario

## 📜 Licencia
Este proyecto está bajo la licencia MIT.

---
✉ **Autor:** [Tu Nombre]  
🔗 **Repositorio:** [GitHub](https://github.com/tu-usuario/tu-repositorio)

