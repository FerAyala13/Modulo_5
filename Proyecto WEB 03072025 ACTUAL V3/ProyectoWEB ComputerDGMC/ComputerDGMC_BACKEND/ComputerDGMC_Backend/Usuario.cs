using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ComputerDGMC_Backend
{
    public class Usuario
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [BsonIgnoreIfNull]
        public string? Id { get; set; }

        [BsonElement("Correo")]
        public string Correo { get; set; }

        [BsonElement("Contraseña")]
        public string Contrasena { get; set; }
    }
} 