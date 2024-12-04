"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/momad191" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mohammed-emad-5457b31b2/",
  },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@momadstyle" },
  { icon: <FaTwitter />, path: "https://x.com/MomadStyle" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
