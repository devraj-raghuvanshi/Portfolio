const author = "Devraj Raghuvanshi";
const description =
	"Researcher from India";
const url = "https://vasile-novatchii.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://vasile-novatchii.netlify.app/"),
	title: {
		default: `${author}`,
		template: `%s${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Devraj Raghuvanshi",
		"Devraj Raghuvanshi - Researcher",
		"Data Science",
		"Artificial Intelligence",
		"Machine Learning",
		"Portfolio website",
		"Data Scientist Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author}`,
		description: description,
		url: url,
		siteName: `${author}`,
		images: [
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://vasile-novatchii.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
