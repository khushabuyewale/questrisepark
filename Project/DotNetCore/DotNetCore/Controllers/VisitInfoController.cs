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
                return Ok("visit status updated");
            }

            // Invalid credentials
            return BadRequest("visit status not updated");

        }

        [HttpPut("{id}")]
        public IActionResult UpdateVisitor(int id, Visits visited)
        {
            var vistor = _context.visits.FirstOrDefault(v => v.Id == id);

            if (vistor == null)
            {
                return NotFound("not found");
            }

            vistor.visited_status = visited.visited_status;

            _context.SaveChanges();

            return Ok("found");
        }
    }
}
