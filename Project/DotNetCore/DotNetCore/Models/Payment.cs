using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("payment")]
    public class Payment
    {
        [Key]
        public string name {  get; set; }
        public double amount {  get; set; }
    }
}
