"use client";
import Pagination from "@/components/Pagination";
import Progress from "../components/Progress";
import axios from "@/utils/axios.config";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function Page({projects}) {
  const query = useRouter();
  const [category, setCategory] = useState();
  
  useEffect(() => {
    setCategory(query.query.category);
  }, [query]);


  return (
    <main className="mx-4 lg:mx-10 mt-28 mb-4">
      <h2 className="text-2xl lg:text-6xl text-gray-500 font-thin">Projects</h2>
      <div className="flex my-4">
        <Link
          href="/projects?category=residential"
          
        >
          <a className={`me-4 uppercase font-semi-bold ${
            category === "residential"
              ? "border-b-2 text-black border-orange-400"
              : null
          }`}>Residential</a>
        </Link>

        <Link
          href="/projects?category=commercial"
          
        >
          <a className={`mx-4 flipOnHover uppercase font-semi-bold ${
            category === "commercial"
              ? "border-b-2 text-black border-orange-400	"
              : null
          }`}>Commercial</a>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects
        ?.filter((pj) => {
            if (category) {
              return pj.sector.toUpperCase() == category?.toUpperCase();
            } else {
              return true;
            }
          })
          ?.map((project) => (
            <div
              
              key={project.id}
            >
              <Link className="block" href={`/projects/${project.slug}`}>
                <a className="animate__animated animate__fadeInRightBig">
                  <Image
                    layout="responsive"
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_URL +
                      project.project_images[0].image
                    }
                    width={800}
                    height={500}
                    alt="img"
                  />
                  <div className="flex justify-between my-4">
                    <h3 className="text-xl lg:text-2xl text-gray-600">
                      {project.location}
                    </h3>
                    <p className="text-gray-500">{project.sector}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
         
      </div>
   
    </main>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "api/projects"
  );
  const data = await res.json();
  const projects = data.data;
  return { props: { projects } };
}
