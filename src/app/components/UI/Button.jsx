import Image from "next/image";

export function Button({ children }) {
  return (
    <button className="group bg-linear-to-t from-[#1C417C] to-[#3F6299] hover:from-white hover:to-white text-white hover:text-primary border border-transparent hover:border-primary transition-all duration-300 rounded-full px-5 py-1.5 md:py-2 flex items-center gap-2">
  <span className="font-cormorant text-lg  font-bold">{children}</span>
</button>
  );
}

export function CommonHeading({ children }) {
  return (
    <button className="group bg-linear-to-t from-[#1C417C] to-[#3F6299]  text-white  transition-all duration-300 rounded-full px-5 py-1.5 md:py-2 flex items-center gap-2">
     <span className="font-satisfy flex items-center gap-2 text-lg">
        <Image
          src="/svg/common.svg"
          alt="svg icon"
          height={20}
          width={20}
        />
        {children}
      </span>
    </button>
  );
}