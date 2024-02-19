using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Quest_Rise.Models;

namespace Quest_Rise.Controllers
{
    [RoutePrefix("api/test")]
    public class testController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da = null;

        [HttpPost]
        [Route("SelectPack")]

        public string SelectPack(SelectPack pack)
        {
            string msg = string.Empty;
            try
            {
                
                cmd = new SqlCommand("selectpack", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@packName", pack.packName);
                cmd.Parameters.AddWithValue("@packAmount", pack.packAmount);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();

                if (i > 0)
                {
                    msg = "pack selected";
                }
                else
                {
                    msg = "pack not selected";
                }
            }
            catch(Exception e)
            {
                msg = e.Message;
            }
            return msg;

        }

        [HttpPost]
        [Route("Login")]

        public string Login(AdminLogin adminLogin)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("admin_login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@username",adminLogin.username);
                da.SelectCommand.Parameters.AddWithValue("@password", adminLogin.password);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if(dt.Rows.Count > 0)
                {
                    msg = "login successful";
                }
                else
                {
                    msg = "login failed";
                }

            }
            catch (Exception e)
            {
                msg = e.Message;
            }
            return msg;

        }
    }
}
