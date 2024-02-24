using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddRideController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AddRideController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("addrider")]
        public async Task<IActionResult> AddRide([FromBody] List<Rides> addRide)
        {
            if (ModelState.IsValid)
            {
                _context.adds.AddRange(addRide);
                await _context.SaveChangesAsync();
                return Ok("Ride added");
            }

            // Invalid credentials
            return BadRequest("Ride not added");

        }
    }
}
