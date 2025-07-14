using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace ComputerDGMC_Backend
{
    [ApiController]
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
            Console.WriteLine($"Intento: {login.NombreUsuario} / {login.Contrasena}");
            var usuario = _usuarios.Find(u => u.NombreUsuario == login.NombreUsuario && u.Contrasena == login.Contrasena).FirstOrDefault();
            if (usuario != null)
            {
                return Ok(new { success = true });
            }
            return Unauthorized(new { success = false, message = "Usuario o contraseña incorrectos" });
        }
    }
} 