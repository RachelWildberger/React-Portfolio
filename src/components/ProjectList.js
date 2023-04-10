import React from 'react';
import Project from '../pages/Projects';

export default function Project() {
    const projects = [
        {
            id: 0,
            title: "PWA: Text Editor",
            image: "../assets/images/project-1.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
            gitHub: "https://github.com/RachelWildberger/PWA-Text-Editor",
        },
        {
            id: 1,
            title: "Get a Job: Job Board",
            image: "../assets/images/project-2.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
            gitHub: "https://github.com/btkerns96/get-a-job",
        },
        {
            id: 2,
            title: "NoSQL: Social Network API",
            image: "../assets/images/project-3.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
            gitHub: "https://github.com/RachelWildberger/Social-Network-API",
        },
        {
            id: 3,
            title: "Employee Tracker",
            image: "../assets/images/project-4.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
            gitHub: "https://github.com/RachelWildberger/Employee-Tracker",
        },
    ];


    return (

            <section className="content-section">
                {/* <div className="container px-4 px-lg-5">
                    <div className="content-section-heading text-center">
                        <h1 className="mb-0">Portfolio</h1>
                        <p className="mb-">This is a test</p>
                    </div>
                </div> */}

            </section>
    );
}
