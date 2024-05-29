import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoSteam,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  discordUrl,
  githubUrl,
  instragamUrl,
  steamUrl,
} from "../constants/env";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex w-full items-center justify-around p-4 text-2xl text-[#00000040] transition ease-in-out lg:text-5xl">
      <Link
        to={githubUrl}
        target="_blank"
        className="cursor-pointer rounded-full p-4 transition ease-in-out hover:bg-[#00000040] hover:text-white"
      >
        <IoLogoGithub />
      </Link>
      <Link
        to={instragamUrl}
        target="_blank"
        className="cursor-pointer rounded-full p-4 transition ease-in-out hover:bg-[#00000040] hover:text-white"
      >
        <IoLogoInstagram />
      </Link>
      <Link
        to={discordUrl}
        target="_blank"
        className="cursor-pointer rounded-full p-4 transition ease-in-out hover:bg-[#00000040] hover:text-white"
      >
        <IoLogoDiscord />
      </Link>
      <Link
        to={steamUrl}
        target="_blank"
        className="cursor-pointer rounded-full p-4 transition ease-in-out hover:bg-[#00000040] hover:text-white"
      >
        <IoLogoSteam />
      </Link>
    </footer>
  );
}
