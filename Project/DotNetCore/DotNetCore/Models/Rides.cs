using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("rides")]
    public class Rides
    {
        [Key]
        public int Id {  get; set; }
        public string Ride_Name { get; set;}
        public string Description { get; set;}
        public string type {  get; set;}

    }
}
