"use client";

import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { useState } from "react";
import LoginModal from "./Auth/LoginModal";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import { IoStarSharp } from "react-icons/io5";

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  return (
    <>
      <NavBar />
      <section className="max-w-5xl mx-auto flex p-6 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-6 max-w-sm">
            Gain more knowledge in less time
          </h1>
          <p className="text-xl font-light mb-6 max-w-sm">
            Great summaries for busy people, individuals who barely have time to
            read, and even people who dont like to read.
          </p>
          <button
            className="w-8/12 bg-nav-hover p-2 rounded-md max-w-sm hover:bg-[#20ba68] transition-colors duration-200"
            onClick={openLoginModal}
          >
            Login
          </button>
        </div>

        <figure className="flex justify-end w-1/2 pe-6">
          <Image src="/assets/Woman.png" alt="Woman" width={330} height={200} />
        </figure>
      </section>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

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
        <div className="w-1/2 pr-10">
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b]">
            Enhance your knowledge
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b]">
            Achieve greater success
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b]">
            Improve your health
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b]">
            Develop better parenting skills
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b]">
            Increase happiness
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b]">
            Be the best version of yourself!
          </h2>
        </div>
        <div className="w-1/2 px-6 bg-[rgb(241,246,244)] py-10">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex my-4 w-full h-1/3 ">
              <h2 className="mt-1 pr-4 text-xl text-[rgb(3,101,242)] font-semibold">
                93%
              </h2>
              <h2 className="text-xl font-light text-[#394547]">
                of Summarist members
                <strong className="font-bold"> significantly increase </strong>
                reading frequency.
              </h2>
            </div>
            <div className="flex mb-4 w-full h-1/3">
              <h2 className="mt-1 pr-4 text-xl text-[rgb(3,101,242)] font-semibold">
                96%
              </h2>
              <h2 className="text-xl font-light text-[#394547]">
                of Summarist members
                <strong className="font-bold"> establish better </strong>{" "}
                habits.
              </h2>
            </div>
            <div className="flex mb-4 w-full h-1/3">
              <h2 className="mt-1 pr-4 text-xl text-[rgb(3,101,242)] font-semibold">
                90%
              </h2>
              <h2 className="text-xl font-light text-[#394547]">
                have made
                <strong className="font-bold"> significant positive </strong>
                change to their lives.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-10 flex p-6 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
        <div className="w-1/2 px-6 bg-[rgb(241,246,244)] py-10">
          <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex my-4 w-full h-1/3 ">
              <h2 className="mt-1 pr-4 text-xl text-[rgb(3,101,242)] font-semibold">
                93%
              </h2>
              <h2 className="text-xl font-light text-[#394547]">
                of Summarist members
                <strong className="font-bold"> significantly increase </strong>
                reading frequency.
              </h2>
            </div>
            <div className="flex mb-4 w-full h-1/3">
              <h2 className="mt-1 pr-4 text-xl text-[rgb(3,101,242)] font-semibold">
                96%
              </h2>
              <h2 className="text-xl font-light text-[#394547]">
                of Summarist members
                <strong className="font-bold"> establish better </strong>{" "}
                habits.
              </h2>
            </div>
            <div className="flex mb-4 w-full h-1/3">
              <h2 className="mt-1 pr-4 text-xl text-[rgb(3,101,242)] font-semibold">
                90%
              </h2>
              <h2 className="text-xl font-light text-[#394547]">
                have made
                <strong className="font-bold"> significant positive </strong>
                change to their lives.
              </h2>
            </div>
          </div>
        </div>

        <div className="w-1/2 pl-10">
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b] text-end">
            Expand your learning
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b] text-end">
            Accomplish your goals
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b] text-end">
            Strengthen your vitality
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b] text-end">
            Become a better caregiver
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b] text-end">
            Improve your mood
          </h2>
          <h2 className="text-3xl font-medium mb-4 text-[#6b757b] text-end">
            Maximize your abilities
          </h2>
        </div>
      </section>

      <section className="max-w-2xl mx-auto flex p-6 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-6 ">What our members say</h2>
          <div className="bg-[#fff3d7] my-4 p-2">
            <div className="flex">
              <div className="">Hanna M.</div>
              {/* <IoStarSharp /> */}
            </div>

            <p className="text-xl font-light mb-6 ">
              This app has been a game-changer for me! Its saved me so much time
              and effort in reading and comprehending books. Highly recommend it
              to all book lovers.
            </p>
          </div>
          <div className="bg-[#fff3d7] my-4 p-2">
            <div className="flex">
              <div className="">David B.</div>
              {/* <IoStarSharp /> */}
            </div>

            <p className="text-xl font-light mb-6 ">
              I love this app! It provides concise and accurate summaries of
              books in a way that is easy to understand. Its also very
              user-friendly and intuitive.
            </p>
          </div>
          <div className="bg-[#fff3d7] my-4 p-2">
            <div className="flex">
              <div className="">Nathan S.</div>
              {/* <IoStarSharp /> */}
            </div>

            <p className="text-xl font-light mb-6 ">
              This app is a great way to get the main takeaways from a book
              without having to read the entire thing. The summaries are
              well-written and informative. Definitely worth downloading.
            </p>
          </div>
          <div className="bg-[#fff3d7] my-4 p-2">
            <div className="flex">
              <div className="">Ryan R.</div>
              {/* <IoStarSharp /> */}
            </div>
            <p className="text-xl font-light mb-6 ">
              If youre a busy person who loves reading but doesnt have the time
              to read every book in full, this app is for you! The summaries are
              thorough and provide a great overview of the books content.
            </p>
          </div>

          <button
            className="w-8/12 bg-nav-hover p-2 rounded-md max-w-sm hover:bg-[#20ba68] transition-colors duration-200 mt-4 mb-6"
            onClick={openLoginModal}
          >
            Login
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
