using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetCore.Models;  // Import the User model
using DotNetCore.DBContext;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowRideController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ShowRideController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("showrides")]
        public IActionResult ShowRides()
        {
            var allRides = _context.rides.ToList();
            if (allRides != null)
            {
                return Ok(allRides);

            }
            else
            {
                return BadRequest("No rides found");
            }
        }

    }
}
