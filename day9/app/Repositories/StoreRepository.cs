namespace app;

public class StoreRepository : IStoreRepository
{
    private static int _count;

    public StoreRepository()
    {
        _count = 0;
    }

    public int GetCount()
    {
        Console.WriteLine($"Returning count of '{_count}'");
        return _count;
    }

    public void SetCount(int newCount)
    {
        _count = newCount;
        Console.WriteLine($"Setting new count of '{_count}'");
    }
}