import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

/**
 * Contact Component
 *
 * A two-column section allowing visitors to get in touch.
 * Features:
 * - List of social/contact links with icons
 * - Contact form with name, email, and message fields
 * - Client-side form validation (required fields)
 * - Success toast notification after submission
 * - Responsive layout (stacked on mobile, side-by-side on desktop)
 *
 * Note: Form currently handles UI submission only (no backend integration).
 */
const Contact = () => {
    // Social media and contact links
    // Each link includes:
    // - URL: The destination (mailto or https)
    // - icon: Lucide icon component to render
    // - title: Display name for the platform
    // - displayURL: Text shown in the UI (can be truncated or formatted)
    const socials = [
        {
            URL: 'mailto:khufarzadasgari@gmail.com',
            icon: Mail,
            title: 'Email',
            displayURL: 'khufarzadasgari@gmail.com',
        },
        {
            URL: 'https://github.com/farzadasgari  ',
            icon: Github,
            title: 'GitHub',
            displayURL: 'https://github.com/farzadasgari  ',
        },
        {
            URL: 'https://www.linkedin.com/in/farzad-asgari/  ',
            icon: Linkedin,
            title: 'LinkedIn',
            displayURL: 'https://www.linkedin.com/in/farzad-asgari/  ',
        },
    ];

    // State to manage form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State to track if the form has been successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    /**
     * Handles input changes in the form
     * Updates the corresponding field in formData
     */
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    /**
     * Handles form submission
     * Prevents default form reload, sets isSubmitted to true, and resets form
     * Note: This is a frontend-only submission indicator
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 bg-gradient-to-bl from-slate-50 via-purple-100/50 to-slate-100 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <SectionTitle text="Get in Touch" />

                {/* Two-column layout: Social Links & Contact Form */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column: Social Contact Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 dark:text-slate-100">
                            Let's Connect!
                        </h3>
                        <div className="space-y-6">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        href={social.URL}
                                        className="flex items-center p-4 bg-white/10 rounded-lg border border-purple-400/20 hover:border-purple-400/80 transition-all duration-300 group"
                                        key={social.title}
                                    >
                                        <Icon className="w-6 h-6 text-purple-400 dark:text-purple-300 mr-4 transition-all duration-300 transform transform-gpu group-hover:scale-[1.1]" />
                                        <div>
                                            <div className="font-medium dark:text-slate-200">
                                                {social.title}
                                            </div>
                                            <div className="text-slate-500 text-sm dark:text-slate-300">
                                                {social.displayURL}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div className="mt-3">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2 dark:text-slate-200"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-white/10 border-2 border-slate-300/50 rounded-lg focus:border-purple-400 focus:ring-purple-400/20 focus:outline-none focus:ring-2 transition-all duration-300 text-slate-800 placeholder:text-slate-400/90 dark:placeholder:text-slate-300/90"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mt-3">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2 dark:text-slate-200"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="your_email@example.com"
                                    className="w-full px-4 py-3 bg-white/10 border-2 border-slate-300/50 rounded-lg focus:border-purple-400 focus:ring-purple-400/20 focus:outline-none focus:ring-2 transition-all duration-300 text-slate-800 placeholder:text-slate-400/90 dark:placeholder:text-slate-300/90"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="mt-3">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2 dark:text-slate-200"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    placeholder="Tell Me About Your Project..."
                                    className="w-full px-4 py-3 bg-white/10 border-2 border-slate-300/50 rounded-lg focus:border-purple-400 focus:ring-purple-400/20 focus:outline-none focus:ring-2 transition-all duration-300 text-slate-800 placeholder:text-slate-400/90 dark:placeholder:text-slate-300/90"
                                    style={{
                                        resize: 'none',
                                    }}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-3">
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform-gpu hover:scale-[1.01] shadow-md"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Success Toast Notification */}
                        {isSubmitted && (
                            <div
                                id="toast-success"
                                className="show-notification flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
                                role="alert"
                            >
                                <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="sr-only">Check icon</span>
                                </div>
                                <div className="ms-3 text-sm font-normal">
                                    Thank You! Your message has been sent
                                    successfully!
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
