using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CrudController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("addrider")]
        public async Task<IActionResult> AddUser(AddRides addRide)
        {
            if (ModelState.IsValid)
            {
                _context.adds.Add(addRide);
                await _context.SaveChangesAsync();
                return Ok("Ride added");
            }
            // Invalid credentials
            return BadRequest("Ride not added");

        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateMeal(int id, [FromBody] UpdateDelete updatedelete)
        {
            var updateDel = await _context.udelete.FindAsync(id);

            if (updateDel == null)
            {
                return NotFound("Id");
            }

            updateDel.Regular = updatedelete.Regular;
            updateDel.GroupTicket = updatedelete.GroupTicket;
            updateDel.Student = updatedelete.Student;
            updateDel.Breakfast = updatedelete.Breakfast;
            updateDel.Lunch = updatedelete.Lunch;
            updateDel.Snacks = updatedelete.Snacks;
            updateDel.Dinner = updatedelete.Dinner;

            await _context.SaveChangesAsync();

            return Ok("Price updated");
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteTicket(int priceid)
        {
            var priceToDelete = await _context.udelete.FindAsync(priceid);

            if (priceToDelete == null)
            {
                return NotFound("Id not found");
            }

            _context.udelete.Remove(priceToDelete);
            await _context.SaveChangesAsync();

            return Ok("Record deleted");
        }


    }
}
