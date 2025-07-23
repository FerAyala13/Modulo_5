using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ComputerDGMC_Backend.Modelos;
using System.IO;

namespace ComputerDGMC_Backend
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistroProductosController : ControllerBase
    {
        private readonly IMongoCollection<RegistroProducto> _productos;
        private readonly string _rutaImagenes = "../../../../ComputerDGMC_FRONTEND/img/Productos/";

        public RegistroProductosController()
        {
            var conexion = new Conexion();
            _productos = conexion.GetCollection<RegistroProducto>("Registro_Productos");
        }

        [HttpPost]
        [RequestSizeLimit(10_000_000)] // Limitar tamaño de archivos a 10MB
        public IActionResult AgregarProducto([FromForm] string nombre, [FromForm] string categoria, [FromForm] decimal precio, [FromForm] IFormFile imagen)
        {
            if (imagen == null || imagen.Length == 0)
                return BadRequest(new { success = false, message = "Imagen no válida" });

            // Guardar la imagen en la carpeta del frontend
            var nombreArchivo = Path.GetFileName(imagen.FileName);
            var rutaCompleta = Path.Combine(_rutaImagenes, nombreArchivo);
            var directorio = Path.GetDirectoryName(rutaCompleta);
            if (!Directory.Exists(directorio))
            {
                Directory.CreateDirectory(directorio);
            }
            using (var stream = new FileStream(rutaCompleta, FileMode.Create))
            {
                imagen.CopyTo(stream);
            }

            // Crear el producto
            var producto = new RegistroProducto
            {
                Nombre = nombre,
                Categoria = categoria,
                Precio = precio,
                Imagen = nombreArchivo
            };
            _productos.InsertOne(producto);

            return Ok(new { success = true, producto });
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarProducto(string id)
        {
            var resultado = _productos.DeleteOne(p => p.Id == id);
            if (resultado.DeletedCount == 0)
                return NotFound(new { success = false, message = "Producto no encontrado" });
            return Ok(new { success = true, message = "Producto eliminado" });
        }

        [HttpPut("{id}")]
        public IActionResult ActualizarProducto(string id, [FromForm] string nombre, [FromForm] string categoria, [FromForm] decimal precio, [FromForm] string? imagen)
        {
            var update = Builders<RegistroProducto>.Update
                .Set(p => p.Nombre, nombre)
                .Set(p => p.Categoria, categoria)
                .Set(p => p.Precio, precio);
            if (!string.IsNullOrEmpty(imagen))
            {
                update = update.Set(p => p.Imagen, imagen);
            }
            var resultado = _productos.UpdateOne(p => p.Id == id, update);
            if (resultado.MatchedCount == 0)
                return NotFound(new { success = false, message = "Producto no encontrado" });
            return Ok(new { success = true, message = "Producto actualizado" });
        }
    }
} 