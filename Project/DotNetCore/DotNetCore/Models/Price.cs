using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Price")]
    public class Price
    {
        [Key]
        public int id { get; set; }
        public int regular_ticket {  get; set; }
        public int student_ticket {  get; set; }
        public int group_ticket { get; set; }
        public int breakfast {  get; set; }
        public int lunch {  get; set; }
        public int snack {  get; set; }
        public int dinner {  get; set; }
    }
}
