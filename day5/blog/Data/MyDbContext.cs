using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using blog.Models;

namespace blog.Data;

public class MyDbContext : DbContext
{
    public DbSet<Note> Notes { get; set; }
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    { }

    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    // {
    //     if(optionsBuilder.IsConfigured)
    //     {
    //         return;
    //     }

    //     IConfigurationRoot configuration = new ConfigurationBuilder()
    //         .SetBasePath(Directory.GetCurrentDirectory())
    //         .AddJsonFile("appsettings.json")
    //         .Build();
        
    //     string connectionString = configuration.GetConnectionString("DefaultConnection");
    //     optionsBuilder.UseNpgsql(connectionString);
    // }
}
