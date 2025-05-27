import { Mail, FileText, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
	const primaryContacts = [
		{
			icon: <Mail size={24} />,
			name: "Email",
			value: "idabagusalitbhadrayoga@gmail.com",
			link: "mailto:idabagusalitbhadrayoga@gmail.com",
		},
		{
			icon: <FileText size={24} />,
			name: "Resume",
			value: "Download Resume",
			link: "./CV_IdaBagusAlitBhadraYoga_PKL.pdf",
		},
		{
			icon: <MapPin size={24} />,
			name: "Location",
			value: "Bali, Indonesia",
			link: "https://www.google.com/maps/place/Mengwi,+Bali,+Indonesia",
		},
	];

	const socialLinks = [
		{ icon: <Github size={24} />, name: "GitHub", link: "https://github.com/gusalitt" },
		{ icon: <Linkedin size={24} />, name: "LinkedIn", link: "https://www.linkedin.com/in/idabagusalitbhadrayoga/" },
		{ icon: <Instagram size={24} />, name: "Instagram", link: "https://www.instagram.com/tugus_alitt/" },
	];

	return (
		<section id="contact" className="section-padding">
			<div className="container lg:px-28">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life,</p>
					</div>

					{/* Main Contact Info */}
					<div className="bg-background rounded-2xl p-8 md:p-10 shadow-md border border-border mb-12">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
							{primaryContacts.map((contact, index) => (
								<a
									key={index}
									href={contact.link}
									target="_blank"
									rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
									className="w-full group flex flex-col justify-center items-center text-center p-6 rounded-xl hover:bg-muted/50 transition-all duration-300"
								>
									<div className="bg-muted/60 group-hover:bg-muted p-4 rounded-full mb-4 transition-colors">{contact.icon}</div>
									<h3 className="font-semibold text-lg mb-2">{contact.name}</h3>
									<p className="text-muted-foreground group-hover:text-foreground transition-colors text-wrap break-words w-full">{contact.value}</p>
								</a>
							))}
						</div>
					</div>

					{/* Social Links */}
					<div className="text-center">
						<h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
						<div className="flex justify-center gap-4 flex-wrap">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.link}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center gap-3 bg-background hover:bg-muted/50 px-6 py-3 rounded-full border border-border hover:border-primary/20 transition-all duration-300"
									aria-label={`Connect with me on ${social.name}`}
								>
									<span className="text-muted-foreground group-hover:text-primary transition-colors">{social.icon}</span>
									<span className="font-medium text-sm group-hover:text-primary transition-colors">{social.name}</span>
								</a>
							))}
						</div>
					</div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 rounded-full border border-primary/20">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">Available for new Projects</span>
                        </div>
                    </div>
				</div>
			</div>
		</section>
	);
}
