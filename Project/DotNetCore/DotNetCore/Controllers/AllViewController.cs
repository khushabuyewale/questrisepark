using DotNetCore.DBContext;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllViewController : Controller
    {
        private readonly AppDbContext _context;

        public AllViewController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet("all_view")]
        public IActionResult ShowView()
        {
            var allview = _context.views.ToList();
            if (allview != null)
            {
                return Ok(allview);

            }
            else
            {
                return BadRequest("No payment found");
            }
        }
    }
}
