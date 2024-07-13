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
            "Developed and refined automation solutions for internal applications, enhancing workflow efficiency.",
            "Utilized the PEVN tech stack to construct robust web applications.",
            "Collaborate with internal stakeholders to devise and enhabce web applications.",
            "Led initiatives to enhance and automate existing projects using PHP and Angular.",
            "Participated in Agile/Scrum development methodologies."
        ]
    },
    {
        company: "JTC Auto Tools",
        title: "Software and Full-Stack Developer",
        date: "01/2020 - 03/2023",
        description: "Build automation scripts",
        responsibilities: [
            "Develop automation scripts to enhance work efficiency for workers.",
            "Develop and deploy Visual Integration jobs to seamlessly upload data to the Sage 100 ERP system.",
            "Leverage SOAP/REST APIs to facilitate seamless communication with third-party systems.",
            "Increase efficiency into the ERP system by applying barcode text format to scan from sheets into Crystal Reports."
        ]
    },
    {
        company: "JTC Auto Tools",
        title: "Web Develoepr and Ecommerce Manager",
        date: "08/2016 - 01/2020",
        responsibilities: [
            "Implement a robust CMS, enabling seamless content updates and maintenance for the e-commerce website.",
            "Utilize custom code solutions to meet specific business requirements.",
            "Revised item images and descriptions to make sure ecommerce site follows the Code of Conduct.",
            "Collaborate with international partners to standardize product images and descriptions."
        ]
    }
]