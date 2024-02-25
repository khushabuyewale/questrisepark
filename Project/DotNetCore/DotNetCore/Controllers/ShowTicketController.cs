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
            // Assuming _context is your DbContext instance
            var allTickets = _context.views;

            if (allTickets != null)
            {
                return Ok(allTickets);  // Return a 200 OK response with the list of tickets
            }
            else
            {
                return BadRequest("No tickets found");  // Return a 400 Bad Request response if no tickets are found
            }
        }


    }
}
