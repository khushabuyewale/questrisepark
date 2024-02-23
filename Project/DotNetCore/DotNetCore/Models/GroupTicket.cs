using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("GroupTicket")]
    public class GroupTicket
    {
        public int id { get; set; }
        public string phoneNumber {  get; set; }    
        public string email { get; set; }
        public string name { get; set; }
        public int age { get; set; }
    }
}
