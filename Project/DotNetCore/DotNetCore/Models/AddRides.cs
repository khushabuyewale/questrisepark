using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Ride")]
    public class AddRides
    {
        [Key]
        public int RideId {  get; set; }
        public string RideName { get; set;}
        public string Description { get; set;}

    }
}
