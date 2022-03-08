import { AccountCircle, Password, Visibility } from "@mui/icons-material";
import { Input, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import signUpImage from "../public/Sign Up Image.png";
import Image from "next/image";

export default function SignupForm() {
  return (
    <div className="">
      <div className="flex min-w-full h-screen">
        {/*1st div */}
        <div className="px-8 md:w-1/2 flex flex-col self-center items-center">
          <div className="">
            <div className="text-lg font-medium py-6">Fiber</div>
            <div className="text-4xl font-bold py-2">
              Create your Fiber account
            </div>
            <div className="py-3">
              <div className="font-medium">Your name</div>
              <div className="flex border border-gray-400 rounded-md justify-between items-center p-1 mt-2">
                <input
                  type="E-mail"
                  className="p-2 flex-1 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="py-4">
              <div className="font-medium">E-mail</div>
              <div className="flex border border-gray-400 rounded-md justify-between items-center p-1 mt-2">
                <input
                  type="E-mail"
                  className="p-2 flex-1 focus:outline-none"
                  placeholder="John@example.com"
                />
              </div>
            </div>
            <div className="py-4">
              <div className="font-medium">Password</div>
              <div className="flex border border-gray-400 rounded-md justify-between items-center p-1 mt-2">
                <input
                  type="password"
                  className="p-2 flex-1 focus:outline-none"
                  placeholder="At least 8 characters"
                />
                <Visibility className="p-1" sx={{ color: grey[400] }} />
              </div>
            </div>
            <div className="flex justify-items-start py-4 px-2">
              <div className="form-check-input">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none border border-gray-300 rounded-md h-4 w-4 checked:bg-blue-600 checked:border-blue-600"
                  name="terms"
                  id="terms"
                />
              </div>
              <div className="pl-2">
                By creating an account on Fiber, you agree to the{" "}
                <span className="text-blue-800 underline font-bold">
                  Terms & conditions
                </span>
                .
              </div>
            </div>
            <div className="py-3">
              <div className="rounded-md bg-blue-800">
                <div className="flex justify-center py-4 text-white">
                  Create Fiber Account
                </div>
              </div>
            </div>
            <div>
              <div className="py-2 flex justify-center">
                Already have an account?{" "}
                <span className="text-blue-800 pl-2">Sign In</span>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd div logo*/}
        <div className="hidden md:flex items-center bg-blue-800 min-h-full md:w-1/2 px-8">
          <div className="grid px-12">
            <div className="justify-self-center">
              <Image src={signUpImage} alt="image" />
            </div>
            <div className="py-6 justify-self-center">
              <div className="text-3xl text-white">Unparalleled Templates</div>
              <div className="text-white">
                Crafted by a team of professional designers, our templates are
                unparalleled in the market
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
