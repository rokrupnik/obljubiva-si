using obljubiva_si_rest_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace obljubiva_si_rest_api.Controllers
{
    public class ApplicationsController : ApiController
    {

        // POST api/applications
        public IHttpActionResult Post(ApplicationBindingModel application)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            using (var db = new ObljubivaSiContext())
            {
                // Insert only if this is the first application with this name
                var oldApplications = db.WeddingApplication.Where(x => x.Name == application.Name).ToArray();

                if (oldApplications.Length > 0)
                {
                    return BadRequest("Neustrezna prijava.");
                }

                WeddingApplication newApplication = new WeddingApplication();
                newApplication.Name = application.Name;
                newApplication.Remarks = application.Remarks;
                newApplication.TimeApplied = DateTime.Now;

                db.WeddingApplication.Add(newApplication);
                db.SaveChanges();
            }

            return Ok();
        }
    }
}
