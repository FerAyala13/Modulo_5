using MongoDB.Driver;

namespace ComputerDGMC_Backend
{
    public class Conexion
    {
        private readonly IMongoDatabase _database;

        public Conexion()
        {
           
            var connectionString = "mongodb://localhost:27017";
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase("Computer_DGMC");
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName)
        {
            return _database.GetCollection<T>(collectionName);
        }
    }
} 