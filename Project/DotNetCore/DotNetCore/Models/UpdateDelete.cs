using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Price")]
    public class UpdateDelete
    {
       
        public int Id { get; set; }
        public int Regular_ticket {  get; set; }
        public int Student_ticket {  get; set; }
        public int Group_Ticket { get; set; }
        public int Breakfast {  get; set; }
        public int Lunch {  get; set; }
        public int Snacks {  get; set; }
        public int Dinner {  get; set; }
    }
}
