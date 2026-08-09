import html5 from "../assets/tech/html5.svg";
import css3 from "../assets/tech/css3.svg";
import bootstrap from "../assets/tech/bootstrap.svg";
import tailwindcss from "../assets/tech/tailwindcss.svg";
import javascript from "../assets/tech/javascript.svg";
import typescript from "../assets/tech/typescript.svg";
import reactjs from "../assets/tech/reactjs.svg";
import express from "../assets/tech/express1.svg";
import nodejs from "../assets/tech/nodejs.svg";
import supabase from "../assets/tech/supabase.svg";
import axios from "../assets/tech/axios.svg";
import git from "../assets/tech/git.svg";
import figma from "../assets/tech/figma.svg";
import php from "../assets/tech/php.svg";
import codeigniter from "../assets/tech/codeigniter.svg";
import laravel from "../assets/tech/laravel.svg";
import mysql from "../assets/tech/mysql.svg";
import postgresql from "../assets/tech/postgresql.svg";

const icons = {
	html5,
	css3,
	bootstrap,
	tailwindcss,
	javascript,
	typescript,
	reactjs,
	express,
	nodejs,
	supabase,
	axios,
	git,
	figma,
	php,
	codeigniter,
	laravel,
	postgresql,
	mysql,
};

export default function TechIcon({ name, alt = "" }) {
    const icon = icons[name];

    if (!icon) return null;

    return (
        <img 
            src={icon} 
            alt={alt} 
            loading="lazy"
            decoding="async"
            className="mb-3 w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] object-contain"
        />
    )
}