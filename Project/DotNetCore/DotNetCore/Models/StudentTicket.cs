using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("StudentTicket")]
    public class StudentTicket
    {

        public int id { get; set; }
        public string phoneNumber { get; set; }
        public string email { get; set; }
        public string name { get; set; }
        public int age { get; set; }
        public string regNo { get; set; }
        public string collegeName { get; set; }
    }
}
