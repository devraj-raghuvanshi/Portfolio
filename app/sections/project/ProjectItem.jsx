"use client"
import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import { Loader } from "components";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";

export function ProjectItem({ project, index }) {
	const { description, image, liveUrl, repoUrl, title } = project;
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: true });

	// const galleryImages = images.map((img) => ({
	// 	original: img,
	// 	loading: "lazy"
	// }));

	return (
		<article
			ref={cardRef}
			className="flex flex-col rounded-lg bg-card-light dark:bg-card-dark"
			style={{
				transform: isInView
					? "none"
					: `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 25 * index}ms`
			}}
		>
			<figure>
				<div className="aspect-[12/9.2] w-full h-full">
					<Suspense fallback={<Loader />}>
						<Image
							src={image}
							width={500}
							height={500}
							alt="image"
						/>
					</Suspense>
				</div>
			</figure>

			<div className="flex-[2] px-5 py-6 text-center flex flex-col gap-10">
				<header className="flex-1 flex items-center justify-start flex-col gap-3">
					<h3 tabIndex="0" className="text-2xl font-bold">
						{title}
					</h3>
					<p tabIndex="0" className="leading-7 font-light">
						{description}
					</p>
				</header>

				<footer className="flex flex-col gap-10">
					<div className="flex-center gap-10">
						{repoUrl && (
							<Link
								href={repoUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to Github repository"
							>
								<VscSourceControl />
								<span>Source</span>
							</Link>
						)}
						{liveUrl && (
							<Link
								href={liveUrl}
								target="_blank"
								className="icon-link-btn"
								title="Go to live address"
							>
								<FiExternalLink />
								<span>View Publication</span>
							</Link>
						)}
					</div>
				</footer>
			</div>
		</article>
	);
}
