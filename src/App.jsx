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
import SkillsPath from "./pages/SkillsPath";
import DemoForm from "./loginSystem/DemoForm";
import Catalog from "./pages/Catalog";
import BlindNoSql from "./pages/course/BlindNoSql";
import DoubleTrouble from "./pages/mission/threat/DoubleTrouble";
import SpaceMission from "./pages/mission/course/SpaceMission";
import AzureCloud from "./pages/careerpath/AzureCloud";
import IncidentHandler from "./pages/careerpath/IncidentHandler";

import MainHelpCenter from "./pages/MainHelpCenter";
import Billing from "./pages/helpcenter/Billing";
import Certifications from "./pages/Certifications";
import MagicHound from "./pages/mission/threat/MagicHound";
import FreeAccess from "./pages/FreeAccess";
import Careers from "./pages/Footer/Careers";
import CybraryPodcast from "./pages/Footer/CybraryPodcast";
import FellowMonster from "./pages/mission/course/FellowMonster";
import Message from "./pages/mission/course/Message";
import FrameworkAlignment from "./pages/FrameworkAlignment";
import Government from "./pages/Footer/Government";
import RaspberryRobin from "./pages/mission/threat/RaspberryRobin";
import SystemAdministrator from "./pages/careerpath/SystemAdministrator";
import BigIp from "./pages/course/BigIp";
import Webinar from "./pages/Footer/Webinar";
import SecurityPlus from "./pages/certifications/beginner/SecurityPlus";
import ComptiaProjectPlus from "./pages/certifications/beginner/ComptiaProjectPlus";
import AzureFundamentals from "./pages/certifications/beginner/AzureFundamentals";
import ComptiaAPlus from "./pages/certifications/beginner/ComptiaAPlus";
import CisaCertifications from "./pages/certifications/intermediate/CisaCertifications";
import CertNexus from "./pages/certifications/intermediate/CertNexus";
import CloudSecurity from "./pages/certifications/intermediate/CloudSecurity";
import AwsSecurity from "./pages/certifications/intermediate/AwsSecurity";
import CriscCertifications from "./pages/certifications/advance/CriscCerifications";
import ComptiaCasp from "./pages/certifications/advance/ComptiaCasp";
import CisspCertifications from "./pages/certifications/advance/CisspCertifications";
import MitreAttackFramework from "./pages/course/MitreAttackFramework";
import CyberSecurityEngineer from "./pages/careerpath/CyberSecurity";

function App() {
  const location = useLocation();

  // Pages where Navbar and Footer should not appear
  const hideNavbarAndFooter = [
    "/login", 
    "/forum",
    "/help-center",
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
          <Route path="/free-content" element={<FreeAccess />} />

          <Route path="/certification-prep-courses/security-plus" element={<SecurityPlus />} />
          <Route path="/course/comptia-project-plus-pk0-004" element={<ComptiaProjectPlus />} />
          <Route path="/certification-prep-courses/microsoft-azure-fundamentals" element={<AzureFundamentals />} />
          <Route path="/course/comptia-a-plus" element={<ComptiaAPlus />} />
          <Route path="/certification-prep-courses/certified-information-systems-auditor" element={<CisaCertifications />} />
          <Route path="/certification-prep-courses/cybersec-first-responder" element={<CertNexus />} />
          <Route path="/certification-prep-courses/certified-cloud-security-professional" element={<CloudSecurity />} />
          <Route path="/certification-prep-courses/aws-certified-security-specialty" element={<AwsSecurity />} />
          <Route path="/certification-prep-courses/certified-in-risk-and-information-systems-control-crisc" element={<CriscCertifications />} />
          <Route path="/certification-prep-courses/designing-microsoft-azure-infrastructure-solutions" element={<CriscCertifications />} />
          <Route path="/certification-prep-courses/casp-plus" element={<ComptiaCasp />} />
          <Route path="/course/certified-information-systems-security-professional" element={<CisspCertifications />} />
          <Route path="course/application-of-the-mitre-attack-framework" element={<MitreAttackFramework />} />

          <Route path="career-path/network-engineer" element={<NetworkEngineer />} />
          <Route path="career-path/microsoft-azure-cloud-engineer" element={<AzureCloud />} />
          <Route path="career-path/incident-handler" element={<IncidentHandler />} />
          <Route path="career-path/system-administrator" element={<SystemAdministrator />} />
          <Route path="career-path/soc-analyst" element={<SocAnalyst />} />
          <Route path="career-path/security-engineer" element={<CyberSecurityEngineer />} />

          <Route path="threat-actor-campaign/weak-link-in-the-supply-chain" element={<SupplyChain />} />
          <Route path="threat-actor-campaign/double-trouble-with-double-dragon" element={<DoubleTrouble />} />
          <Route path="threat-actor-campaign/raspberry-robin" element={<RaspberryRobin />} />
          <Route path="threat-actor-campaign/magic-hound" element={<MagicHound />} />

          <Route path="course/cve-series-couchdb-rce-cve-2022-24706" element={<CouchDBRCE />} />
          <Route path="course/cve-series-f5-big-ip-cve-2022-1388" element={<BigIp />} />
          <Route path="course/cve-series-blind-nosql-injection-cve-2021-22911" element={<BlindNoSql />} />
          <Route path="course/cve-series-grafana-directory-traversal-cve-2021-43798" element={<GrafanaDirectory />} />
          <Route path="course/cve-series-atlassian-bitbucket-command-injection-cve-2022-36804" element={<AtlassianBitbucket />} />
          <Route path="course/cve-series-apache-httpd-cve-2021-42013" element={<ApacheHttpd />} />

          <Route path="/course/cybrary-challenge-space-mission1" element={<SpaceMission />} />
          <Route path="/course/cybrary-challenge-saving-a-fellow-monster" element={<FellowMonster />} />
          <Route path="/course/cybrary-challenge-a-message-within-a-message" element={<Message />} />

          <Route path="/mitre-attack" element={<MitreAttack />} />
          <Route path="/alliances" element={<Alliances />} />
          <Route path="/industry" element={<FrameworkAlignment />} />
          <Route path="/government" element={<Government />} />
          <Route path="/practice-lab/log-analysis-basics" element={<SocAnalyst />} />
          <Route path="/fortifylearning-impact-hub" element={<Impact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/upgrade" element={<Pricing />} />
          <Route path="/instructor" element={<Instructors />} />
          <Route path="/demo-request" element={<DemoForm />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/certification-prep" element={<Certifications />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/podcast" element={<CybraryPodcast />} />
          <Route path="/webinar" element={<Webinar />} />

          
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
