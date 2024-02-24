using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("visits")]
    public class Visits
    {
        [Key]
        public int id {  get; set; }
        public string visited_status {  get; set; }
    }
}
