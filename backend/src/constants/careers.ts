export const CAREERS = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Mobile Developer",
  "Desktop Application Developer",
  "Game Developer",

  "Data Analyst",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Data Engineer",
  "Business Intelligence (BI) Analyst",

  "DevOps Engineer",
  "Site Reliability Engineer",
  "Cloud Engineer",
  "Systems Administrator",
  "Platform Engineer",

  "Cybersecurity Engineer",
  "Security Analyst",
  "Penetration Tester",
  "Application Security Engineer",

  "UI/UX Designer",
  "Product Designer",
  "Product Manager",
  "Technical Product Manager",

  "QA Engineer",
  "Software Tester",
  "Test Automation Engineer",

  "Blockchain Developer",
  "Embedded Systems Engineer",
  "IoT Engineer",
  "AR/VR Developer",

  "Solutions Architect",
  "Technical Support Engineer",
  "Database Administrator",
] as const;

export type Career = (typeof CAREERS)[number];
