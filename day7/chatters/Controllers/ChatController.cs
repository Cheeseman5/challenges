using Microsoft.AspNetCore.Mvc;

namespace chatters.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ChatController : ControllerBase
{
    private readonly ILogger<ChatController> _logger;
    private static List<Message> _mockMessages = new List<Message>
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
        },
        new Message
        {
            Id = 4,
            PostDateTime = DateTime.Now,
            Text = "The message content text 2.",
            Author = "Some User"
        },
        new Message
        {
            Id = 5,
            PostDateTime = DateTime.Now,
            Text = "Some random message content text 2.",
            Author = "Another User"
        },
        new Message
        {
            Id = 6,
            PostDateTime = DateTime.Now,
            Text = "That message was dumb and you should feel bad 2.",
            Author = "Butthead"
        }
    };

    public ChatController(ILogger<ChatController> logger)
    {
        _logger = logger;
    }

    [HttpGet]   // GET /api/chat
    [ResponseCache(NoStore=true)]
    public IEnumerable<Message> Get()
    {
        var rng = new Random();
        int randCount = rng.Next(_mockMessages.Count);
        List<Message> response = _mockMessages.Take(randCount).ToList();

        Console.WriteLine($"Sending {response.Count} chat messages (out of a possible {_mockMessages.Count} messages) back in response.");
        return response;
    }

    [HttpPost]  // POST /api/chat
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public IActionResult Post([FromBody] Message message)
    {
        if(message?.Author == null || message?.Text == null)
        {
            return BadRequest();
        }

        Console.WriteLine($"Attempting to push new message (msg:\"{message.Text}\", by: \"{message.Author}\") onto the stack...");

        AddMessage(message.Author, message.Text);
        return Ok();
    }

    private void AddMessage(string author, string text)
    {
        var msg = new Message
        {
            Id = _mockMessages.Count,
            PostDateTime = DateTime.Now,
            Author = author,
            Text = text
        };
        _mockMessages.Add(msg);
        Console.WriteLine($"Pushed new message (Author: \"{msg.Author}\", Text: \"{msg.Text}\" | new length: {_mockMessages.Count}) onto the stack.");
    }
}
