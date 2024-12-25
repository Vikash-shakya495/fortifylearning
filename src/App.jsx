import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignupPopup from "./loginSystem/SignupPopup";
import CareerPath from "./pages/careerpath/CareerPath";
import NetworkEngineer from "./pages/careerpath/NetworkEngineer";
import SupplyChain from "./pages/mission/threat/SupplyChain";
import CouchDBRCE from "./pages/course/CouchDBRCE";
import MitreAttack from "./pages/MitreAttack";
import Alliances from "./pages/Alliances";
import SocAnalyst from "./pages/careerpath/SocAnalyst";
import Impact from "./pages/Impact";
import Privacy from "./pages/Privacy";
import Pricing from "./pages/Pricing";
import Login from "./loginSystem/Login";
import Instructors from "./pages/Instructors";
import Forum from "./pages/Forum"; // Assuming you have a Forum page component
import GrafanaDirectory from "./pages/course/GrafanaDirectory";
import AtlassianBitbucket from "./pages/course/AtlassianBitbucket ";
import ApacheHttpd from "./pages/course/ApacheHttpd";
import SkillsPath from "./pages/careerpath/SkillsPath";
import DemoForm from "./loginSystem/DemoForm";
import Catalog from "./pages/Catalog";
import BlindNoSql from "./pages/course/BlindNoSql";
import DoubleTrouble from "./pages/mission/threat/DoubleTrouble";
import SpaceMission from "./pages/mission/course/SpaceMission";
import AzureCloud from "./pages/careerpath/AzureCloud";
import IncidentHandler from "./pages/careerpath/IncidentHandler";

import MainHelpCenter from "./pages/MainHelpCenter";
import Billing from "./pages/helpcenter/Billing";

function App() {
  const location = useLocation();

  // Pages where Navbar and Footer should not appear
  const hideNavbarAndFooter = [
    "/login2", 
    "/forum",
    "help-center",
  ].includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<SignupPopup />} />
          <Route path="/career-path" element={<CareerPath />} />
          <Route path="/skill-paths" element={<SkillsPath />} />
          <Route path="career-path/network-engineer" element={<NetworkEngineer />} />
          <Route path="career-path/microsoft-azure-cloud-engineer" element={<AzureCloud />} />
          <Route path="career-path/incident-handler" element={<IncidentHandler />} />
          <Route path="threat-actor-campaign/weak-link-in-the-supply-chain" element={<SupplyChain />} />
          <Route path="threat-actor-campaign/double-trouble-with-double-dragon" element={<DoubleTrouble />} />
          <Route path="course/cve-series-couchdb-rce-cve-2022-24706" element={<CouchDBRCE />} />
          <Route path="course/cve-series-blind-nosql-injection-cve-2021-22911" element={<BlindNoSql />} />
          <Route path="course/cve-series-grafana-directory-traversal-cve-2021-43798" element={<GrafanaDirectory />} />
          <Route path="course/cve-series-atlassian-bitbucket-command-injection-cve-2022-36804" element={<AtlassianBitbucket />} />
          <Route path="course/cve-series-apache-httpd-cve-2021-42013" element={<ApacheHttpd />} />
          <Route path="/course/cybrary-challenge-space-mission1" element={<SpaceMission />} />
          <Route path="/mitre-attack" element={<MitreAttack />} />
          <Route path="/alliances" element={<Alliances />} />
          <Route path="/career-path/soc-analyst" element={<SocAnalyst />} />
          <Route path="/practice-lab/log-analysis-basics" element={<SocAnalyst />} />
          <Route path="/fortifylearning-impact-hub" element={<Impact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/instructor" element={<Instructors />} />
          <Route path="/demo-request" element={<DemoForm />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/help-center" element={<MainHelpCenter />} />
        <Route path="/help-center/sections/33851861355923-Billing" element={<Billing />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
