using DotNetCore.DBContext;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeleteBookingController : Controller
    {
        private readonly AppDbContext _context;

        public DeleteBookingController(AppDbContext context)
        {
            _context = context;
        }

        [HttpDelete("{name}")]
        public IActionResult DeleteRide(string name)
        {
            var ticketToDelete = _context.tickets.FirstOrDefault(t => t.name == name);

            if (ticketToDelete == null)
            {
                return NotFound("ticket not found");
            }

            _context.tickets.Remove(ticketToDelete);
            _context.SaveChanges();

            var contactToDelete = _context.contacts.FirstOrDefault(c => c.name == name);

            if (contactToDelete != null)
            {
                _context.contacts.Remove(contactToDelete);
                _context.SaveChanges();
            }

            

            var mealsToDelete = _context.meals.FirstOrDefault(m => m.name == name);

            if (mealsToDelete != null)
            {
                _context.meals.Remove(mealsToDelete);
                _context.SaveChanges();
            }

            var collegeToDelete = _context.colleges.FirstOrDefault(c => c.name == name);

            if (collegeToDelete != null)
            {
                _context.colleges.Remove(collegeToDelete);
                _context.SaveChanges();
            }

            var paymentToDelete = _context.payments.FirstOrDefault(p => p.name == name);

            if (paymentToDelete != null)
            {
                _context.payments.Remove(paymentToDelete);
                _context.SaveChanges();
            }

            return Ok("record deleted");
        }
    }
}
