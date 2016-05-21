using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace obljubiva_si_rest_api.Models
{
    // Models used as parameters to Controller actions.
    
    public class ApplicationBindingModel
    {
        [Required(ErrorMessage = "Ime in Priimek sta obvezen podatek.")]
        [StringLength(50, ErrorMessage = "{0} sta lahko dolga največ {1} znakov.")]
        [Display(Name = "Ime in priimek")]
        public string Name { get; set; }

        [StringLength(500, ErrorMessage = "{0} so lahko dolge največ {1} znakov.")]
        [Display(Name = "Opombe")]
        public string Remarks { get; set; }
    }
}
