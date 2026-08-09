import { Card, CardContent } from "./ui/Card";
import TechIcon from "./TechIcon";

export default function TechStack() {
	const techStack = [
		{ name: "HTML5", icon: "html5" },
		{ name: "CSS3", icon: "css3" },
		{ name: "Bootstrap", icon: "bootstrap" },
		{ name: "Tailwind CSS", icon: "tailwindcss" },
		{ name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
		{ name: "React JS", icon: "reactjs" },
		{ name: "Express JS", icon: "express" },
		{ name: "Node JS", icon: "nodejs" },
		{ name: "Supabase", icon: "supabase" },
		{ name: "Axios", icon: "axios" },
		{ name: "Git", icon: "git" },
		{ name: "Figma", icon: "figma" },
		{ name: "PHP", icon: "php" },
		{ name: "CodeIgniter", icon: "codeigniter" },
		{ name: "Laravel", icon: "laravel" },
		{ name: "MySQL", icon: "mysql" },
		{ name: "PostgreSQL", icon: "postgresql" },
	];

	return (
		<section id="techStack" className="section-padding">
			<div className="container lg:px-28 flex justify-content-center flex-col items-center">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
					<p className="text-muted-foreground">Technologies and tools I use to build modern, scalable, and user-focused web applications.</p>
				</div>
				<div className="flex flex-wrap w-full md:w-[80%] items-center justify-center gap-14">
					{techStack.map((skill, index) => (
						<div className="flex flex-col justify-content-center items-center">
                            <TechIcon name={skill.icon} alt={skill.name} />
							<h3 className="font-medium text-sm">{skill.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
