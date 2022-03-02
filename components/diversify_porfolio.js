import pageImage from "../public/Page Image.png";
import Image from "next/image";
export default function DiversifyPortfolio() {
  return (
    <div className="bg-white mt-6 p-4 md:p-12 xl:px-24">
      <div className="pt-4 px-5 bg-blue-800 text-white rounded-lg">
        <br />
        <div>
          <div className="md:flex md:flex-row space-x-8 md:px-8">
            <div className="md:w-1/2 md:grid md:content-center">
              <div className="text-4xl">Diversify your portfolio.</div>
              <div className="py-2 mt-2">
                Create even more impressive portfolio by creating case studies
                for your projects. Simply follow our step-by-step guide.
              </div>

              <div className="rounded-md bg-white my-2 md:w-1/2">
                <div className="flex justify-center py-4 px-4 text-blue-800">
                  Start Free Trial
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              {/* Image */}
              <div className="mt-12 rounded-md pb-0 mb-0 flex justify-center">
                <Image src={pageImage} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
