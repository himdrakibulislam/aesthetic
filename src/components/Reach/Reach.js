import Link from "next/link";

const Reach = () =>{
    return (<section style={{ backgroundColor: "#727c80" }} className="w-full h-full lg:px-28 lg:py-20 px-10 py-8">
        <h3 className="text-gray-900 text-2xl lg:text-6xl text-4 font-extralight ">Interested in featuring {process.env.NEXT_PUBLIC_APP_NAME}?</h3>

        <Link
        href="/contact"
        className="underline uppercase text-gray-900 block lg:mt-8 mt-4"><a>Reach Out To Us Here</a></Link>
    </section>)
}

export default Reach;