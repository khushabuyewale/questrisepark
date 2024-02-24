using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("contacts")]
        public async Task<IActionResult> ContactInfo(Contact contact)
        {
            if (ModelState.IsValid)
            {
                _context.contacts.Add(contact);
                await _context.SaveChangesAsync();
                return Ok("Contact added");
            }

            // Invalid credentials
            return BadRequest("Contact not added");

        }
    }
}
