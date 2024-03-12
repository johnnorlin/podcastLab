import { NextPage } from "next";
const Room: NextPage = () => {
  return (
    <div className="min-h-screen min-w-full grid grid-cols-3 grid-rows-6 border-4">
      <div className="border-2 border-red-500 col-span-4 row-span-1">Room</div>
      <div className="border-2 border-black col-span-2 row-span-3">Faders</div>
      <div className="border-2 border-black col-span-1 row-span-3">Room</div>
      <div className="border-2 border-red-500 col-span-4 row-span-1">
        Room Management and File Down/Upload
      </div>
    </div>
  );
};

export default Room;
