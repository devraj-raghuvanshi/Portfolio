import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaFigma, FaAws } from "react-icons/fa";
import { FaGolang, FaNodeJs } from "react-icons/fa6";
import { BsBootstrap } from "react-icons/bs";
import { SiMysql, SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> }
		]
	},
	{
		category: "Back-end and Databases",
		items: [
			{ name: "Golang", icon: <FaGolang size={32} /> },
			{ name: "NodeJS", icon: <FaNodeJs size={32} /> },
			{ name: "MySQL", icon: <SiMysql size={32} /> },
			{ name: "MongoDB", icon: <SiMongodb size={32} /> },
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "Aws", icon: <FaAws width={32} /> }
		]
	}
];
