using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace ComputerDGMC_Backend
{
    // [ApiController] // Quitar o comentar temporalmente para depuración
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly IMongoCollection<Usuario> _usuarios;

        public LoginController()
        {
            var conexion = new Conexion();
            _usuarios = conexion.GetCollection<Usuario>("Usuarios");
        }

        [HttpPost]
        public IActionResult Login([FromBody] Usuario login)
        {
            Console.WriteLine(login == null ? "El objeto login es NULL" : $"Login recibido: Correo={login.Correo}, Contrasena={login.Contrasena}");

            if (!ModelState.IsValid)
            {
                Console.WriteLine("ModelState no válido:");
                foreach (var key in ModelState.Keys)
                {
                    var errors = ModelState[key].Errors;
                    foreach (var error in errors)
                    {
                        Console.WriteLine($"Error en {key}: {error.ErrorMessage}");
                    }
                }
                return BadRequest(ModelState);
            }

            var usuarios = _usuarios.Find(_ => true).ToList();
            foreach (var u in usuarios)
            {
                Console.WriteLine($"Usuario en BD: Correo={u.Correo}, Contrasena={u.Contrasena}");
            }
            var usuario = _usuarios.Find(u => u.Correo == login.Correo && u.Contrasena == login.Contrasena).FirstOrDefault();
            if (usuario != null)
            {
                return Ok(new { success = true });
            }
            return Unauthorized(new { success = false, message = "Correo o contraseña incorrectos" });
        }
    }
} 