using DotNetCore.DBContext;
using DotNetCore.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PaymentController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("payments")]
        public async Task<IActionResult> PymentInfo([FromBody] List<Payment> payment)
        {
            if (ModelState.IsValid)
            {
                _context.payments.AddRange(payment);
                await _context.SaveChangesAsync();
                return Ok("Payment Done");
            }

            // Invalid credentials
            return BadRequest("Payment Not Done");

        }

        [HttpGet("showpayment")]
        public IActionResult ShowPayment()
        {
            var allPayment = _context.payments.ToList();
            if (allPayment != null)
            {
                return Ok(allPayment);

            }
            else
            {
                return BadRequest("No payment found");
            }
        }
    }
}
