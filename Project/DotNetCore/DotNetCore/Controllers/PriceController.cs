using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PriceController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PriceController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("priced")]
        public async Task<IActionResult> PriceInfo([FromBody] List<Price> price)
        {
            if (ModelState.IsValid)
            {
                _context.prices.AddRange(price);
                await _context.SaveChangesAsync();
                return Ok("Price Added");
            }

            // Invalid credentials
            return BadRequest("Price Not Added");

        }
    }
}
