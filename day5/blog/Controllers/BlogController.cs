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

    private readonly ILogger<BlogController> _logger;
        
    public BlogController(ILogger<BlogController> logger)
    {
        _logger = logger;
        
    }

    [HttpGet]
    public IEnumerable<Blog> Get()
    {
        Console.WriteLine($"Sending {Blogs.Length} blog entries back in response.");
        return Blogs;
    }
}
