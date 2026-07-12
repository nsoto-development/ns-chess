// Portfolio content — sourced from Nelson Soto's resume (July 2026) + provided
// profile links. Kept separate from layout so copy is easy to spot/edit.
window.PORTFOLIO_DATA = {
  nav: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  links: {
    github: "https://github.com/nsoto-development",
    linkedin: "https://linkedin.com/in/nsoto-development",
    email: "nsoto.development@gmail.com",
  },
  hero: {
    eyebrow: "</ COMING SOON. STAY TUNED >",
    headline: "20 years of full-stack engineering.",
    sub: "Senior software engineer based in Jacksonville, FL. Cloud migrations, legacy modernization, and enterprise integrations across C#, JavaScript, and SQL.",
  },
  experience: [
    {
      id: "sedgwick",
      company: "Sedgwick Repair Solutions",
      role: "Senior IT Application Specialist",
      dates: "Feb 2026 – Current",
      location: "Jacksonville, FL",
      detail:
        "Maintain .NET data ingestion pipelines between XactAnalysis, Cotality, and Salesforce over HTTP/SFTP. Configured a Cursor workspace against legacy Visual SourceSafe repos to preserve system knowledge after the original architect's retirement, and authored a phased VSS-to-Git migration plan.",
      stack: ["C#", ".NET", "Salesforce", "SFTP", "Cursor / AI-assisted dev"],
      status: "Current",
      category: "integration",
    },
    {
      id: "southeastern",
      company: "Southeastern Aluminum Products",
      role: "Systems Software Engineer",
      dates: "Sept 2024 – Aug 2025",
      location: "Jacksonville, FL",
      detail:
        "Led an Azure migration from legacy server hosting — 15–20% lower hosting cost, ~10% better performance. Reverse-engineered Syspro ERP integrations, directed a WordPress redesign, and built ETL processes against the ERP schema.",
      stack: ["Azure", "Syspro ERP", "C#", "VB6", "SQL Server"],
      status: "Cloud",
      category: "cloud",
    },
    {
      id: "caci",
      company: "CACI Federal",
      role: "Software Engineer (Remote)",
      dates: "Sept 2022 – Jun 2024",
      location: "Rome, NY",
      detail:
        "Built WebCV, a no/low-code data visualization platform for the Air Force Research Laboratory. Integrated Cytoscape.js for network graph visualization and implemented a custom graph-traversal algorithm; built the ETL back end on Node-RED with custom nodes.",
      stack: ["JavaScript", "Node-RED", "Cytoscape.js", "GIS"],
      status: "Federal",
      category: "data",
    },
    {
      id: "proverde",
      company: "ProVerde Laboratories",
      role: "Lead Application Developer",
      dates: "Nov 2013 – Jul 2019",
      location: "Milford, MA",
      detail:
        "Designed the architecture for ProVerde's centralized cloud platform: an ASP.NET Web API over an in-house MySQL sample-tracking database (Amazon RDS), a customer ordering portal in AngularJS, and integrated BlueSnap, USAePay, FedEx Ship API, and Sage 50.",
      stack: ["ASP.NET", "AngularJS", "MySQL", "AWS RDS"],
      status: "Architecture",
      category: "cloud",
    },
  ],
  skills: {
    groups: [
      { label: "Languages / Frameworks", items: ["C#", ".NET 8", "ASP.NET", "JavaScript", "Node.js", "React", "Vue / Quasar", "Angular"] },
      { label: "Databases", items: ["SQL Server", "MySQL", "Postgres", "MongoDB", "CosmosDB"] },
      { label: "Cloud / DevOps", items: ["Azure", "AWS", "Google Cloud", "Docker"] },
      { label: "Integration & Data", items: ["Node-RED", "Salesforce", "Cytoscape.js", "Syspro ERP"] },
      { label: "GIS", items: ["ESRI ArcGIS Server", "ThinkGeo", "OpenLayers"] },
    ],
  },
  about: {
    paragraph:
      "Senior software engineer with 20 years of full-stack development, systems integration, and cloud infrastructure experience. I've led an Azure migration that cut hosting costs, modernized legacy .NET systems, and built Node.js/Node-RED data pipelines and enterprise integrations across ERP, CRM, and GIS systems — with a growing focus on applying AI-assisted workflows to modernize legacy systems and preserve institutional knowledge.",
  },
  footer: {
    copyright: "© " + new Date().getFullYear() + " nsoto.dev",
  },
};
