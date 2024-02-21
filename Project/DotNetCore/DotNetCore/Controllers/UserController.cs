using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DotNetCore.Models;  // Import the User model
using DotNetCore.DBContext;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(User user)
        {
            if (ModelState.IsValid)
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return Ok("User registered successfully");
            }

            // Invalid credentials
            return BadRequest("Invalid email or password");

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(User loginRequest)
        {
            if (ModelState.IsValid)
            {
                // Find the user by email
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == loginRequest.Email);

                if (user != null && user.Password == loginRequest.Password)
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
