import Link from "next/link";

const HomeSection = () => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div>
        <h4 className="text-center text-4xl lg:text-8xl text-gray-400">
          Trust is the process.
        </h4>
      </div>
      <div className="text-gray-400 lg:text-left">
        <p className=" px-2 text-center">
          At {process.env.NEXT_PUBLIC_APP_NAME} Design and Interiors, we are inspired by how people live
          in the world. We believe in building a symbiotic relationship between
          people and the environments they interact with. That’s why we approach
          each project with a sense of utility and creativity. Crafting
          (storied) feel good spaces and places with you in mind.
        </p>
        <Link href="projects"
        
        >
          <a className="uppercase block mt-8 underline text-center ">  View Projects</a>
        </Link>
      </div>
    </div>
  );
}
export default HomeSection;