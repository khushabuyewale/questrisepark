using System;
using DotNetCore.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.DBContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your entities here using modelBuilder
            base.OnModelCreating(modelBuilder);
        }
    }
}

