import { Card, CardContent } from "./ui/Card";
import { Code, Server, Layout, Database } from "lucide-react";

export default function About() {
	const skills = [
		{
			name: "Frontend Development",
			desc: "Creating responsive, interactive user interfaces",
			icon: <Layout size={24} className="text-primary" />,
		},
		{
			name: "Backend Development",
			desc: "Building robust server-side applications",
			icon: <Server size={24} className="text-primary" />,
		},
		{
			name: "Database Management",
			desc: "Designing efficient database schema",
			icon: <Database size={24} className="text-primary" />,
		},
		{
			name: "Clean Code",
			desc: "Writing maintainable, efficient code",
			icon: <Code size={24} className="text-primary" />,
		},
	];

	return (
		<section id="about" className="section-padding">
			<div className="container lg:px-28">
				<div className="flex flex-col justify-center items-center gap-10 mb-12">
					<div className="flex items-center justify-center">
						<div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-lg">
							<img src="./about.png" alt="Developer working" className="w-full h-full object-cover" />
						</div>
					</div>

					<div className="flex items-center justify-center text-center max-w-5xl mx-auto">
						<div>
							<p className="text-muted-foreground mb-4">
								Hi, I’m <span className="font-bold text-foreground">Gus Alit</span>. I’m a student studying Software Engineering at SMK and I really like web development.
							</p>
							<p className="text-muted-foreground mb-4">
								It all started with my curiosity, which grew into a passion for making easy-to-use, efficient, and nice-looking apps. I’m always excited to learn new things and improve my skills to keep up with changes in web technology.
							</p>
							<p className="text-muted-foreground">
								I care about writing clean and easy-to-understand code, and I want to build smooth experiences for users. I combine my technical skills with creative thinking to make useful and good-quality solutions.
							</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{skills.map((skill, index) => (
						<Card key={index}>
							<CardContent key={index} className="flex flex-col items-center text-center">
								<div className="bg-primary/10 p-3 rounded-full mb-4">{skill.icon}</div>
								<h3 className="font-medium mb-2">{skill.name}</h3>
								<p className="text-sm text-muted-foreground">{skill.desc}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
