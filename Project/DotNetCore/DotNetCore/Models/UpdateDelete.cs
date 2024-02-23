using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Price")]
    public class UpdateDelete
    {
       
        public int Id { get; set; }
        public int Regular {  get; set; }
        public int GroupTicket {  get; set; }
        public int Student {  get; set; }
        public int Breakfast {  get; set; }
        public int Lunch {  get; set; }
        public int Snacks {  get; set; }
        public int Dinner {  get; set; }
    }
}
