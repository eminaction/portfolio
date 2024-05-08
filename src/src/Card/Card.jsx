"use client";
/* eslint-disable react/prop-types */
import "react";
import "./Card.css";
import Image from "../Image/Image";
import Link from "next/link";

export default function Card({ href, imageSource, header, text, link }) {
  return (
    <>
      <div className="card">
        <Image href={href} imageSource={imageSource} />
        <h3>{header}</h3>
        <p>{text}</p>
        <div className="project-buttons">
          <Link href={link}>
            <button>See More</button>
          </Link>
        </div>
      </div>
    </>
  );
}
