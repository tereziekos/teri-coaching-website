import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function SocialFollow() {
  return (
    <div className="p-6 flex">
      <a
        href="mailto:kosikova.terezie@gmail.com "
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon sx={{ fontSize: 40 }} className="mx-2" />
      </a>
      <a
        href="https://www.facebook.com/terezie.kosikova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon sx={{ fontSize: 40 }} className="mx-2" />
      </a>
      <a
        href="https://twitter.com/tereziekos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon sx={{ fontSize: 40 }} className="mx-2" />
      </a>
      <a
        href="https://www.instagram.com/tereziekos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon sx={{ fontSize: 40 }} className="mx-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/terezie-kos%C3%ADkov%C3%A1-04b399b3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon sx={{ fontSize: 40 }} className="mx-2" />
      </a>
    </div>
  );
}
