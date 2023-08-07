import React, { useState } from 'react';
import './generalcareer.css';
import NavBar from '../Components/navBar';

const GeneralCareer = () => {
    const [educationalQualifications, setEducationalQualifications] = useState('');
    const [skills, setSkills] = useState('');
    const [interests, setInterests] = useState('');
    const [workEnvironment, setWorkEnvironment] = useState('');
    const [industries, setIndustries] = useState('');
    const [careerGoals, setCareerGoals] = useState('');
    const [otherSpecificThings, setOtherSpecificThings] = useState('');

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'educationalQualifications':
                setEducationalQualifications(value);
                break;
            case 'skills':
                setSkills(value);
                break;
            case 'interests':
                setInterests(value);
                break;
            case 'workEnvironment':
                setWorkEnvironment(value);
                break;
            case 'industries':
                setIndustries(value);
                break;
            case 'careerGoals':
                setCareerGoals(value);
                break;
            case 'otherSpecificThings':
                setOtherSpecificThings(value);
                break;
            default:
                break;
        }
        setFormErrors({ ...formErrors, [id]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        // validation
        if (!educationalQualifications.trim()) {
            errors.educationalQualifications = 'Educational qualifications are required.';
        }

        if (!skills.trim()) {
            errors.skills = 'Skills are required.';
        }

        if (!interests.trim()) {
            errors.interests = 'Interests are required.';
        }

        if (!workEnvironment.trim()) {
            errors.workEnvironment = 'Work environment is required.';
        }

        if (!industries.trim()) {
            errors.industries = 'Industries/fields are required.';
        }

        if (!careerGoals.trim()) {
            errors.careerGoals = 'Career goals are required.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            // If no errors, call your function to send the data here
            // For example: sendData(formData);
            alert('successfully submitted');
            console.log('Form data submitted:', {
                educationalQualifications,
                skills,
                interests,
                workEnvironment,
                industries,
                careerGoals,
                otherSpecificThings,
            });
        }
    };

    return (
        <React.Fragment>
            <NavBar/>
            <div className='maincontainerg d-flex justify-content-center'>
                <div className='formbox w-50 p-4 m-5'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${formErrors.educationalQualifications && 'is-invalid'}`}
                                id="educationalQualifications"
                                placeholder="Your educational qualifications"
                                value={educationalQualifications}
                                onChange={handleChange}
                            />
                            <label htmlFor="educationalQualifications">Your educational qualifications.</label>
                            {formErrors.educationalQualifications && (
                                <div className="invalid-feedback">{formErrors.educationalQualifications}</div>
                            )}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${formErrors.skills && 'is-invalid'}`}
                                id="skills"
                                placeholder="Your specific skills/areas of expertise"
                                value={skills}
                                onChange={handleChange}
                            />
                            <label htmlFor="skills">Specific skills/areas of expertise you possess</label>
                            {formErrors.skills && (
                                <div className="invalid-feedback">{formErrors.skills}</div>
                            )}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${formErrors.interests && 'is-invalid'}`}
                                id="interests"
                                placeholder="Your interests and passions"
                                value={interests}
                                onChange={handleChange}
                            />
                            <label htmlFor="interests">Your interests and passions.</label>
                            {formErrors.interests && (
                                <div className="invalid-feedback">{formErrors.interests}</div>
                            )}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${formErrors.workEnvironment && 'is-invalid'}`}
                                id="workEnvironment"
                                placeholder="Your preferred work environment"
                                value={workEnvironment}
                                onChange={handleChange}
                            />
                            <label htmlFor="workEnvironment">Preferred work environment</label>
                            {formErrors.workEnvironment && (
                                <div className="invalid-feedback">{formErrors.workEnvironment}</div>
                            )}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${formErrors.industries && 'is-invalid'}`}
                                id="industries"
                                placeholder="Industries/fields you are interested in"
                                value={industries}
                                onChange={handleChange}
                            />
                            <label htmlFor="industries">Industries/fields you are particularly interested in</label>
                            {formErrors.industries && (
                                <div className="invalid-feedback">{formErrors.industries}</div>
                            )}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${formErrors.careerGoals && 'is-invalid'}`}
                                id="careerGoals"
                                placeholder="Your long-term career goals"
                                value={careerGoals}
                                onChange={handleChange}
                            />
                            <label htmlFor="careerGoals">Long-term career goals, if you have any</label>
                            {formErrors.careerGoals && (
                                <div className="invalid-feedback">{formErrors.careerGoals}</div>
                            )}
                        </div>

                        <div className="form-floating">
                            <textarea
                                className={`form-control ${formErrors.otherSpecificThings && 'is-invalid'}`}
                                placeholder="Leave a comment here"
                                id="otherSpecificThings"
                                value={otherSpecificThings}
                                onChange={handleChange}
                            />
                            <label htmlFor="otherSpecificThings">Other specific things</label>
                            {formErrors.otherSpecificThings && (
                                <div className="invalid-feedback">{formErrors.otherSpecificThings}</div>
                            )}
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>

                <div className='answeroptions w-50 p-4 m-5'>
                    <div className='bg-light p-2 m-1'>
                        <p>
                        a) If you have a degree in computer science or engineering:

                            Software Developer/Engineer
                            Web Developer
                            Data Analyst/Scientist
                            IT Consultant
                            Systems Administrator
                            b) If you have a degree in business or finance:

                            Financial Analyst
                            Business Analyst
                            Management Consultant
                            Marketing Specialist/Manager
                            Human Resources Manager
                        </p>

                    </div>

                    <div className='bg-light p-2 m-1'>
                        <p>
                        Specific Skills or Areas of Expertise:
                        a) If you are skilled in programming and coding:

                        Full-stack Developer
                        Mobile App Developer
                        Machine Learning Engineer
                        Cybersecurity Analyst
                        b) If you have strong communication and interpersonal skills:

                        Sales Representative
                        Public Relations Specialist
                        Human Resources Manager
                        Customer Success Manager
                        </p>

                    </div>

                    <div className='bg-light p-2 m-1'>
                        <p>
                        Interests and Passions:
                        a) If you are passionate about technology and innovation:

                        Technology Researcher
                        Tech Entrepreneur
                        User Experience (UX) Designer
                        Technology Journalist
                        b) If you have a strong interest in environmental issues:

                        Environmental Scientist
                        Sustainability Consultant
                        Renewable Energy Engineer
                        Conservation Biologist
                        </p>

                    </div>

                    <div className='bg-light p-2 m-1'>
                        <p>
                        Preferred Work Environment:
                        a) If you prefer working in an office setting:

                        Project Manager
                        Accountant
                        Business Development Manager
                        Market Research Analyst
                        b) If you prefer working outdoors or in nature:

                        Environmental Consultant
                        Landscape Architect
                        Outdoor Adventure Guide
                        Wildlife Biologist
                        </p>

                    </div>

                    <div className='bg-light p-2 m-1'>
                        <p>
                        Industries or Fields of Interest:
                            a) If you are interested in healthcare:

                            Nurse
                            Health Informatics Specialist
                            Medical Researcher
                            Healthcare Administrator
                            b) If you are interested in the creative industry:

                            Graphic Designer
                            Content Creator
                            Film Director
                            Creative Director
                        </p>

                    </div>

                    <div className='bg-light p-2 m-1'>
                        <p>
                        Long-term Career Goals:
                        a) If your long-term goal is to lead and manage a team:

                        Project Manager
                        Operations Manager
                        Business Development Director
                        Marketing Manager
                        b) If you aspire to make a social impact:

                        Non-profit Manager
                        Social Worker
                        Community Outreach Coordinator
                        Human Rights Advocate
                        </p>

                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default GeneralCareer;
