import Image from "next/image";
import logo from "../../assets/logo.png";

const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100 ">
      <div className="text-center items-center flex flex-col gap-5">
        <h3 className="font-semibold text-gray-900 text-2xl mt-2 ">
          Start new conversation
        </h3>
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default EmptyState;
