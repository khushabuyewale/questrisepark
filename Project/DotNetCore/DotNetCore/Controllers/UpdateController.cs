using System;
using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UpdateController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UpdateController(AppDbContext context)
        {
            _context = context;
        }
/*
        [HttpPut("updateride/{ridename}")]
        public async Task<IActionResult> UpdateRide(string name, Rides updateRide)
        {
            var updateRides = await _context.Rupdate.FindAsync(name);

            if (updateRides == null)
            {
                return NotFound("Name");
            }
            updateRides.Ride_Name = ;
            updateRides.Description = ;
            await _context.SaveChangesAsync();
            return Ok("Ride updated");
        }
*/
        [HttpPut("{ridename}")]
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


    }
}
