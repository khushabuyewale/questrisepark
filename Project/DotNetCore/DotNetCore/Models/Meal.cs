using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("meals")]
    public class Meal
    {
        [Key]
        public string name {  get; set; }
        public int breakfast {  get; set; }
        public int lunch {  get; set; }
        public int snack {  get; set; }
        public int dinner {  get; set; }

    }
}
