using System.Text.Json.Serialization;

namespace chatters;

public class Message
{
    [JsonIgnore]
    public int Id { get; set; }
    [JsonIgnore]
    public DateTime PostDateTime { get; set; }
    public string? Text { get; set; }
    public string? Author { get; set; }
}