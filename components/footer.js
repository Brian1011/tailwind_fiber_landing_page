import { Favorite } from "@mui/icons-material";
import { red } from "@mui/material/colors";

export default function FooterComponent() {
  return (
    <div className="bg-green-100 text-black min-w-full xl:px-24">
      <div className="flex flex-col p-4 md:p-12 md:flex-row md:space-x-2">
        {/*Fiber*/}
        <div className="py-4 md:w-1/4">
          <div className="text-3xl font-bold">Fiber</div>
          <div className="text-grey-600 font-light pt-4">
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
            <div className="py-2">
              Made with <Favorite sx={{ color: red }} /> in the Netherlands.
            </div>
          </div>
        </div>

        {/*Site map*/}
        <div className="py-4 text-grey-600 font-light md:w-1/4">
          <div className="text-3xl font-bold">Sitemap</div>
          <div className="grid pt-4 gap-y-2 grid-cols-1 ">
            <div>HomePage</div>
            <div>Pricing</div>
            <div>Testimonials</div>
            <div>Features</div>
          </div>
        </div>

        {/*Resources*/}
        <div className="py-4 text-grey-600 font-light md:w-1/4">
          <div className="text-3xl font-bold">Resources</div>
          <div className="grid pt-4 gap-y-2 grid-cols-1">
            <div>Support</div>
            <div>Contact</div>
            <div>FAQ</div>
          </div>
        </div>

        {/*Company*/}
        <div className="py-4 text-grey-600 font-light md:w-1/4">
          <div className="text-3xl font-bold">Company</div>
          <div className="grid pt-4 gap-y-2 grid-cols-1">
            <div>About</div>
            <div>Customers</div>
            <div>Blog</div>
          </div>
        </div>
        {/*Portfolios*/}
        <div className="py-4 text-grey-600 font-light md:w-1/4">
          <div className="text-3xl font-bold">Portfolios</div>
          <div className="grid pt-4 gap-y-2 grid-cols-1">
            <div>Sarah Andrews</div>
            <div>Matthew Higgins</div>
            <div>Janice Dave</div>
          </div>
        </div>
      </div>
    </div>
  );
}
