using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("Ride")]
    public class AddRides
    {
        public int RideId {  get; set; }
        public string RideName { get; set;}
        public string Description { get; set;}

    }
}
