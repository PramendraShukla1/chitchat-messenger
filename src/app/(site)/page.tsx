import Image from "next/image";
import logo from "../../assets/logo_half.png";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src={logo}
          alt="logo"
          height={60}
          width={60}
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-yellow-500">
          Sign In To Your ChitChat Account
        </h2>
      </div>
      {/* AUTHFORM */}
      <AuthForm />
    </div>
  );
}
