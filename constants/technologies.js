import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaFigma, FaAws, FaTensorflow } from "react-icons/fa";
import { FaGolang, FaNodeJs } from "react-icons/fa6";
import { BsBootstrap } from "react-icons/bs";
import { SiMysql, SiMongodb, SiTensorflow, SiNumpy, SiPandas, SiKeras, SiPytorch, SiScikitlearn, SiTableau, SiGooglecolab, SiOpencv, SiJupyter } from "react-icons/si"; 
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "ML",
		items: [
			{ name: "Numpy", icon: <SiNumpy size={32} /> },
			{ name: "Pandas", icon: <SiPandas size={32} /> },
			{ name: "TensorFlow", icon: <SiTensorflow size={32} /> },
			{ name: "Keras", icon: <SiKeras size={32} /> },
			{ name: "PyTorch", icon: <SiPytorch size={32} /> },
			{ name: "Scikit-Learn", icon: <SiScikitlearn size={32} /> },
			{ name: "OpenCV", icon: <SiOpencv size={32} /> },
			{ name: "Tableau", icon: <SiTableau size={32} /> },
			// { name: "Google Colab", icon: <SiGooglecolab size={32} /> },
			// { name: "Jupyter", icon: <SiJupyter size={32} /> },
		]
	},
	{
		category: "Web",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			// { name: "NodeJS", icon: <FaNodeJs size={32} /> },
			{ name: "MySQL", icon: <SiMysql size={32} /> },
			// { name: "MongoDB", icon: <SiMongodb size={32} /> },
		]
	},
	{
		category: "Other",
		items: [
			{ name: "GitHub", icon: <AiFillGithub size={32} /> },
			{ name: "Jupyter", icon: <SiJupyter size={32} /> },
			{ name: "VS Code", icon: <DiVisualstudio size={32} /> },
			{ name: "AWS", icon: <FaAws width={32} /> }
		]
	}
];
