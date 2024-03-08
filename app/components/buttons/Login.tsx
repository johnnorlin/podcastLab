import Link from "next/link";
export const Login = () => {
  return (
    <Link
      href="/api/auth/login"
      className="group rounded-lg border border-transparent px-5 py-4 duration-300 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <h2 className={`mb-3 text-2xl text-center font-semibold`}>
        Login{" "}
        <span className="inline-block transition-transform group-hover:translate-x-2 duration-300 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
    </Link>
  );
};
