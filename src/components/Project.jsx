import { useState } from "react";
import { Card, CardContent } from "./ui/Card";
import Badge from "./ui/Badge";

export default function Project() {
	const projects = [
		{
			name: "SIMPELMAS - Public Complaint System",
			description: "A comprehensive public reporting platform featuring three-level user authentication (citizen, worker, admin). Includes file upload for evidence, real-time status tracking, and automated PDF report generation.",
			image: "https://raw.githubusercontent.com/gusalitt/simpelmas/refs/heads/main/public/assets/img/preview.png",
			link: "https://github.com/gusalitt/simpelmas",
			tags: ["PHP Native", "MySQL", "Tailwind CSS", "JavaScript"],
		},
		{
			name: "SevaGent - AI Chatbot System",
			description: "Team Project focused on building a modern chatbot application with automated token and context management for continuous AI responses. I contributed as a backend developer, managing API data flows and efficient Ollama model integration.",
			image: "./assets/projects/sevagent-preview.png",
			link: "https://github.com/VibeOps-Dev/SevaGent",
			tags: ["Express.js", "Vue.js", "Ollama", "PostgreSQL", "UnoCSS"],
		},
		{
			name: "SevaWash - Laundry Management System",
			description: "Team project focused on managing laundry services and tracking order status with quick and efficient process. I contributed as a backend developer.",
			image: "./assets/projects/sevawash-preview.png",
			link: "https://github.com/VibeOps-Dev/SevaWash",
			tags: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
		},
		{
			name: "LibraryHub (JavaScript Version)",
			description: "A modern library management web app built with the JavaScript stack, providing book browsing, reading, and management features with an improved UI and responsive design.",
			image: "https://raw.githubusercontent.com/gusalitt/libraryhub/refs/heads/main/client/public/preview.png",
			link: "https://github.com/gusalitt/libraryhub",
			tags: ["React", "Express", "Supabase (PostgreSQL)", "Tailwind CSS"],
		},
		{
			name: "Counseling App",
			description: "Web-based application for managing student counseling records and streamlining administrative workflows in schools.",
			image: "https://raw.githubusercontent.com/gusalitt/app-bimbingan-konseling/refs/heads/main/public/assets/img/dashboard-view-in-light-mode.png",
			link: "https://github.com/gusalitt/app-bimbingan-konseling",
			tags: ["CodeIgniter", "Tailwind CSS", "MySQL"],
		},
		{
			name: "Library App (PHP Version)",
			description: "A Simple Library system designed to handle book management, borrowing, and return tracking through a simple web interface.",
			image: "https://raw.githubusercontent.com/gusalitt/Aplikasi-Perpustakaan/refs/heads/main/admin/assets/img/home_admin.png",
			link: "https://github.com/gusalitt/Aplikasi-Perpustakaan",
			tags: ["PHP Native", "CSS", "MySQL"],
		},
	];

	const [visibleCount, setVisibleCount] = useState(3);
	const visibleProjects = projects.slice(0, visibleCount);
	const hasMore = visibleCount < projects.length;

	return (
		<section id="projects" className="section-padding">
			<div className="container lg:px-28">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl font-bold mb-4">My Projects</h2>
					<p className="text-muted-foreground">These are some projects I've worked on using various tools and technologies I've learned along the way.</p>
				</div>

				<div className="space-y-10">
					{/* Project cards */}
					{visibleProjects.map((project, index) => (
						<Card key={index} className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-background flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
							<div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
								<img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
								<div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							<CardContent className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
								<h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.name}</h3>
								<p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, idx) => (
										<Badge key={idx} variant="outline" className="border-primary/30 text-xs md:text-sm">
											{tag}
										</Badge>
									))}
								</div>
								<a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
									View Project <span className="ml-1 group-hover:ml-2 transition-all">→</span>
								</a>
							</CardContent>
						</Card>
					))}

					{/* Load More Button */}
					{hasMore && (
						<div className="text-center mt-10">
							<button
								onClick={() => setVisibleCount((prev) => Math.min(prev + 2, projects.length))}
								className="cursor-pointer inline-flex items-center gap-3 bg-background hover:bg-muted/50 px-6 py-3 rounded-full border border-border hover:border-primary/20 transition-all duration-300"
							>
								Load More Projects
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m7-7v14" />
								</svg>
							</button>
							<p className="text-sm text-muted-foreground mt-3">
								Showing {visibleCount} of {projects.length} projects
							</p>
						</div>
					)}

					{/* Show Less Button */}
					{!hasMore && visibleCount > 3 && (
						<div className="text-center mt-12">
							<button
								onClick={() => setVisibleCount(3)}
								className="cursor-pointer inline-flex items-center gap-3 bg-background hover:bg-muted/50 px-6 py-3 rounded-full border border-border hover:border-primary/20 transition-all duration-300"
							>
								Show Less
								<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
								</svg>
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
