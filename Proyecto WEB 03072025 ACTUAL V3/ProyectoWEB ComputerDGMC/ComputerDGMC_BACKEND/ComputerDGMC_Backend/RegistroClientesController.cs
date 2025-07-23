using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using ComputerDGMC_Backend.Modelos;

namespace ComputerDGMC_Backend
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistroClientesController : ControllerBase
    {
        private readonly IMongoCollection<RegistroCliente> _clientes;

        public RegistroClientesController()
        {
            var conexion = new Conexion();
            _clientes = conexion.GetCollection<RegistroCliente>("Registro_Clientes");
        }

        [HttpPost]
        public IActionResult Registrar([FromBody] RegistroCliente cliente)
        {
            _clientes.InsertOne(cliente);
            return Ok(new { success = true, message = "Cuenta Creada Exitosamente" });
        }
    }
} 