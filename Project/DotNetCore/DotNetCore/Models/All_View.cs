using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCore.Models
{
    [Table("allrecords")]
    public class All_View
    {
        [Key]
        public int id {  get; set; }
        public string name { get; set; }
        public int age { get; set; }
        public string date {  get; set; }
        public string type {  get; set; }
        public string email {  get; set; }
        public string phone_no { get; set; }
        public string visited_status {  get; set; }
        public int breakfast {  get; set; }
        public int lunch {  get; set; }
        public int snack {  get; set; }
        public int dinner {  get; set; }
        public int reg_no {  get; set; }
        public string college_name {  get; set; }
        public int amount {  get; set; }

    }
}
