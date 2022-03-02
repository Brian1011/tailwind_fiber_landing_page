import MenuIcon from "@mui/icons-material/Menu";
import heroImage from "../public/hero-Illustration.png";
import Image from "next/image";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { green } from "@mui/material/colors";
import { useRouter } from "next/router";

export default function HeaderComponent() {
  const router = useRouter();
  return (
    <div className="bg-green-100 left-0 top-0 min-w-full xl:px-24">
      <div className="p-4 md:p-12">
        {/* Navbar */}
        <div className="flex justify-between md:grid md:grid-cols-3 md:content-center">
          {/*--left--*/}
          <div className="md:grid md:grid-cols-1 md:content-center">
            <div className="font-medium text-lg">Fiber</div>
          </div>

          {/*center*/}
          <div className="hidden md:inline-flex justify-center md:grid md:grid-cols-3 md:content-center">
            <div>Community</div>
            <div className="px-2">Pricing</div>
            <div>Features</div>
          </div>

          {/*right*/}
          <div>
            <div className="md:hidden justify-items-end">
              <MenuIcon />
            </div>

            <div className="hidden md:flex md:flex-inline">
              <button className="md:basis-1/2 rounded-md w-48">
                <div className="flex justify-center py-4 text-black">
                  Sign In
                </div>
              </button>

              <button
                className="md:basis-1/2 rounded-md bg-blue-800 ml-2"
                onClick={() => router.push("/signup")}
              >
                <div className="flex justify-center py-4 text-white">
                  Sign Up
                </div>
              </button>
            </div>
          </div>
        </div>
        <br />

        <div className="flex flex-col md:flex-row-reverse">
          {/* Image */}
          <div className="basis-1/2 ">
            <Image
              src={heroImage}
              alt="image"
              height={500}
              width={500}
              layout={"responsive"}
            />
          </div>

          {/* content */}
          <div className="basis-1/2 md:grid md:content-center">
            <div className="text-4xl font-bold">
              Create your portfolio in minutes.
            </div>
            <div className="pt-2 pb-2 font-light">
              With Fiber, you can setup your own personal portfolio in minutes
              with dozens of premade, beautiful templates
            </div>

            <div className="flex flex-col md:flex-row md:py-2">
              <div className="md:basis-1/2 rounded-md bg-blue-800">
                <div className="flex justify-center py-4 text-white">
                  Start Free Trial
                </div>
              </div>

              <div className="md:basis-1/2 flex justify-center underline text-blue-800 py-2 base-1/2">
                View examples
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="p-2">
                <CheckCircleRoundedIcon sx={{ color: green[300] }} />
                <span className="pl-2">No Credit Card Required</span>
              </div>

              <div className="p-2">
                <CheckCircleRoundedIcon sx={{ color: green[300] }} />
                <span className="pl-2">10 Free Templates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
