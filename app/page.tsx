import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <div className="max-w-5xl mx-auto flex p-6 box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-6 max-w-sm">
              Gain more knowledge in less time
            </h1>
            <p className="text-xl font-light mb-6 max-w-sm">
              Great summaries for busy people, individuals who barely have time
              to read, and even people who don’t like to read.
            </p>
            <button className="w-8/12 bg-nav-hover p-2 rounded-md max-w-sm hover:bg-[#20ba68] transition-colors duration-200">
              Login
            </button>
          </div>

          <figure className="flex justify-end w-1/2 pe-6">
            <Image
              src="/assets/Woman.png"
              alt="Woman"
              width={330}
              height={200}
            />
          </figure>
        </div>
      </section>
    </>
  );
}
