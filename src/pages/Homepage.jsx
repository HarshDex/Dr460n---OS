import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { FadeLoader } from "react-spinners";

const Homepage = () => {
  const levels = [
    {
      bg: "/assets/folder.png",
      level: "1",
      title: "Flag_01",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_02",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_03",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_04",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_05",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_06",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_07",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_08",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_09",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_10",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_11",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_12",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_13",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_14",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_15",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_16",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_17",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_18",
    },
    {
      bg: "/assets/folder.png",
      title: "Flag_19",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");

    if (hasVisitedBefore) {
      // User has visited before, so set loading to false immediately
      setLoading(false);
    } else {
      // User is visiting for the first time, show the loader and set a flag
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasVisitedBefore", "true");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div
      style={{ backgroundImage: `url("/assets/garuda.png")` }}
      className="flex flex-col h-screen  brightness-75 bg-cover container"
    >
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color="#ffffff" css={override} size={15} />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col h-[95%] gap-12 p-6 w-0 flex-wrap">
          {levels.map((item, index) => (
            <Link
              key={index}
              to={`/file/${item.title.toLowerCase().replace(/\s+/g, "")}`}
              className=""
            >
              <div
                className="btn-img bg-cover bg-no-repeat sm:w-20 sm:h-20 h-14 w-14 hover:brightness-75"
                style={{ backgroundImage: `url(${item.bg})` }}
              >
                <h1 className="text-center text-sm sm:text-base  sm:whitespace-nowrap pt-[60px] sm:pt-[82px]">
                  {item.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
