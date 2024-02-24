using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("college_info")]
    public class College
    {
        [Key]
        public string Name { get; set; }
        public int reg_no {  get; set; }
        public string college_name {  get; set; }
    }
}
