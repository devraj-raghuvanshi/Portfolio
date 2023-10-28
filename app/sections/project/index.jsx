"use client"
import { Suspense, useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";
import { HeadingDivider, Loader } from "components";
import { fetcher } from "utils/fetcher";
import Error from "../../error";
import { ErrorBoundary } from "react-error-boundary";
import { Projects } from "../../projects/components/Projects";
import { SITE_ROUTES } from "../../../constants";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_LATEST_PROJECTS}`;

export function ProjectsSection() {

	const projects = [
		{
			title:"Job Portal",
			description:'Designed and built a user-friendly platform that accelerated job searches during a recession, resulting in 20 percent faster job loadings, Created and executed a robust user authentication system ensuring secure data storage and retrieval, Successfully merged user profiles and job postings from various sources, optimizing data management and enhancing system efficiency',
			image: "/images/job-portal.png",
			// liveUrl: "https://sarthakm.netlify.app/",
			repoUrl: "https://www.github.com/Sarthak8822/Job-Portal",
		},
		{
			title:"Project Title",
			description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae tempora atque nemo debitis? Earum rep',
			images: "/images/portfolio.png",
			// liveUrl: "https://sarthakm.netlify.app/",
			repoUrl: "https://www.github.com/Sarthak8822/Job-Portal",
		},
		{
			title:"Project Title",
			description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae tempora atque nemo debitis? Earum rep',
			images: "/images/portfolio.png",
			liveUrl: "https://sarthakm.netlify.app/",
			repoUrl: "https://sarthakm.netlify.app/",
		}
	]

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>
				</div>
			</section>
		</LazyMotion>
	);
}
