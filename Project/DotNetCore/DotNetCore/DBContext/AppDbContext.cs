using System;
using DotNetCore.Models;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.DBContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<RegularTicket> regularTickets { get; set; }
        public DbSet<Admin> admins { get; set; }
        public DbSet<StudentTicket> studentTickets { get; set; }

        public DbSet<GroupTicket> groupTickets { get; set; }

        public DbSet<Meal> meals { get; set; }

        public DbSet<UpdateDelete> update { get; set; }
        public DbSet<UpdateDelete> delete { get; set; }
        public DbSet<AddRides> adds { get; set; }

        public DbSet<AddRides> Rupdate { get; set; }

        public DbSet<AddRides> Rdelete { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure your entities here using modelBuilder
            base.OnModelCreating(modelBuilder);
        }
    }
}

