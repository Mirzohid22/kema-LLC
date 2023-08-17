import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
// components
import NavBar from "../components/Navbar";
//images 
import hero from "../public/hero.webp";
import ian from "../public/ian.jpg";
import michael from "../public/michael.jpg";
import albert from "../public/albert.jpg";
import fallin from "../public/fallin.jpg"
import { BiLogoInstagram, BiLogoTelegram, BiLogoLinkedin, BiLogoYoutube } from "react-icons/bi"


export default function Home() {
  const handleSubmit = e => {
    e.preventDefault()
    console.log({ name: e.target.children[0].value, phone: e.target.children[1].value })
  }


  const animateInViewport = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__pulse'); // Replace with your desired Animate.css classes
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const animateOptions = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // adjust this threshold as needed
    };

    const animateObserver = new IntersectionObserver(animateInViewport, animateOptions);

    const elementsToAnimate = document.querySelectorAll('.animate-trigger');
    elementsToAnimate.forEach(element => {
      animateObserver.observe(element);
    });

    return () => {
      animateObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Kema LLC</title>
      </Head>
      <main>
        <NavBar />
        <section
          id="about"
          className="flex flex-col h-screen text-center text-black dark:bg-black pt-28 lg:flex lg:flex-row"
        >
          <h1 className="animate__animated animate__fadeInLeft m-auto font-bold text-transparent pb-3 text-6xl lg:text-7xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Prezident maktablariga
            professional tayyorlov
          </h1>
          <Image
            src={hero}
            alt="hero"
            className="w-auto h-8/12 rounded-full animate__animated animate__backInUp"
          />
        </section>
        <section
          id="team"
          className="animate-trigger flex flex-col h-auto text-center text-black dark:bg-black"
        >
          <h1 className="my-5 lg:my-10 font-bold text-6xl pb-3 text-transparent  lg:text-7xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            Bizning jamoa
          </h1>
          <h3 className="text-xl dark:text-purple-600 py-2 max-w-5xl mx-auto lg:my-10">
            Ta'lim markazimizda, yuqori malakali jamoamiz bilan birgalikda yuksaling
          </h3>
          <div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 gap-1 ">
              <div className="">
                <div className="overflow-hidden w-48 h-48 rounded-full ">
                  <Image
                    src={albert}
                    alt="ceo"
                    className="w-48 h-48 object-cover object-top hover:scale-110 rounded-full transition-all duration-1000 hover:opacity-90"
                  />
                </div>
                <h1 className="font-bold text-xl dark:text-purple-600 hover:text-purple-900"><span className="text-xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-transparent">CEO</span> Joseph</h1>
                <div className="flex items-center justify-center gap-1 p-2">
                  <BiLogoInstagram className="text-2xl  hover:text-purple-900 dark:text-purple-600" />
                  <BiLogoTelegram className="text-2xl  hover:text-purple-900 dark:text-purple-600" />
                  <BiLogoLinkedin className="text-2xl hover:text-purple-900 dark:text-purple-600" />
                </div>
              </div>
              <div className="">
                <div className="overflow-hidden w-48 h-48 rounded-full ">
                  <Image
                    src={michael}
                    alt="ceo"
                    className="w-48 h-48 object-cover object-top hover:scale-110 rounded-full transition-all duration-1000 hover:opacity-90"
                  />
                </div>
                <h1 className="font-bold text-xl dark:text-purple-600 hover:text-purple-900"><span className="text-xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-transparent">Tutor</span> Michael </h1>
                <div className="flex items-center justify-center gap-1 p-2">
                  <BiLogoInstagram className="text-2xl  hover:text-purple-900 dark:text-purple-600" />
                  <BiLogoTelegram className="text-2xl  hover:text-purple-900 dark:text-purple-600" />
                  <BiLogoLinkedin className="text-2xl hover:text-purple-900 dark:text-purple-600" />
                </div>
              </div>
              <div className="">
                <div className="overflow-hidden w-48 h-48 rounded-full ">
                  <Image
                    src={ian}
                    alt="ceo"
                    className="w-48 h-48 object-cover object-center hover:scale-110 rounded-full transition-all duration-1000 hover:opacity-90"
                  />
                </div>
                <h1 className="font-bold text-xl dark:text-purple-600 hover:text-purple-900"><span className="text-xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-transparent">Manager</span> Ian</h1>
                <div className="flex items-center justify-center gap-1 p-2">
                  <BiLogoInstagram className="text-2xl  hover:text-purple-900 dark:text-purple-600" />
                  <BiLogoTelegram className="text-2xl  hover:text-purple-900 dark:text-purple-600" />
                  <BiLogoLinkedin className="text-2xl hover:text-purple-900 dark:text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="lg:h-20 w-full bg-white dark:bg-black">

        </div>
        <section id="blog" className="animate-trigger lg:pt-25 flex flex-col items-center justify-center h-screen text-center dark:bg-black">
          <h1 className="lg:m-auto my-4 font-bold text-transparent pb-3 text-6xl lg:text-7xl  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Bizni ijtimoiy tarmoqlarda kuzating
          </h1>
          <div className="lg:w-9/12 lg:h-4/5 w-11/12 h-3/5 shadow-lg dark:shadow-purple-900 dark:shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/M0A2js4S9ug`}
              width={560}
              height={315}
              title="YouTube Video Player"
              allowFullScreen
              className="w-full h-full z-10 rounded-lg dark:rounded-lg"
            />
          </div>
        </section>
        <section
          className="animate-trigger flex min-h-screen items-center justify-center text-center text-black bg-white dark:text-white dark:bg-black"
        >
          <div className="bg-white dark:bg-black flex rounded-2xl shadow-lg lg:w-4/5 items-center">
            <div className="md:w-1/2 px-8 md:px-16">
              <h1 className="lg:m-auto my-2 font-bold text-transparent pb-3 text-6xl lg:text-5xl  bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Biz bilan bog'lanish uchun
              </h1>
              <h3 className="text-xl dark:text-purple-600 py-2 max-w-5xl mx-auto lg:my-2">
                ismingiz va raqamingizni qoldiring, operatorimiz siz bilan bog'lanadi
              </h3>
              <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}>
                <input className="p-2 mt-8 rounded-xl border dark:bg-transparent" type="name" name="name" placeholder="Name" />
                <input className="p-2 rounded-xl border dark:bg-transparent" type="phone" name="phone" placeholder="Phone" />
                <button
                  id="ariza"
                  type="submit"
                  className="bg-gradient-to-r text-xl from-indigo-400 to-purple-600 rounded-xl text-white py-3 hover:opacity-90 align-center hover:cursor-pointer active:opacity-80 active:scale-95 transition">
                  Ariza yuborish
                </button>
              </form>
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400 dark:border-purple-600" />
                <p className="text-center text-sm dark:text-purple-600">OR</p>
                <hr className="border-gray-400 dark:border-purple-600" />
              </div>
              <div id="contact" className="flex items-center justify-center gap-1 p-4">
                <button className=" bg-[#0088CC] dark:bg-[#0088CC] p-3 text-xl rounded-full text-white py-3 hover:opacity-90 align-center hover:cursor-pointer active:opacity-80 active:scale-95 transition">
                  <BiLogoTelegram size={"40px"} />
                </button>
                <button className="bg-gradient-to-tr p-3 text-xl from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5] rounded-xl text-white py-3 hover:opacity-90 align-center hover:cursor-pointer active:opacity-80 active:scale-95 transition">
                  <BiLogoInstagram size={"40px"} />
                </button>
                <button className="bg-[#CD201F] dark:bg-[#CD201F] p-3 text-xl rounded-xl text-white py-3 hover:opacity-90 align-center hover:cursor-pointer active:opacity-80 active:scale-95 transition">
                  <BiLogoYoutube size={"40px"} />
                </button>
                <button className="bg-[#0077B5] dark:bg-[#0077B5] p-3 text-xl rounded-xl text-white py-3 hover:opacity-90 align-center hover:cursor-pointer active:opacity-80 active:scale-95 transition">
                  <BiLogoLinkedin size={"40px"} />
                </button>
              </div>
              <footer
                className="dark:text-purple-600"
              >
                Kema LLC. All rights reserved 2023
              </footer>
            </div>
            <div className="md:block hidden w-1/2">
              <Image className="rounded-2xl" alt="operator" src={fallin} />
            </div>
          </div>
        </section>
      </main>
    </div >

  );
}
