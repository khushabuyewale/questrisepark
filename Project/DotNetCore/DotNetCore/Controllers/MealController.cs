using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MealController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("bookmeal")]
        public async Task<IActionResult> BookMeal(Meal meal)
        {
            if (ModelState.IsValid)
            {
                _context.meals.Add(meal);
                await _context.SaveChangesAsync();
                return Ok("Meal added");
            }

            // Invalid credentials
            return BadRequest("Meal not added");

        }



    }
}
