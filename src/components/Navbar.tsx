import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/url";

export default function Navbar(): JSX.Element {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <nav className="flex h-28 items-center justify-end gap-8 px-14 lg:justify-between">
      {windowWidth < 1024 ? (
        <>
          <IoMenu className="text-5xl text-white" />
        </>
      ) : (
        <>
          <h1
            onClick={() => navigate(baseUrl)}
            className="cursor-pointer text-2xl font-medium text-white"
          >
            Tadeus' Blog
          </h1>
          <ul className="flex gap-14 text-2xl font-medium text-white">
            <li
              onClick={() => navigate(baseUrl + "/website_project")}
              className="cursor-pointer"
            >
              Website
            </li>
            <li>Android</li>
            <li>About me</li>
          </ul>
        </>
      )}
    </nav>
  );
}
