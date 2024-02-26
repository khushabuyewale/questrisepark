using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TicketpriceController : ControllerBase
    {
        private readonly AppDbContext _context;
        public TicketpriceController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("priced")]
        public async Task<IActionResult> PriceInfo([FromBody] List<TicketPrice> price)
        {
            if (ModelState.IsValid)
            {
                _context.tprices.AddRange(price);
                await _context.SaveChangesAsync();
                return Ok("Price Added");
            }

            // Invalid credentials
            return BadRequest("Price Not Added");

        }

        [HttpPut("{name}")]
        public IActionResult UpdateMeal(string name, TicketPrice tickets)
        {
            var tickname = _context.tprices.FirstOrDefault(s => s.ticket_name == name);

            if (tickname == null)
            {
                return NotFound("not found");
            }

            tickname.ticket_name = tickets.ticket_name;
            tickname.ticket_price = tickets.ticket_price;

            _context.SaveChanges();

            return Ok("found");
        }


    }
}
