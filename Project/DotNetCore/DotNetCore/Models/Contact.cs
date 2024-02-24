using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("contact")]
    public class Contact
    {
        [Key]
        public string name {  get; set; }
        public string email { get; set; }
        public string phone_no { get; set; }
    }
}
