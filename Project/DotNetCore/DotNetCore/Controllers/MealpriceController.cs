using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class MealpriceController : ControllerBase
    {
        private readonly AppDbContext _context;
        public MealpriceController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("priced")]
        public async Task<IActionResult> PriceInfo([FromBody] List<MealPrice> price)
        {
            if (ModelState.IsValid)
            {
                _context.uprices.AddRange(price);
                await _context.SaveChangesAsync();
                return Ok("Price Added");
            }

            // Invalid credentials
            return BadRequest("Price Not Added");

        }

        [HttpPut("{name}")]
        public IActionResult UpdateMeal(string name, MealPrice meal)
        {
            var ridename = _context.uprices.FirstOrDefault(s => s.meal_name == name);

            if (ridename == null)
            {
                return NotFound("not found");
            }

            ridename.meal_name = meal.meal_name;
            ridename.meal_price = meal.meal_price;

            _context.SaveChanges();

            return Ok("found");
        }
    }
}
