using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestRingLing.Cross.DTO;
using TestRingLing.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestRingLing.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly IService<Customer> _service;
        public CustomerController(IService<Customer> svc)
        {
            _service = svc;
        }
        // GET: api/values
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
               var results= _service.GetData();
               return Ok(results);

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }        }
    }
}

