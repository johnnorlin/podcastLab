import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { getUserProfileData } from "@/app/services/profile.service";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { LogoutButton } from "../components/buttons/Logout";

const Home: NextPage = withPageAuthRequired(
  async () => {
    const user = await getUserProfileData();

    return (
      <main className="flex min-h-screen flex-col place-items-center p-24">
        <div className="flex flex-row place-items-center mb-20">
          <div className="text-4xl">Podcast Lab</div>
          <Image
            src="/recording logo.png"
            alt="record logo"
            height="100"
            width="100"
            className="ml-2"
          ></Image>
        </div>
        <LogoutButton />
        <div className=" flex flex-col items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 ">
          <Link
            href="/create"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
              Start a session{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-center text-sm opacity-50`}>
              Create a new room, complete with an edit toolbox
            </p>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
              Join a session{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-center text-sm opacity-50 `}>
              Enter a room ID as a participant
            </p>
          </Link>
        </div>
      </main>
    );
  },
  { returnTo: "/" }
);

export default Home;
