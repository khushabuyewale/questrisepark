using System;
using DotNetCore.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.DBContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        
        public DbSet<Admin> admins { get; set; }

        public DbSet<Meal> meals { get; set; }

        public DbSet<Price> update { get; set; }
        public DbSet<Price> delete { get; set; }
        public DbSet<Rides> adds { get; set; }

        public DbSet<Rides> Rupdate { get; set; }

        public DbSet<Contact> contacts { get; set; }
        public DbSet<Payment> payments { get; set; }
        public DbSet<College> colleges { get; set; }
        public DbSet<Price> prices { get; set; }
        public DbSet<Visits> visits { get; set; }
        public DbSet<Ticket> tickets { get; set; }
        public DbSet<Rides> Rdelete { get; set; }

        public DbSet<Rides> rides { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your entities here using modelBuilder
            base.OnModelCreating(modelBuilder);
        }
    }
}

