using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetCore.Models;  // Import the StudentTicket model
using DotNetCore.DBContext;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentTicketController : ControllerBase
    {

        private readonly AppDbContext _context;

        public StudentTicketController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("bookstudent")]
        public async Task<IActionResult> BookStudent(StudentTicket studentTicket)
        {
            if (ModelState.IsValid)
            {
                _context.studentTickets.Add(studentTicket);
                await _context.SaveChangesAsync();
                return Ok("Ticket added");
            }

            // Invalid credentials
            return BadRequest("Ticket not added");

        }
    }
}
