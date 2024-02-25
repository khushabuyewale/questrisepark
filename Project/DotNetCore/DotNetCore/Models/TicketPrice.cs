using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("ticketprice")]
    public class TicketPrice
    {
        [Key]
        public string ticket_name { get; set; }
        public int ticket_price { get; set; }
    }
}
