using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Meal")]
    public class Meal
    {
        public int MealId { get; set; }
        public int breakfast {  get; set; }
        public int lunch {  get; set; }
        public int snacks {  get; set; }
        public int dinner {  get; set; }

    }
}
