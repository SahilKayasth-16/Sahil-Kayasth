from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Sahil Kayasth Portfolio API")

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

resume_data = {
    "personal_info": {
        "name": "Sahil Bharatkumar Kayasth",
        "phone": "+91 8320727731",
        "email": "sahilk16.sk@gmail.com",
        "location": "H-302, Shukan Residency, Baben-Mota Road, Baben-394601, Ta. Bardoli, Di.Surat",
        "title": "Full Stack Developer (MERN Stack)"
    },
    "education": [
        {
            "institution": "S. N. Patel Institute of Technology & Research Centre [GTU]",
            "location": "Bardoli, IND",
            "degree": "Bachelors of Engineering in Computer Science",
            "period": "Sep 2022 - April 2026",
            "details": "CGPA: 7.93 (SEM-7)"
        },
        {
            "institution": "SBR Science School",
            "location": "Bardoli, IND",
            "degree": "Higher Secondary Certificate",
            "period": "June 2021 - March 2022",
            "details": "Percentile: 76.37"
        },
        {
            "institution": "The Kadod English Medium School",
            "location": "Kadod, IND",
            "degree": "Secondary School Certificate",
            "period": "June 2019 - March 2020",
            "details": "Percentile: 98.32"
        }
    ],
    "internships": [
        {
            "company": "Bhaskaracharya National Institute for Space Applications & Geo-informatics (BISAG-N)",
            "location": "Gandhinagar, IND",
            "position": "MERN Stack developer Intern",
            "period": "5th January 2026 - Present",
            "responsibilities": [
                "Developed a GIS-based web platform for urban planning using React (Vite) and FastAPI (Python).",
                "Implemented role-based access control (RBAC) for multiple user types.",
                "Designed and integrated business registration and approval workflows.",
                "Built RESTful APIs using FastAPI and SQLAlchemy ORM.",
                "Integrated PostgreSQL (PostGIS-ready) database for geospatial data.",
                "Developed JWT-based authentication system."
            ]
        },
        {
            "company": "Future Way Institute of Multimedia",
            "location": "Surat, IND",
            "position": "Web developer Intern",
            "period": "1st July 2025 - 31st July 2025",
            "responsibilities": [
                "Developed a role-based access control system using Laravel 12.",
                "Implemented authentication and authorization using the Spatie package.",
                "Designed and handled CRUD operations in a MySQL database.",
                "Connected Laravel project to a MySQL database and managed data flow.",
                "Practiced error solving and debugging during development."
            ]
        }
    ],
    "projects": [
        {
            "title": "Safe Track",
            "tech": "Java, HTML, CSS, JavaScript, PHP",
            "period": "January 2025 - November 2025",
            "description": "Android Based Application which ensures the safety & empowerment of women. Includes a static website for promotion.",
            "url": "https://github.com/SahilKayasth-16/SafeTrack_website"
        },
        {
            "title": "Technokruti 2K25-Techfest Website",
            "tech": "HTML, CSS, JavaScript",
            "period": "Dec 2024 - Feb 2025",
            "description": "A website containing information about a national level Techfest where students can download rules and register.",
            "url": "https://github.com/SahilKayasth-16/TechnoKruti-2025"
        },
        {
            "title": "Fitness Trainer Portfolio",
            "tech": "MERN Stack",
            "period": "June 2025 - October 2025",
            "description": "A portfolio website for a fitness trainer with a consultation form and email notification system. Includes an admin-managed transformation page.",
            "url": "https://www.tpnutrition.in/"
        }
    ],
    "responsibilities": [
        {
            "role": "Institute level student coordinator",
            "event": "National Level Techfest 'Technokruti-2k25'",
            "organization": "SNPIT&RC, IND",
            "period": "Dec 2024-Feb 2025",
            "details": [
                "Organize 45+ events including technical and non-technical events.",
                "Managed campaigning activities, engagement of sponsors & social media promotions.",
                "Coordinate with faculties & student coordinators."
            ]
        }
    ],
    "skills": ["Web development", "Software Engineering", "MERN Stack"],
    "courses": [
        {
            "title": "Full Stack Web Development with MERN Stack",
            "institution": "SSM Learning Excellence Centre"
        }
    ]
}

@app.get("/api/resume")
async def get_resume():
    return resume_data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
