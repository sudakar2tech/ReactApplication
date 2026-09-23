using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EIS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        List<Employee> employees = new List<Employee>();
      
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {

            Employee a = new Employee { Ename = "Sudakar", Address = "test" };
            Employee b = new Employee { Ename = "Sudakar1", Address = "test1" };
            employees.Add(a);
            employees.Add(b);

            return employees;
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            Employee a = new Employee { Ename = "Sudakar", Address = "test" };
            Employee b = new Employee { Ename = "Sudakar1", Address = "test1" };
            employees.Add(a);
            employees.Add(b);
            var emp = employees.FirstOrDefault(e => e.Employeeid == id).ToString();
            return emp;
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public void Post([FromBody] Employee value)
        {
            employees.Add(value);
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Employee value)
        {
            int i = employees.FindIndex(e => e.Employeeid == id);
            if (i >= 0)
                employees[i] = value;
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            employees.RemoveAll(e => e.Employeeid == id);
        }
    }
}
