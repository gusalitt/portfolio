import { Card, CardContent } from "./ui/Card";

export default function TechStack() {
	const techStack = [
		{ name: "HTML5", icon: "devicon-html5-plain colored" },
		{ name: "CSS3", icon: "devicon-css3-plain colored" },
		{ name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
		{ name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
		{ name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
		{ name: "React JS", icon: "devicon-react-plain colored" },
		{ name: "Express JS", icon: "devicon-express-original colored" },
		{ name: "Node JS", icon: "devicon-nodejs-plain colored" },
		{ name: "Supabase", icon: "devicon-supabase-plain colored" },
		{ name: "Axios", icon: "devicon-axios-plain colored" },
		{ name: "Git", icon: "devicon-git-plain colored" },
		{ name: "Figma", icon: "devicon-figma-plain colored" },
		{ name: "PHP", icon: "devicon-php-plain colored" },
		{ name: "CodeIgniter", icon: "devicon-codeigniter-plain colored" },
		{ name: "Laravel", icon: "devicon-laravel-plain colored" },
		{ name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
		{ name: "MySQL", icon: "devicon-mysql-plain colored" },
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
							<i className={`${skill.icon} text-5xl mb-3`}></i>
							<h3 className="font-medium text-sm">{skill.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
