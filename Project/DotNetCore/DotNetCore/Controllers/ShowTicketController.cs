using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetCore.Models;  // Import the User model
using DotNetCore.DBContext;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowTicketController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ShowTicketController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("showtickets")]
        public IActionResult ShowTickets()
        {
            var allTickets = _context.tickets.ToList();
            if(allTickets != null) 
            {
                return Ok(allTickets);

            }
            else
            {
                return BadRequest("No tickets found");
            }
        }

    }
}
