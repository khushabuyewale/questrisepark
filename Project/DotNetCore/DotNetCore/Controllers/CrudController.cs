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
/*
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


        [HttpPost("addrider")]
        public async Task<IActionResult> AddRide([FromBody] List<AddRides> addRide)
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
        */


        [HttpPost("addrider")]
        public async Task<IActionResult> AddRide(AddRides ride)
        {
            if (ModelState.IsValid)
            {
                _context.adds.Add(ride);
                await _context.SaveChangesAsync();
                return Ok("Ride added");
            }

            // Invalid credentials
            return BadRequest("Ride not added");

        }


        //update meal and ticket info

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateMeal(int id, UpdateDelete updatedelete)
        {
            var updateDel = await _context.update.FindAsync(id);

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

        //delete meal and ticket info

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteTicket(int priceid)
        {
            var priceToDelete = await _context.delete.FindAsync(priceid);

            if (priceToDelete == null)
            {
                return NotFound("Id not found");
            }

            _context.delete.Remove(priceToDelete);
            await _context.SaveChangesAsync();

            return Ok("Record deleted");
        }

        //update ride

        [HttpPut("updateride/{id}")]
        public async Task<IActionResult> UpdateRide(int id, AddRides updateRide)
        {
            var updateRides = await _context.Rupdate.FindAsync(id);

            if (updateRides == null)
            {
                return NotFound("Id");
            }

            updateRides.RideName= updateRide.RideName;
            updateRides.Description= updateRide.Description;
            await _context.SaveChangesAsync();

            return Ok("Price updated");
        }

        //for deleting ride

        [HttpDelete("deleteride/{id}")]
        public async Task<IActionResult> DeleteRide(int rideid)
        {
            var RideToDelete = await _context.Rdelete.FindAsync(rideid);

            if (RideToDelete == null)
            {
                return NotFound("Id not found");
            }

            _context.Rdelete.Remove(RideToDelete);
            await _context.SaveChangesAsync();

            return Ok("Ride deleted");
        }

    }
}
