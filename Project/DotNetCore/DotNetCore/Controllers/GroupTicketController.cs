using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupTicketController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GroupTicketController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("bookgroup")]
        public async Task<IActionResult> BookGroup(GroupTicket groupTicket)
        {
            if (ModelState.IsValid)
            {
                _context.groupTickets.Add(groupTicket);
                await _context.SaveChangesAsync();
                return Ok("Ticket added");
            }

            // Invalid credentials
            return BadRequest("Ticket not added");

        }
    

}
}
