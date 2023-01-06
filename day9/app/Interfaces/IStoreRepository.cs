namespace app;

public interface IStoreRepository
{
    int GetCount();
    void SetCount(int newCount);
}