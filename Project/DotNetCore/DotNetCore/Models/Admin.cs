using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("admin")]
    public class Admin
    {
        public int Id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
    }
}