/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Task from "@material-ui/icons/Dns";
import Configurations from "@material-ui/icons/Settings";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/job.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

const dashboardRoutes = [{
        path: "/job",
        name: "Jobs",
        rtlName: "لوحة القيادة",
        icon: Task,
        component: DashboardPage,
        layout: "/admin"
    },
    {
        path: "/user",
        name: "Configurations",
        rtlName: "ملف تعريفي للمستخدم",
        icon: Configurations,
        component: UserProfile,
        layout: "/admin"
    },

];

export default dashboardRoutes;