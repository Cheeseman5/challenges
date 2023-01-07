using MySql.Data.MySqlClient;

namespace app;

public class StoreRepository : IStoreRepository
{
    private static string _connectionString = "";

    private void BuildConnectionString()
    {
        var builder = new MySqlConnectionStringBuilder();

        builder.Server = "localhost";
        builder.Port = 3306;
        builder.Database = "store";
        builder.UserID = "user";
        builder.Password = "pass";
        builder.ConnectionTimeout = 120;
        
        _connectionString = builder.ConnectionString;
        Console.WriteLine($"connection string: '{_connectionString}'");
    }

    public StoreRepository()
    {
        BuildConnectionString();
        int initialCount = GetCount();
        Console.WriteLine($"initial count: {initialCount}");
    }


    public int GetCount()
    {
        try
        {
            string sprocName = "GetCount";
            using(var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using(var command = new MySqlCommand(sprocName, connection))
                {
                    int count = (int)command.ExecuteScalar();
                    Console.WriteLine($"Returning count of '{count}'");
                    return count;
                }
            }
            
        }
        catch(MySqlException e)
        {
            Console.WriteLine(e.ToString());
            return -1;
        }
    }

    public void SetCount(int newCount)
    {
        Console.WriteLine($"Setting new count of '{newCount}'");
        try
        {
            string sprocName = "SetCount";
            using(var connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using(var command = new MySqlCommand(sprocName))
                {
                    command.Parameters.AddWithValue("newCount",newCount);
                    
                    command.ExecuteNonQuery();
                }
            }
        }
        catch(MySqlException e)
        {
            Console.WriteLine(e.ToString());
        }
    }
}