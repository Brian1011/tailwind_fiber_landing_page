import Image from "next/image";
import timeImage from "../public/time.svg";
import codeImage from "../public/code.svg";
import allSizes from "../public/allSizes.svg";

export default function GoodPortfolioContent() {
  return (
    <div className="p-4">
      <div className="flex flex-col space-y-4 p-4 md:p-12 xl:px-24">
        {/* Intro */}
        <div>
          <br />
          <div className="text-blue-800 font-bold">Why Fiber?</div>
          <br />
          <div className="text-4xl font-bold md:w-2/5">
            A good portfolio means good employability.
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/*Build in minutes */}
          <div>
            <Image src={timeImage} alt="image" />
            <div className="font-bold py-2">Build in minutes</div>
            <div className="font-light">
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </div>
          </div>

          {/* Add custom css*/}
          <div className="md:px-8">
            <Image src={codeImage} alt="image" />
            <div className="font-bold py-2">Add custom CSS</div>
            <div className="font-light">
              Customize your personal portfolio even more with the ability to
              add your own custom CSS styles.
            </div>
          </div>

          {/*Responsive*/}
          <div>
            <Image src={allSizes} alt="image" />
            <div className="font-bold py-2">Responsive</div>
            <div className="font-light">
              All Fiber template are fully responsive to ensure the experience
              is seemless across all devices
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
