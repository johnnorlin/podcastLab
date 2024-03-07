import { Login } from "@/app/components/buttons/Login";
import Image from "next/image";

export default function Home() {
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
      <div className=" flex flex-col items-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 ">
        <Login />
      </div>
    </main>
  );
}
