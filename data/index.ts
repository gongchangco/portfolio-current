import { IconHome, IconArticle, IconBriefcase, IconMail } from "@tabler/icons-react";

export const navLinks = [
    { href: "/", label: "Home", icon: IconHome },
    { href: "/about", label: "About", icon: IconArticle },
    { href: "/projects", label: "Projects", icon: IconBriefcase },
    { href: "/contact", label: "Contact", icon: IconMail }
];

export const timeline = [
    {
        company: "Niksun Inc.",
        title: "Jr. Technical Engineer",
        date: "April 2023 - February 2024",
        description: "Product GUI and building internal systems",
        responsibilities: [
            "Develop an ERP system that improves work efficiency and enhance inventory management",
            "Collaborate with internal stakeholders to devise and enhabce web applications aimed at improving operational efficiency",
            "Enhance existing projects",
            "Participated in Agile/Scrum development methodologies, collaborating with cross-functional teams"
        ]
    },
    {
        company: "JTC Auto Tools",
        title: "Software and Full-Stack Developer",
        date: "January 2020 - March 2023",
        description: "Build automation scripts",
        responsibilities: [
            "Develop automation scripts to enhance work efficiency for Chief Executive Officer and warehouse workers",
            "Develop and deploy Visual Integration (VI) jobs to seamlessly upload real-time data from Excel spreadsheets to the Sage 100 ERP system",
            "Leverage SOAP/REST APIs to facilitate seamless communication with third-party systems"
        ]
    }
]