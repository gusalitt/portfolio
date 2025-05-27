import { Card, CardContent } from "./ui/Card";

export default function Skill() {
	const skills = [
		{ name: "HTML5", icon: "devicon-html5-plain colored" },
		{ name: "CSS3", icon: "devicon-css3-plain colored" },
		{ name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
		{ name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
		{ name: "JavaScript", icon: "devicon-javascript-plain colored" },
		{ name: "React", icon: "devicon-react-plain colored" },
		{ name: "Alpine JS", icon: "devicon-alpinejs-plain colored" },
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
		<section id="skills" className="section-padding">
			<div className="container lg:px-28">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
					<p className="text-muted-foreground">I've worked with a variety of technologies and frameworks to create modern web applications.</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{skills.map((skill, index) => (
						<Card key={index} className="hover-lift">
							<CardContent key={index} className="p-6 flex flex-col items-center text-center">
								<i className={`${skill.icon} text-4xl mb-3`}></i>
								<h3 className="font-medium text-sm">{skill.name}</h3>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
