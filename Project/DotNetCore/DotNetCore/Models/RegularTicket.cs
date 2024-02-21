using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("RegularTicket")]
    public class RegularTicket
    {
        public int Id { get; set; }
        public string phoneNumber { get; set; }
        public string email { get; set; }
        public string name { get; set; }
            public int age { get; set; }
    }
}
