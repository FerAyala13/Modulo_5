using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ComputerDGMC_Backend.Modelos
{
    public class RegistroCliente
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Nombre")]
        public string Nombre { get; set; } = string.Empty;

        [BsonElement("Apellido")]
        public string Apellido { get; set; } = string.Empty;

        [BsonElement("Edad")]
        public int Edad { get; set; }

        [BsonElement("Correo")]
        public string Correo { get; set; } = string.Empty;

        [BsonElement("Contrasena")]
        public string Contrasena { get; set; } = string.Empty;
    }
} 