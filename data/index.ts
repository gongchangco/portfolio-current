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
        date: "04/2023 - 02/2024",
        description: "Product GUI and building internal systems",
        responsibilities: [
            "Developed and refined automation solutions for internal applications, enhancing workflow efficiency and facilitating smooth transitions to new projects.",
            "Utilized the PEVN (PostgreSQL, Express, Vue, Node) tech stack to construct robust web applications, including an ERP system optimized for inventory management.",
            "Collaborate with internal stakeholders to devise and enhabce web applications aimed at improving operational efficiency",
            "Led initiatives to enhance and automate existing projects using PHP and Angular.",
            "Participated in Agile/Scrum development methodologies, collaborating with cross-functional teams"
        ]
    },
    {
        company: "JTC Auto Tools",
        title: "Software and Full-Stack Developer",
        date: "01/2020 - 03/2023",
        description: "Build automation scripts",
        responsibilities: [
            "Develop automation scripts to enhance work efficiency for Chief Executive Officer and warehouse workers",
            "Develop and deploy Visual Integration (VI) jobs to seamlessly upload real-time data from Excel spreadsheets to the Sage 100 ERP system",
            "Leverage SOAP/REST APIs to facilitate seamless communication with third-party systems",
            "Reduce time consumption and errors when inputting information into the ERP system by applying barcode text format to scan from picking/packing sheets using Crystal Reports."
        ]
    },
    {
        company: "JTC Auto Tools",
        title: "Web Develoepr and Ecommerce Manager",
        date: "08/2016 - 01/2020",
        responsibilities: [
            "Implemented a robust content management system (CMS) using PHP (WordPress), JavaScript, and MySQL, enabling seamless content updates and maintenance for the e-commerce website.",
            "Took ownership of product management, inventory updates, and UI/UX enhancements, utilizing custom code solutions to tailor the website to meet specific business requirements.",
            "Revised item images and descriptions to make sure e-commerce site follows the Code of Conduct.",
            "Collaborated with international partners to standardize product images and descriptions, ensuring consistency and compliance with company standards and industry regulations."
        ]
    }
]