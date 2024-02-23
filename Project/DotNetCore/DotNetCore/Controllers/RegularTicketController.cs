using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetCore.Models;  // Import the RegularTicket model
using DotNetCore.DBContext;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegularTicketController : ControllerBase
    {


        private readonly AppDbContext _context;

        public RegularTicketController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("bookregular")]
        public async Task<IActionResult> BookRegular([FromBody] List<RegularTicket> regularTicket)
        {
            if (ModelState.IsValid)
            {
                _context.regularTickets.AddRange(regularTicket);
                await _context.SaveChangesAsync();
                return Ok("Ticket added");
            }

            // Invalid credentials
            return BadRequest("Ticket not added");

        }
    }
}
