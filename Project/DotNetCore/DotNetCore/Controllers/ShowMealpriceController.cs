using DotNetCore.DBContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowMealpriceController : Controller
    {

        private readonly AppDbContext _context;
        public ShowMealpriceController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("{name}")]
        public IActionResult ShowRidesByName(string name)
        {
            var ridesByName = _context.uprices.Where(r => r.meal_name == name).ToList();

            if (ridesByName.Any())
            {
                return Ok(ridesByName);
            }

            return NotFound($"No meals found with the name: {name}");
        }
    }
}
