using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollegeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CollegeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("colleges")]
        public async Task<IActionResult> CollegeInfo([FromBody] List<College> college)
        {
            if (ModelState.IsValid)
            {
                _context.colleges.AddRange(college);
                await _context.SaveChangesAsync();
                return Ok("College added");
            }

            // Invalid credentials
            return BadRequest("College not added");

        }
    }
}
