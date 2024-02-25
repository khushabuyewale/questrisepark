using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RideController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RideController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("addrider")]
        public async Task<IActionResult> AddRide([FromBody] List<Rides> addRide)
        {
            if (ModelState.IsValid)
            {
                _context.rides.AddRange(addRide);
                await _context.SaveChangesAsync();
                return Ok("Ride added");
            }

            // Invalid credentials
            return BadRequest("Ride not added");

        }

        [HttpPut("{name}")]
        public IActionResult UpdateRide(string name, Rides ride)
        {
            var ridename = _context.rides.FirstOrDefault(p => p.Ride_Name == name);

            if (ridename == null)
            {
                return NotFound("not found");
            }

            ridename.Ride_Name = ride.Ride_Name;
            ridename.Description = ride.Description;
            ridename.type = ride.type;

            _context.SaveChanges();

            return Ok("found");
        }

        [HttpDelete("{name}")]
        public IActionResult DeleteRide(string name)
        {
            var rideToDelete = _context.rides.FirstOrDefault(p => p.Ride_Name == name);

            if (rideToDelete == null)
            {
                return NotFound("Ride not found");
            }

            _context.rides.Remove(rideToDelete);
            _context.SaveChanges();

            return Ok("Ride deleted");
        }
    }
}
