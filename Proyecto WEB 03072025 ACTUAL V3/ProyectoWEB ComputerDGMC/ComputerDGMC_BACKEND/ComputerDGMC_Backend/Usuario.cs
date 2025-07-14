using MongoDB.Bson.Serialization.Attributes;

namespace ComputerDGMC_Backend
{
    public class Usuario
    {
        [BsonElement("Usuario")]
        public string NombreUsuario { get; set; }
        [BsonElement("Contrasena")]
        public string Contrasena { get; set; }
    }
} 