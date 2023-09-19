import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialFollow() {
    return (
      <div className=" p-6">
        <a href="https://www.facebook.com/learnbuildteach/"
          className="mx-4 transition-transform duration-300 inline-block text-blue-600 hover:-translate-y-1">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.twitter.com/jamesqquick" 
          className="mx-4 transition-transform duration-300 inline-block text-blue-400 hover:-translate-y-1">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
          className="mx-4 transition-transform duration-300 inline-block text-black hover:-translate-y-1">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/jamesqquick/" 
          className="mx-4 transition-transform duration-300 inline-block text-blue-600 hover:-translate-y-1">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    );
  }
