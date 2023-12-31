import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import "animate.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { AppProvider } from "@/context/AppProvider";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <AppProvider>
      <NextNProgress
        color="#ff0000"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        options={{ showSpinner: false }}
        showOnShallow={true}
      />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
      </AppProvider>
    </>
  );
}

// const getLayout =
//     Component.getLayout ||
//     function (page) {
//       return (
//         <Provider store={store}>
//           <DashboardLayout>
//             <Toaster position="top-left" />
//             <NextNProgress
//               color="#ff0000"
//               startPosition={0.3}
//               stopDelayMs={200}
//               height={2}
//               options={{ showSpinner: false }}
//               showOnShallow={true}
//             />
//             <Component {...pageProps} />
//           </DashboardLayout>
//         </Provider>
//       );
//     };

//   return getLayout(
//     <Provider store={store}>
//       <Layout>
//         <Toaster position="top-left" />
//         <NextNProgress
//           color="#ff0000"
//           startPosition={0.3}
//           stopDelayMs={200}
//           height={2}
//           options={{ showSpinner: false }}
//           showOnShallow={true}
//         />
//         <Component {...pageProps} />
//       </Layout>
//     </Provider>
//   );
