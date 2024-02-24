using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitInfoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VisitInfoController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("visits")]
        public async Task<IActionResult> VisitInfo([FromBody] List<Visits> visit)
        {
            if (ModelState.IsValid)
            {
                _context.visits.AddRange(visit);
                await _context.SaveChangesAsync();
                return Ok("Visited");
            }

            // Invalid credentials
            return BadRequest("Not Visited");

        }
    }
}
