using Microsoft.AspNetCore.Mvc;

namespace app.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StoreController : ControllerBase
{
    private readonly IStoreRepository _store;

    public StoreController(IStoreRepository storeRepository)
    {
        _store = storeRepository;
    }

    [HttpGet]
    public int Get()
    {
        Console.WriteLine("Getting store count...");
        int count = _store.GetCount();
        return count;
    }

    [HttpPut("{newCount}")]
    public IActionResult Set([FromRoute] int newCount)
    {
        Console.WriteLine($"Setting new store count of '{newCount}'");
        _store.SetCount(newCount);
        return Ok();
    }
}
