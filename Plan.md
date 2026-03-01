Portfolio Website Implementation Plan
Building a professional portfolio for Sahil Kayasth based on his resume. The design will feature a "Light + Neon" aesthetic, emphasizing his background in Computer Science and MERN stack development.

Proposed Changes
[Backend] Python (FastAPI)
The backend will serve the resume data dynamically. This allows for easier updates and follows the user's requirement for Python in the backend.

[NEW] 
main.py
Create FastAPI application.
Define endpoints: GET /api/resume to return the full resume data.
Structured data based on the provided images:
Personal Information
Education
Internships
Projects
Positions of Responsibility
Technical Skills
[Frontend] React + Vite
A modern, responsive frontend using Vanilla CSS for a premium feel.

[NEW] 
Design System
Implement a color system:
Background: #fcfcfc (Soft White)
Primary: #00d4ff (Neon Cyan)
Secondary: #7000ff (Neon Purple)
Text Main: #333333
Text Muted: #666666
Typography: Inter or Roboto.
[NEW] [Components]
Hero: Name, contact info, and a brief "MERN Stack Developer" intro.
Education: Timeline of academic achievements.
Experience: Detailed layout for internships (Future Way & BISAG-N).
Projects: Card-based display of Safe Track, Technokruti, and Fitness Portfolio.
Skills: Neon-bordered chips for technical skills.
Extra: Positions of responsibility and courses.
Verification Plan
Automated Tests
pytest for backend API validation (checking if data structure matches).
Browser-based check for frontend rendering.
Manual Verification
Verify responsiveness on mobile, tablet, and desktop.
Confirm neon accents are prominent but professional.
Check that all information from the images is included and accurate.