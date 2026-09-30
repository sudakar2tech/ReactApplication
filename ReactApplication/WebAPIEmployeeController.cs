using Employeeinformation.Data;
using Employeeinformation.Model;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employeeinformation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
       private readonly ApplicationDbContext _dbContext;
       
        public EmployeeController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [HttpPost]
        public ActionResult<Employee> Create(Employee employee)
        {
            _dbContext.Employees.Add(employee);
            _dbContext.SaveChanges();
            return Ok();
        }
         
       
        [HttpGet]
        public ActionResult<IEnumerable <Employee>> GetEmployee()
        {

            return _dbContext.Employees.ToList();
        }




        //// GET api/<EmployeeController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    Employee a = new Employee { Ename = "Sudakar", Address = "test" };
        //    Employee b = new Employee { Ename = "Sudakar1", Address = "test1" };
        //    employees.Add(a);
        //    employees.Add(b);
        //    var emp = employees.FirstOrDefault(e => e.Employeeid == id);
        //    return id.ToString();
        //}

        //// POST api/<EmployeeController>
        //[HttpPost]
        //public void Post([FromBody] Employee value)
        //{
        //    employees.Add(value);
        //}

        //// PUT api/<EmployeeController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] Employee value)
        //{
        //    int i = employees.FindIndex(e => e.Employeeid == id);
        //    if (i >= 0)
        //        employees[i] = value;
        //}

        //// DELETE api/<EmployeeController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //    employees.RemoveAll(e => e.Employeeid == id);
        //}
       
    }
}
