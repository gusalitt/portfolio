import { Card, CardContent } from "./ui/Card";
import Badge from "./ui/Badge";

export default function Project() {
	const projects = [
		{
			name: "HydroWash Laundry System",
			description: "Team project focused on managing laundry services and tracking order status. I contributed as a backend developer.",
			image: "https://raw.githubusercontent.com/Malvin555/HydroWash/master/public/img/preview.png", // Replace with actual screenshot
			link: "https://github.com/Malvin555/HydroWash",
			tags: ["Laravel", "Tailwind CSS", "MySQL"],
		},
		{
			name: "Counseling App",
			description: "Web-based application for managing student counseling records and streamlining administrative workflows in schools.",
			image: "https://raw.githubusercontent.com/gusalitt/app-bimbingan-konseling/main/public/assets/img/dashboard-view-in-light-mode.png",
			link: "https://github.com/gusalitt/app-bimbingan-konseling",
			tags: ["CodeIgniter", "Tailwind CSS", "MySQL"],
		},
		{
			name: "Library App",
			description: "A Simple Library system designed to handle book management, borrowing, and return tracking through a simple web interface.",
			image: "https://raw.githubusercontent.com/gusalitt/Aplikasi-Perpustakaan/main/admin/assets/img/home_admin.png",
			link: "https://github.com/gusalitt/Aplikasi-Perpustakaan",
			tags: ["PHP Native", "CSS" ,"MySQL"],
		},
	];

	return (
		<section id="projects" className="section-padding">
			<div className="container lg:px-28">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">My Projects</h2>
					<p className="text-muted-foreground">These are some projects I’ve worked on using various tools and technologies I’ve learned along the way.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<a href={project.link} key={index} target="_blank" rel="noopener noreferrer">
							<Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 h-full">
								<div className="relative h-56 w-full overflow-hidden">
									<img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
								</div>
								<CardContent key={index}>
									<h3 className="text-xl font-semibold mb-2">{project.name}</h3>
									<p className="text-muted-foreground mb-4">{project.description}</p>
									{project.tags.map((tag, index) => (
										<Badge key={index} variant="default" className="mr-2">
											{tag}
										</Badge>
									))}
								</CardContent>
							</Card>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
