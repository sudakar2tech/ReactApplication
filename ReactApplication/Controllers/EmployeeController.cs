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
        [HttpPut("Update")]
        public ActionResult<Employee> Update(Employee employee)
        {
            var empupdate = _dbContext.Employees.FirstOrDefault(a => a.Ename == employee.Ename);
            if (empupdate != null)
            {
                // 2. Update the text column directly
                empupdate.Task = employee.Task;

                // 3. Save changes (EF automatically detects the change)
                _dbContext.SaveChanges();
            }


          
            
            return Ok();
        }
       
        [HttpGet]
        public ActionResult<IEnumerable <Employee>> GetEmployee()
        {

            return _dbContext.Employees.ToList();
        }

        [HttpPost("login")]
        public ActionResult<Employee> Login(string ename) {

            var emp = _dbContext.Employees.FirstOrDefault(x => x.Ename == ename);
            var role = _dbContext.Employees.Where(x => x.Ename == ename).Select(x => x.Role).FirstOrDefault();
            if (emp == null)
            {
                return Unauthorized("invalid username or password");
            }
            
            return Ok(new { ename, role });
        
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
