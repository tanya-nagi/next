"use client";

import { useEffect, useState } from "react";
import { useUser } from "@hooks/User";
import { getProfile } from "@api-integration/users";
import { toast } from "react-toastify";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@api-integration/auth";
import { ConfirmationModal } from "@components/admin/modal";
import Image from "next/image";
import { useAuthServices } from "@/services/auth";

const views = [
  {
    id: 1,
    heading: "Dashboard",
    subHeading: [
      {
        option: "News Feed",
        to: "/admin/news-feed",
        id: 2,
      },
    ],
  },
  {
    id: 2,
    heading: "Settings",
    subHeading: [
      {
        option: "Members",
        to: "/admin/members",
        id: 1,
      },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);
  const { setUser } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const { logout, isLoading } = useAuthServices();

  const fetchUserProfile = async () => {
    await getProfile()
      .then((res) => {
        if (res.status && res.data) {
          setUser(res.data);
        } else {
          toast.error("Error while fetching profile.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onLogout = async (decision: boolean) => {
    if (decision) {
      await logout({
        onSuccess: () => {
          router.push("/admin/signin");
        },
        onError: () => {
          toast.error("Error while logging out");
        },
      });
    }
    setShowModal(false);
  };

  useEffect(() => {
    fetchUserProfile();
  }, [showModal]);

  return (
    <>
      <div className="bg-gray bg-opacity-10 min-h-screen">
        <section className="min-h-screen lg:w-full flex lg:flex-row flex-col">
          <div
            className="relative self-stretch bg-white basis-72 2xl:basis-[19rem] xl:basis-[15rem] grow-0 shrink 
          border-gray-400 border-opacity-40 border-r"
          >
            <div
              className="fixed flex flex-col justify-between w-72 2xl:w-[19rem] xl:w-[15rem] pt-10 h-screen 
            overflow-y-scroll"
            >
              <div className="">
                <Link href="/" className="px-6 block pb-4">
                  <div className="h-10 flex items-start">
                    <Image
                      src="/assets/aak-logo.svg"
                      alt="AAK Logo"
                      className="h-full w-auto"
                      loading="eager"
                      width="0"
                      height="0"
                    />
                  </div>
                </Link>
                <ul className="pt-4 sidebar-tabs">
                  {views.map((elem, index) => {
                    return (
                      <li key={elem.id} className="text-gray-500">
                        <p className="px-6 font-medium text-lg 2xl:text-xl mt-6">
                          {elem.heading}
                        </p>
                        <ul
                          className={`${
                            index !== views.length - 1 &&
                            "border-b border-gray-400 border-opacity-40"
                          } sidebar-tabs pb-4`}
                        >
                          {elem.subHeading.map((item) => (
                            <li key={item.id}>
                              <Link
                                href={item.to}
                                className={`capitalize px-8 mt-3 flex flex-nowrap items-center gap-4 text-base 2xl:text-base 
                              font-regular relative tracking-wide py-2 w-full transition-all duration-200 fill-blue 
                              ease-in-out cursor-pointer
                              ${
                                pathname === item.to
                                  ? "text-white bg-blue"
                                  : "  hover:bg-blue hover:bg-opacity-10"
                              }`}
                              >
                                {item.option}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="w-full border-t border-gray-400 border-opacity-40">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="capitalize px-8 flex flex-nowrap opacity-40 hover:opacity-100 items-center gap-4 
              text-base hover:bg-blue hover:bg-opacity-10 font-semibold tracking-wide py-2 w-full  my-3 
              transition-all duration-200 ease-in-out cursor-pointer"
                >
                  <svg
                    className="h-6 w-6 fill-blue"
                    viewBox="0 0 16 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM5 7V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V7H5Z" />
                  </svg>
                  <span className="pt-[2px]">Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          <div className="basis-96 grow shrink">{children}</div>
        </section>
      </div>
      {showModal && (
        <ConfirmationModal
          heading="Are you sure you want to log out?"
          callback={onLogout}
          isLoading={isLoading}
        />
      )}
    </>
  );
}
