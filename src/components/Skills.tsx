import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoIonic,
  IoLogoNodejs,
  IoLogoWordpress,
  IoLogoReact,
  IoLogoGithub,
  IoLogoElectron,
  IoLogoSass,
  IoLogoCapacitor,
} from "react-icons/io5";

import { CgNpm } from "react-icons/cg";
import { BsGit } from "react-icons/bs";
import {
  TbBrandBootstrap,
  TbBrandNextjs,
  TbBrandPhp,
  TbBrandTypescript,
  TbBrandWebflow,
  TbBrandVite,
  TbBrandUnity,
  TbBrandWix,
  TbBrandMysql,
  TbBrandShopee,
  TbBrandSupabase,
  TbBrandFirebase,
  TbBrandFigma,
  TbBrandCSharp,
} from "react-icons/tb";

import SkillSets from "./common/SkillSets";

function Skills() {
  return (
    <>
      <div className="h-full flex flex-col md:flex-row py-20 px-4 md:px-8 w-full bg-gray-800">
        <div className="mb-8 md:mb-0 text-white max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="xl:text-7xl text-center lg:text-6xl md:text-6xl text-5xl font-bold">
            Featured Skills
          </h1>
          {/* <div className="w-px bg-gray-500 h-7 m-auto my-3"></div> */}
          <p className="text-2xl md:text-4xl font-medium mb-4 mt-8 text-center">
            Web/Ecommerce Builders
          </p>
          <div className="w-4/5 flex mx-auto gap-3 justify-center items-center flex-wrap">
            <SkillSets text="WORDPRESS" icon={<IoLogoWordpress />} />
            <SkillSets text="WOOCOMMERCE" icon={<IoLogoWordpress />} />
            <SkillSets text="ELEMENTOR" icon={<IoLogoWordpress />} />
            <SkillSets text="SHOPIFY" icon={<TbBrandShopee />} />
            <SkillSets text="WEBFLOW" icon={<TbBrandWebflow />} />
            <SkillSets text="SQUARESPACE" />
            <SkillSets text="DUDA" />
            <SkillSets text="WIX" icon={<TbBrandWix />} />
            <SkillSets text="THINKIFIC" />
          </div>
          <div className="w-px bg-gray-500 h-7 m-auto my-3"></div>
          <p className="text-2xl md:text-4xl font-medium mb-4 text-center">
            Front-end
          </p>
          <div className="w-4/5 flex mx-auto gap-3 justify-center items-center flex-wrap">
            <SkillSets text="HTML" icon={<IoLogoHtml5 />} />
            <SkillSets text="CSS" icon={<IoLogoCss3 />} />
            <SkillSets text="SASS" icon={<IoLogoSass />} />
            <SkillSets text="JAVASCRIPT" icon={<IoLogoJavascript />} />
            <SkillSets text="REACT JS" icon={<IoLogoReact />} />
            <SkillSets text="VUE JS" />
            <SkillSets text="REACT NATIVE" icon={<IoLogoReact />} />
            <SkillSets text="IONIC FRAMEWORK" icon={<IoLogoIonic />} />
            <SkillSets text="NPM" icon={<CgNpm />} />
            <SkillSets text="NEXT JS" icon={<TbBrandNextjs />} />
            <SkillSets text="TYESCRIPT" icon={<TbBrandTypescript />} />
            <SkillSets text="TAILWIND CSS" />
            <SkillSets text="MUI" />
            <SkillSets text="SHADCN" />
            <SkillSets text="ACETERNITY" />
            <SkillSets text="NEXT UI" icon={<TbBrandNextjs />} />
            <SkillSets text="SHAKRA" />
            <SkillSets text="VITE" icon={<TbBrandVite />} />
            <SkillSets text="BOOTSTRAP" icon={<TbBrandBootstrap />} />
            <SkillSets text="JQUERY" />
          </div>
          <div className="w-px bg-gray-500 h-7 m-auto my-3"></div>
          <p className="text-2xl md:text-4xl font-medium mb-4 text-center">
            Back-end
          </p>
          <div className="w-4/5 flex mx-auto gap-3 justify-center items-center flex-wrap">
            <SkillSets text="PHP" icon={<TbBrandPhp />} />
            <SkillSets text="NODE JS" icon={<IoLogoNodejs />} />
            <SkillSets text="MYSQL" icon={<TbBrandMysql />} />
            <SkillSets text="SUPABASE" icon={<TbBrandSupabase />} />
            <SkillSets text="FIREBASE" icon={<TbBrandFirebase />} />
          </div>
          <div className="w-px bg-gray-500 h-7 m-auto my-3"></div>
          <p className="text-2xl md:text-4xl font-medium mb-4 text-center">
            Other Skills
          </p>
          <div className="w-4/5 flex mx-auto gap-3 justify-center items-center flex-wrap">
            <SkillSets text="GIT" icon={<BsGit />} />
            <SkillSets text="GITHUB" icon={<IoLogoGithub />} />
            <SkillSets text="FIGMA" icon={<TbBrandFigma />} />
            <SkillSets text="UNITY" icon={<TbBrandUnity />} />
            <SkillSets text="C#" icon={<TbBrandCSharp />} />
            <SkillSets text="AR" icon={<TbBrandUnity />} />
            <SkillSets text="VUFORIA" />
            <SkillSets text="CAPACITOR" icon={<IoLogoCapacitor />} />
            <SkillSets text="ELECTRON" icon={<IoLogoElectron />} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
