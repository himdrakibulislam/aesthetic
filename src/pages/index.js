import { useApp } from "@/context/AppProvider";
import dynamic from "next/dynamic";
import Head from "next/head";

const Hero = dynamic(() => import("../components/home/hero"), {
  loading: () => (
    <p className="min-h-screen flex items-center justify-center ">Loading...</p>
  ),
});
const HomeSection = dynamic(() => import("../components/home/section"), {
  loading: () => (
    <p className="min-h-screen flex items-center justify-center ">Loading...</p>
  ),
});
const ProjectSlide = dynamic(() => import("../components/home/ProjectSlide"), {
  loading: () => (
    <p className="min-h-screen flex items-center justify-center ">Loading...</p>
  ),
});
const HomeSlide = dynamic(() => import("../components/home/Slide"), {
  loading: () => (
    <p className="min-h-screen flex items-center justify-center ">Loading...</p>
  ),
});

export default function Home({  projects }) {
  const data = useApp();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Head>
        <title>{data.meta_title || "Home"}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Head>
      <HomeSlide />
      <HomeSection />
      <ProjectSlide projects={projects} />
      <Hero />

 
    </main>
  );
}

export async function getServerSideProps() {
  
  const projectResponse = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "api/projects"
  );
  
  const data = await projectResponse.json();
  const projects = data.data;
  return { props: { projects } };
}
