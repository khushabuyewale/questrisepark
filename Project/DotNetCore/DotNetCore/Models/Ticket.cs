using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Ticket")]
    public class Ticket
    {
        public int Id { get; set; }
        public string name {  get; set; }
        public int age {  get; set; }
        public string date { get; set; }
        public string type {  get; set; }
    }
}
