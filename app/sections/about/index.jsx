"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
// import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							I am pursuing my Bachelors in Information Technology from SGSITS Indore.
						</p>
						<p>
							I have developed a deep passion for machine learning, and I am constantly engaged in working on interesting research projects.
						</p>
						<p>My research journey began in 2022 as a Research Intern at IIT Indore.</p>
						{/* <p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with NextJS.
						</p>
						<p>
							One day, I decided to try something new, and I started learning React. I was so
							excited to see how fast I can build a website with it, and how easy it is to maintain
							it. Consequently, I quickly learnt Next.js and I used it to build some company
							projects working in a team.
						</p>
						<p className="my-3.5">
							In december 2023, I had an opportunity to start working as a Full-Stack developer for
							Zomato🍅 as Intern with the possibility of transitioning to AWS. I was skeptical
							about it at first, but I decided to give it a try, and I don&lsquo;t regret it. Now, I
							thoroughly enjoy working with FullStack.
						</p> */}
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
