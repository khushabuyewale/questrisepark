using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetCore.Models;  // Import the Admin model
using DotNetCore.DBContext;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly AppDbContext _context;
        public AdminController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(Admin adminlogin)
        {
            if (ModelState.IsValid)
            {
                // Find the user by email
                var admin = await _context.admins
                    .FirstOrDefaultAsync(u => u.email == adminlogin.email);

                if (admin != null && admin.password == adminlogin.password)
                {
                    // Authentication successful
                    // You might want to generate and return a token here for more secure authentication
                    return Ok("Login successful");
                }

                // Invalid credentials
                return BadRequest("Invalid email or password");
            }

            // Invalid data
            return BadRequest("Invalid data");
        }
    }
}
