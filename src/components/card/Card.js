import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Card({ image, title, url, className }) {
  const { pathname } = useRouter();
  return (
    <div
      className={`max-w-sm bg-white border border-gray-900  shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      <Link href={url}>
        <a>
          <Image layout="responsive"  priority={true} src={image} width={1200} height={800} alt="img" />
        </a>
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-thin tracking-tight text-gray-400 dark:text-white">
          {title}
        </h5>

        {!pathname.includes("/") ? (
          <Link className="uppercase text-gray-500" href={url}>
            <a> View This Project</a>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
