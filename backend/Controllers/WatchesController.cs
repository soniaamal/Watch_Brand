using Microsoft.AspNetCore.Mvc;
using BrandWebsite.Api.Models;

namespace BrandWebsite.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WatchesController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var watches = new List<Watch>
            {
                new Watch { Id = 1, Name = "Classic Silver", ImageUrl = "/images/silver.jpg", Price = 12000, Description = "Elegant silver finish." },
                new Watch { Id = 2, Name = "Midnight Black", ImageUrl = "/images/black.jpg", Price = 15000, Description = "Sleek and modern design." },
                new Watch { Id = 3, Name = "Golden Black", ImageUrl = "/images/silver.jpg", Price = 12999, Description = "Elegant golden finish." },
                new Watch { Id = 4, Name = "Midnight Black", ImageUrl = "/images/black.jpg", Price = 15000, Description = "Sleek and modern design." },

            };

            return Ok(watches);
        }
    }
}
