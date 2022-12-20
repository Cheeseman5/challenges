using Microsoft.AspNetCore.Mvc;

namespace chatters.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ChatController : ControllerBase
{
    private readonly ILogger<ChatController> _logger;
    private readonly Message[] _mockMessages = new[]
    {
        new Message
        {
            Id = 1,
            PostDateTime = DateTime.Now,
            Text = "The message content text.",
            Author = "Some User"
        },
        new Message
        {
            Id = 2,
            PostDateTime = DateTime.Now,
            Text = "Some random message content text.",
            Author = "Another User"
        },
        new Message
        {
            Id = 3,
            PostDateTime = DateTime.Now,
            Text = "That message was dumb and you should feel bad.",
            Author = "Butthead"
        }
    };

    public ChatController(ILogger<ChatController> logger)
    {
        _logger = logger;
    }

    [HttpGet]   // GET /api/chat
    public IEnumerable<Message> Get()
    {
        Console.WriteLine($"Sending {_mockMessages.Length} blog entries back in response.");
        return _mockMessages;
    }

    [HttpPost]  // POST /api/chat
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public IActionResult Post(string author, string text)
    {
        Console.WriteLine($"Pushing new message (msg:\"{text}\", by: \"{author}\")");
        bool success = true;
        return success ? Ok() : NotFound();
    }
}
