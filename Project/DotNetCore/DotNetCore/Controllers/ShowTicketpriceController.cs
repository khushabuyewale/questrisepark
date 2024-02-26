using DotNetCore.DBContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowTicketpriceController : Controller
    {
        private readonly AppDbContext _context;
        public ShowTicketpriceController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("{name}")]
        public IActionResult ShowRidesByName(string name)
        {
            var tick = _context.tprices.Where(r => r.ticket_name == name).ToList();

            if (tick.Any())
            {
                return Ok(tick);
            }

            return NotFound($"No tickets found with the name: {name}");
        }
    }
}
