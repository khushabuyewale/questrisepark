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

        
        
        public DbSet<Rides> rides { get; set; }

        public DbSet<Contact> contacts { get; set; }
        public DbSet<Payment> payments { get; set; }
        public DbSet<College> colleges { get; set; }
        public DbSet<MealPrice> uprices { get; set; }
        public DbSet<Visits> visits { get; set; }
        public DbSet<Ticket> tickets { get; set; }

        public DbSet<TicketPrice> tprices { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your entities here using modelBuilder
            base.OnModelCreating(modelBuilder);
        }
    }
}

