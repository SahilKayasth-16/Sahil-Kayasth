import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Mail, Phone, MapPin, GraduationCap, Briefcase,
    Code2, Rocket, Award, ExternalLink, ChevronRight,
    Linkedin, Github
} from 'lucide-react';

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/resume')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    if (loading) return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                style={{ width: 40, height: 40, border: '4px solid var(--primary)', borderRadius: '50%', borderTopColor: 'transparent' }}
            />
        </div>
    );

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="portfolio">
            {/* Hero Section */}
            <header className="section" style={{ background: 'linear-gradient(135deg, #fff 0%, #f0faff 100%)', paddingBottom: '4rem' }}>
                <div className="container">
                    <motion.div {...fadeIn}>
                        <span className="badge badge-cyan" style={{ marginBottom: '1rem' }}>Available for Jobs</span>
                        <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            <span style={{ color: 'var(--text-main)' }}>Hi, I'm </span>
                            <span style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {data.personal_info.name}
                            </span>
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', maxWidth: '700px', marginBottom: '2.5rem' }}>
                            A passionate <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{data.personal_info.title}</span> specializing in building robust web applications with modern technologies. Final year B.E. student at SNPIT&RC.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=:${data.personal_info.email}`} className="contact-link" rel="noopener noreferrer">
                                <Mail size={18} className="icon-cyan" />
                                <span>{data.personal_info.email}</span>
                            </a>
                            <a href={`tel:${data.personal_info.phone.replace(/\D/g, '')}`} className="contact-link" rel="noopener noreferrer">
                                <Phone size={18} className="icon-secondary" />
                                <span>{data.personal_info.phone}</span>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                                <MapPin size={18} />
                                <span>{data.personal_info.location}</span>
                            </div>
                        </div>

                        <a href="/Sahil%20Bharatkumar%20Kayasth%20Resume%20.pdf" download="Sahil_Kayasth_Resume.pdf" className="neon-btn" style={{ fontSize: '1.1rem', padding: '1rem 2rem', display: 'inline-block' }}>
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </header>

            {/* Experience Section */}
            <section className="section">
                <div className="container">
                    <motion.h2 {...fadeIn} style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                        Professional <span style={{ color: 'var(--primary)' }}>Experience</span>
                    </motion.h2>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {data.internships.map((exp, idx) => (
                            <motion.div key={idx} {...fadeIn} className="neon-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{exp.position}</h3>
                                        <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: '0.5rem' }}>{exp.company}</p>
                                    </div>
                                    <span className="badge badge-cyan">{exp.period}</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>{exp.location}</p>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                                    {exp.responsibilities.map((task, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{task}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <motion.h2 {...fadeIn} style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                        Featured <span style={{ color: 'var(--secondary)' }}>Projects</span>
                    </motion.h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {data.projects.map((project, idx) => (
                            <motion.div key={idx} {...fadeIn} className="neon-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                    <Rocket size={32} />
                                </div>
                                <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tech.split(',').map((t, i) => (
                                        <span key={i} className="badge badge-purple" style={{ fontSize: '0.7rem' }}>{t.trim()}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.period}</span>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px' }}>
                                        <ExternalLink size={20} style={{ cursor: 'pointer' }} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education & Skills */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
                        <div>
                            <motion.h2 {...fadeIn} style={{ fontSize: '2rem', marginBottom: '2rem' }}>Education</motion.h2>
                            <div style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '2rem' }}>
                                {data.education.map((edu, idx) => (
                                    <motion.div key={idx} {...fadeIn} style={{ marginBottom: '2.5rem', position: 'relative' }}>
                                        <div style={{ position: 'absolute', left: '-2.7rem', top: '0.3rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)', boxShadow: 'var(--neon-shadow-cyan)' }} />
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{edu.degree}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{edu.institution}</p>
                                        <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>{edu.period}</p>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.details}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <motion.h2 {...fadeIn} style={{ fontSize: '2rem', marginBottom: '2rem' }}>Technical Skills</motion.h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {data.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        {...fadeIn}
                                        whileHover={{ scale: 1.05 }}
                                        className="neon-card"
                                        style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}
                                    >
                                        <Code2 size={24} style={{ color: 'var(--primary)' }} />
                                        <span style={{ fontWeight: 600 }}>{skill}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.h2 {...fadeIn} style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '2rem' }}>Certifications</motion.h2>
                            {data.courses.map((course, idx) => (
                                <motion.div key={idx} {...fadeIn} className="neon-card" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Award size={24} style={{ color: 'var(--secondary)' }} />
                                        <div>
                                            <h4 style={{ fontSize: '1rem' }}>{course.title}</h4>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{course.institution}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Responsibility Section */}
            <section className="section" style={{ background: 'linear-gradient(to bottom, #fff, #f0faff)' }}>
                <div className="container">
                    <motion.h2 {...fadeIn} style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Leadership & <span style={{ color: 'var(--accent)' }}>Impact</span></motion.h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {data.responsibilities.map((res, idx) => (
                            <motion.div key={idx} {...fadeIn} className="neon-card" style={{ borderLeft: '4px solid var(--accent)' }}>
                                <h3 style={{ marginBottom: '0.5rem' }}>{res.role}</h3>
                                <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '1rem' }}>{res.event} | {res.organization}</p>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                                    {res.details.map((detail, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem' }}>{detail}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '4rem 0', background: 'var(--text-main)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Let's <span style={{ color: 'var(--primary)' }}>Connect</span></h2>
                    <p style={{ color: '#aaa', marginBottom: '2rem' }}>Currently looking for new opportunities and collaborations.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
                        <a href="https://www.linkedin.com/in/sahil-kayasth-388bb2228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="neon-btn" style={{ borderColor: 'white', color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.5rem' }}>
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/SahilKayasth-16" target="_blank" rel="noopener noreferrer" className="neon-btn" style={{ borderColor: 'var(--primary)', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.5rem' }}>
                            <Github size={20} />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#666' }}>© 2026 Sahil Kayasth.</p>
                </div>
            </footer >
        </div >
    );
};

export default App;
