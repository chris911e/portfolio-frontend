export const experience = {
    de: {

    },
    en: {
        career: [
            {
                id: 1,
                timeRange: "March 2026 - Present",
                logo: "AXA.png",
                title: "AXA",
                shortTitle: "AXA",
                underTitle: "Part-Time, Zurich",
                shortDescription: "DevOps Engineer Working Student",
                detailedDescription: {
                    teams: [
                        {
                            id: 1,
                            title: "Tasks",
                            points: [
                                "Extended regression tests across 4 JMeter test plans with BeanShell assertions, raising test coverage from 70% to 95%, including documentation",
                                "Optimised test-data SQL queries through tighter scoping, cutting queried data volume by approx. 33%",
                                "Remediated critical vulnerabilities through dependency upgrades, code refactoring and migration of Helm repositories",
                            ]
                        },
                    ]
                }
            },
            {
                id: 2,
                timeRange: "August 2022 - July 2025",
                logo: "SwissRe.png",
                title: "Swiss Re",
                shortTitle: "Swiss Re",
                underTitle: "Part-Time, Zurich",
                shortDescription: "Software Engineer Apprentice",
                detailedDescription: {
                    teams: [
                        {
                            id: 1,
                            title: "Final Project (IPA)",
                            points: [
                                "Delivered an end-to-end enhancement of the alerting service within a 10-day timeline, implementing a RBAC-Solution using Microsoft Entra ID for email template management, live HTML preview functionality within the Self-Service-Portal, Kubernetes deployment using Helm Charts via Azure DevOps, extensive documentation with UML-Standard diagrams and complete test suite implementation.",
                                "Achieved a Grade of 5.9 / 6.0"
                            ]
                        },
                        {
                            id: 2,
                            title: "Logging & Monitoring · September 2023 - July 2025",
                            points: [
                                "Final Project",
                                "Cut start-up load time of a legacy application by 30% by optimising data loading",
                                "Refactored a legacy application (data structures, modular functions), improving performance by 20% and maintainability",
                                "Maintained CI/CD pipelines for deploying applications to Kubernetes with Azure DevOps, Helm and Terraform",
                            ]
                        },
                        {
                            id: 3,
                            title: "Detection & Engineering · August 2022 - August 2023",
                            points: [
                                "Developeddetectionrules(KQL)formaliciousSMBfiletransfersviaCobaltStrike",
                                "Analysed vulnerabilities using MITRE ATT&CK and presented findings to stakeholders",
                            ]
                        },
                    ]
                }
            }
        ],
        education: [
            {
                id: 1,
                timeRange: "September 2025 - Present",
                logo: "ZHAW.jpg",
                title: "ZHAW School of Engineering",
                shortTitle: "ZHAW SoE",
                underTitle: "Part-Time, Zurich",
                shortDescription: "BSc of Sciences in Computer Science",
                detailedDescription: {
                    info: [
                        {
                            id: 1,
                            title: "Bachelor Thesis",
                            points: [
                                "undefined",
                            ]
                        }
                    ],
                    completed: false,
                    grade: 5.4
                }
            },
            {
                id: 2,
                timeRange: "August 2021 - July 2025",
                logo: "BBW.jpg",
                title: "BBW Vocational Training School",
                shortTitle: "BBW",
                underTitle: "Part-Time, Zurich",
                shortDescription: "Swiss Certificate of Competence in Software Engineering",
                detailedDescription: {
                    info: [
                        {
                            id: 1,
                            title: "Covered Topics",
                            points: [
                                "Application Development & Testing - Building and testing secure applications",
                                "DevOps & Automation - CI/CD pipelines, containerization, scripting",
                                "Software Architecture & Design - Distributed systems, OOP, functional programming",
                                "Database Technologies - SQL, NoSQL, data modeling and analysis",
                                "Cloud Infrastructure - Cloud solutions, container services, IT infrastructure",
                                "Security & Data Protection - Application security, encryption, data privacy",
                                "Agile Development - Agile methodologies, UI design, iterative processes",
                                "ICT Innovation - Implementing innovative ICT solutions on an Arduino with C++",
                                "Professional Practice - Project management, independent task execution",
                                "Web Technologies - Web application development and deployment"
                            ]
                        }
                    ],
                    completed: true,
                    grade: 5.7
                }
            }
        ],
    }
} as const

export const projects = [
    {
        id: 1,
        name: "Home Infra",
        preview: "/gif/infra.gif",
        shortDescription: "End to end reliable multi-stage home infrastructure self-hosted on my personal Home Lab for my personal projects",
        tags: [
            "Kubernetes", "Grafana", "ArgoCD", "GitOps", "Obsverability", "Logging", "Helm"
        ],
        github: "https://github.com/chris911e/helm",
        status: "active"
    },
    {
        id: 2,
        name: "Portfolio",
        preview: "/gif/portfolio.gif",
        shortDescription: "Simple personal portfolio site, showcasing my experience & projects and served as test subject for my Home Infra",
        tags: [
            "React.js", "TypeScript", "Vite", "GitHub Actions"
        ],
        github: "https://github.com/chris911e/portfolio-frontend",
        status: "active"
    },
] as const