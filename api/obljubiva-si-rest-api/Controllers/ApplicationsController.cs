﻿using obljubiva_si_rest_api.Models;
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

            try
            {
                using (var db = new ObljubivaSiContext())
                {
                    // Insert only if this is the first application with this name
                    // var oldApplications = db.WeddingApplication.Where(x => x.Name == application.Name && x.Type == application.Type).ToArray();
                    // 
                    // if (oldApplications.Length > 0)
                    // {
                    //     return BadRequest("Neustrezna prijava.");
                    // }

                    WeddingApplication newApplication = new WeddingApplication();
                    newApplication.Name = application.Name;
                    newApplication.Remarks = application.Remarks;
                    newApplication.TimeApplied = DateTime.Now;
                    newApplication.Phone = application.Phone;
                    newApplication.Type = application.Type;

                    db.WeddingApplication.Add(newApplication);
                    db.SaveChanges();
                }

                return Ok();
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }

        // GET api/applications
        public IHttpActionResult Get()
        {
            try
            {
                using (var db = new ObljubivaSiContext())
                {
                    return Ok(db.WeddingApplication.ToList());
                }
            }
            catch (Exception e)
            {
                return InternalServerError(e);
            }
        }
    }
}
