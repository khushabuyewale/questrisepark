using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : Controller
    {
        private readonly AppDbContext _context;

        public TicketController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("bookticket")]
        public async Task<IActionResult> BookTicket([FromBody] List<Ticket> ticket)
        {
            if (ModelState.IsValid)
            {
                _context.tickets.AddRange(ticket);
                await _context.SaveChangesAsync();
                return Ok("Ticket added");
            }

            // Invalid credentials
            return BadRequest("Ticket not added");

        }
    }
}
