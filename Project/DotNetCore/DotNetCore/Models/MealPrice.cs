using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("mealprice")]
    public class MealPrice
    {
        [Key]
        public string meal_name { get; set; }
        public int meal_price { get; set; }
    }
}
