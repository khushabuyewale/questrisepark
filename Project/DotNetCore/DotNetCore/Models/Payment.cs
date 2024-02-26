using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("payment")]
    public class Payment
    {
        [Key]
        public string name {  get; set; }
        public int amount {  get; set; }
        public int ticket_amount { get; set; }
        public int meal_amount { get; set; }

    }
}
