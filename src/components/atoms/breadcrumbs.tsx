import Link from "next/link";

export default function Breadcrumbs({
  routesArray,
  bgBlue,
  margins = true,
}: {
  routesArray: { title: string; link: string }[];
  bgBlue?: boolean;
  margins?: boolean;
}) {
  return (
    <div
      className={` flex sm:gap-3 gap-2
        
        items-center
        ${bgBlue ? "" : "text-blue font-worksansMedium"} 
       ${margins && "xlg:mt-32 xl:mt-28 sm:mt-20 mt-16 w-container"}`}
    >
      <Link href="/" className="sm:block hidden">
        <p className="text-sm ">Home</p>
      </Link>
      {routesArray.map((route, index) => {
        return (
          <>
            <svg
              className={`${index === 0 ? "sm:block hidden" : ""} `}
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
            >
              <path
                d="M1.72656 1L5.38737 4.67104L1.72656 8.33179"
                stroke="#2067CA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link href={route.link}>
              <p className="text-sm">{route.title}</p>
            </Link>
          </>
        );
      })}
    </div>
  );
}
