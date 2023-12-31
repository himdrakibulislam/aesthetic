import Image from "next/image";
import contactImage from "../../public/image/contact.jpg";
import Head from "next/head";

import dynamic from 'next/dynamic'
 
const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <p className="min-h-screen flex items-center justify-center ">Loading...</p>,
})
export default function Contact() {
  
  return (
    <main className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <Head>
        <title>Contact</title>
      </Head>
      <div className="order-2 md:order-1 lg:order-1">
        <Image
          layout="responsive"
          width={1200}
          height={1300}
          src={contactImage}
          alt="Contact"
        />
      </div>
      <ContactForm/>
    </main>
  );
}
