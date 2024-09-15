import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto flex p-6 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6 max-w-sm">
            Gain more knowledge in less time
          </h1>
          <p className="text-xl font-light mb-6 max-w-sm">
            Great summaries for busy people, individuals who barely have time to
            read, and even people who don’t like to read.
          </p>
          <button className="w-8/12 bg-nav-hover p-2 rounded-md max-w-sm hover:bg-[#20ba68] transition-colors duration-200">
            Login
          </button>
        </div>

        <figure className="flex justify-end w-1/2 pe-6">
          <Image src="/assets/Woman.png" alt="Woman" width={330} height={200} />
        </figure>
      </section>

      <section className="max-w-5xl mx-auto py-6 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
        <h2 className="text-4xl font-bold mb-8 mx-auto w-full  text-center">
          Understand books in few minutes
        </h2>
        <div className="flex ">
          <div className="w-1/3 flex flex-col items-center p-2">
            <FaFileAlt size={55} />
            <h2 className="text-2xl font-bold mt-2 my-3 mx-auto w-full  text-center">
              Read or Listen
            </h2>
            <p className="text-base font-light mb-6 text-center">
              Save time by getting the core ideas from the best books.
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center p-2">
            <FaLightbulb size={55} />
            <h2 className="text-2xl font-bold mt-2 my-3  mx-auto w-full  text-center">
              Find your next read
            </h2>
            <p className="text-base font-light mb-6  text-center">
              Explore book lists and personalized recommendations.
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center p-2">
            <FaMicrophone size={55} />
            <h2 className="text-2xl font-bold mt-2 my-3  mx-auto w-full  text-center">
              Briefcasts
            </h2>
            <p className="text-base font-light mb-6 text-center">
              Gain valuable insights from briefcasts
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-10 flex p-6 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6 max-w-sm">
            Gain more knowledge in less time
          </h1>
          <p className="text-xl font-light mb-6 max-w-sm">
            Great summaries for busy people, individuals who barely have time to
            read, and even people who don’t like to read.
          </p>
          <button className="w-8/12 bg-nav-hover p-2 rounded-md max-w-sm hover:bg-[#20ba68] transition-colors duration-200">
            Login
          </button>
        </div>

        <figure className="flex justify-end w-1/2 pe-6">
          <Image src="/assets/Woman.png" alt="Woman" width={330} height={200} />
        </figure>
      </section>
    </>
  );
}
