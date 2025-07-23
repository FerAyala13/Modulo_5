using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ComputerDGMC_Backend.Modelos
{
    public class RegistroProducto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Nombre")]
        public string Nombre { get; set; } = string.Empty;

        [BsonElement("Categoria")]
        public string Categoria { get; set; } = string.Empty;

        [BsonElement("Precio")]
        public decimal Precio { get; set; }

        [BsonElement("Imagen")]
        public string Imagen { get; set; } = string.Empty;
    }
} 