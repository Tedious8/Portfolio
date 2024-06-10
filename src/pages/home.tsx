import Photo from "../assets/Foto_Kartun_3_3.png";
import { IoGlobeOutline, IoLogoAndroid } from "react-icons/io5";
import { ScrollToSection } from "../hooks/scroll-to-section";
import { GetProjects } from "../utils/get-project";
import { UseRefHTMLElement } from "../hooks/useRef";
import ProjectListWebsite from "../components/ProjectListWebsite";
import { getBaseUrl } from "../utils/get-base-url";

export function Component(): JSX.Element {
  const MyWorkRef = UseRefHTMLElement();
  const MyWebsiteWorkRef = UseRefHTMLElement();
  const MyAndroidWorkRef = UseRefHTMLElement();

  const projects = GetProjects(["This"]);

  return (
    <>
      <section className="flex w-full flex-col px-14 pt-14 lg:flex-row lg:gap-14 lg:pt-14">
        <aside className="flex min-h-fit flex-col justify-between py-16 lg:w-1/2 lg:pl-12 lg:pr-9">
          <h1 className="text-3xl font-extrabold text-white lg:text-6xl">
            Hi, I'm Tadeus
          </h1>
          <h3 className="mb-16 mt-12 text-xl font-medium text-white lg:text-3xl">
            Curious & Determined Front-end Engineer committed to creating
            engaging web experiences through innovation and skillful coding.
          </h3>
          <div className="flex gap-6">
            <a
              href={getBaseUrl("/cv_tadeus_canvas_en.pdf")}
              download="cv_tadeus_canvas_en.pdf"
              className="rounded-xl bg-[#00000040] px-5 py-3 text-center text-lg font-extrabold text-white transition duration-500 ease-in-out hover:bg-[#00000080] lg:px-10 lg:py-5 lg:text-2xl"
              style={{ boxShadow: "0px 0px 50px 0px #00000040" }}
            >
              Download CV
            </a>
            <button
              onClick={() => ScrollToSection(MyWorkRef)}
              className="rounded-xl bg-[#d9d9d940] px-5 py-3 text-center text-lg font-extrabold text-white transition duration-500 ease-in-out hover:bg-[#d9d9d980] lg:px-10 lg:py-5 lg:text-2xl"
              style={{ boxShadow: "0px 0px 50px 0px #00000040" }}
            >
              See My Work
            </button>
          </div>
        </aside>
        <figure className="flex justify-center rounded-xl lg:w-1/2">
          <img
            src={Photo}
            className="h-auto rounded-xl object-contain"
            alt="My photo"
          />
        </figure>
      </section>
      <section
        ref={MyWorkRef}
        className="-mt-0.5 flex w-full flex-col bg-[#00000040] px-14 py-14 lg:gap-14 lg:py-14"
      >
        <h2 className="text-3xl font-bold text-white lg:text-5xl">
          My Project
        </h2>
        <div className="mt-20 flex flex-wrap justify-around gap-5">
          <div
            onClick={() => ScrollToSection(MyWebsiteWorkRef)}
            className="flex h-72 w-72 cursor-pointer flex-col items-center justify-center gap-6 rounded-xl bg-[#00000040] transition duration-500 ease-in-out hover:bg-[#00000080]"
          >
            <IoGlobeOutline className="text-6xl text-white" />
            <h3 className="text-3xl font-medium text-white">Website</h3>
          </div>
          <div
            onClick={() => ScrollToSection(MyAndroidWorkRef)}
            className="flex h-72 w-72 cursor-pointer flex-col items-center justify-center gap-6 rounded-xl bg-[#00000040] transition duration-500 ease-in-out hover:bg-[#00000080]"
          >
            <IoLogoAndroid className="text-6xl text-white" />
            <h3 className="text-3xl font-medium text-white">Android</h3>
          </div>
        </div>
      </section>
      <section
        ref={MyWebsiteWorkRef}
        className="flex w-full flex-col gap-14 bg-[#00000040] px-14 py-14 lg:py-14"
      >
        <h3 className="text-3xl font-bold text-white">My Website Project</h3>
        <ProjectListWebsite projects={projects} />
      </section>

      <section
        ref={MyAndroidWorkRef}
        className="flex w-full flex-col gap-14 bg-[#00000040] px-14 py-14 lg:py-14"
      >
        <h3 className="text-3xl font-bold text-white">My Android Project</h3>
      </section>
    </>
  );
}
