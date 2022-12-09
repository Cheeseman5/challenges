using Microsoft.AspNetCore.Mvc;

namespace blog.Controllers;

[ApiController]
[Route("[controller]")]
public class BlogController : ControllerBase
{
    private readonly Blog[] Blogs = new[]
    {
        new Blog
        {
            Id = 1,
            Title = "My First Title",
            Content = "My first content"
        },
        new Blog
        {
            Id = 2,
            Title = "My Second Title",
            Content = "My second content"
        },
        new Blog
        {
            Id = 3,
            Title = "My Third Title",
            Content = "My third content"
        }
    };
    private readonly MyDbContext _database;
    private readonly ILogger<BlogController> _logger;
        
    public BlogController(ILogger<BlogController> logger, MyDbContext database)
    {
        _logger = logger;
        _database = database;
        
    }

    [HttpGet]
    public IEnumerable<Blog> Get()
    {
        if(_database == null)
        {
            return NotFound();
        }
        List<Blog> blogs = await _database.Blogs.ToListAsync();
        Console.WriteLine($"Sending {blogs.Length} blog entries back in response.");
        return blogs;
    }
}
