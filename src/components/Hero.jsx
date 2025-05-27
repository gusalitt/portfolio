import { HashLink } from "react-router-hash-link";
import Button from "./ui/Button";
import { ArrowRight, Github, Linkedin, UserRoundPen } from "lucide-react";

export default function Hero() {
	return (
		<section id="home" className="section-padding flex items-center md:pt-40">
			<div className="container">
				<div className="max-w-4xl mx-auto text-center pt-9">
					<p className="text-primary/20 italic text-sm mt-2 mb-6 tracking-wide">"Learn, Build, Improve"</p>
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
						<div className="gradient-text">
							Full Stack Developer
							<div className="pb-3">Keep Learning, Always Building</div>
						</div>
					</h1>
					<p className="text-lg md:text-xl text-muted-foreground mb-8">Passionate about building better web apps every day — crafting clean, responsive experiences that keep evolving through learning and improvement.</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<Button asChild size="lg">
							<HashLink to="#projects" smooth className="text-primary">
								View My Work <ArrowRight className="ml-2 h-4 w-4" />
							</HashLink>
						</Button>
						<Button asChild variant="outline" size="lg">
							<HashLink to="#contact" smooth>
								Contact Me <UserRoundPen className="ml-2 h-4 w-4" />
							</HashLink>
						</Button>
					</div>
					<div className="flex justify-center gap-4">
						<Button asChild variant="ghost" size="icon">
							<a href="https://github.com/gusalitt" target="_blank" rel="noopener noreferrer">
								<Github size={20} />
								<span className="sr-only">Github</span>
							</a>
						</Button>
						<Button asChild variant="ghost" size="icon">
							<a href="https://www.linkedin.com/in/idabagusalitbhadrayoga/" target="_blank" rel="noopener noreferrer">
								<Linkedin size={20} />
								<span className="sr-only">LinkedIn</span>
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
