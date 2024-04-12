import React from "react";
import DashboardNavigation from "../../components/DashboardNavigation";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";

function Dashboard() {
  return (
    <>
      <Navigation />
      <DashboardNavigation />
      <Footer />
    </>
  );
}

export default Dashboard;
