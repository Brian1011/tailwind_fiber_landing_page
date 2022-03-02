import Image from "next/image";
import userAvatar1 from "../public/User Avatar.svg";
import userAvatar2 from "../public/User Avatar 2.svg";
import userAvatar3 from "../public/User Avatar 32.svg";
export default function ReviewsComponent() {
  return (
    <div className="bg-white text-black p-4 md:p-12 xl:px-24">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="rounded-md border border-grey-800 border-2">
          <div className="p-4">
            {/*card title*/}
            <div className="flex flex-row">
              <div>
                <Image src={userAvatar1} alt="image" />
              </div>
              <div className="flex flex-col pl-4">
                <div className="text-blue-800 font-bold">Sarah Andrews</div>
                <div>$100k in revenue</div>
              </div>
            </div>
            {/*card content*/}
            <div>
              Setting up my portfolio with Fiber took no more than 10 minutes.
              Since then, my portfolio has attracted a lot of clients and made
              me more than $100k
            </div>
            {/*View porfolio*/}
            <div className="rounded-md bg-white border border-grey flex justify-center mt-4">
              <div className="text-blue-800 py-4 font-bold">
                View Sarah's Portfolio
              </div>
            </div>
          </div>
        </div>
        {/*CARD 2*/}
        <div className="rounded-md border border-grey-800 border-2">
          <div className="p-4">
            {/*card title*/}
            <div className="flex flex-row">
              <div>
                <Image src={userAvatar2} alt="image" />
              </div>
              <div className="flex flex-col pl-4">
                <div className="text-blue-800 font-bold">Matthew Higgins</div>
                <div>$20k in revenue</div>
              </div>
            </div>
            {/*card content*/}
            <div>
              I have been getting A LOT of leads ever since I used Fiber's
              premade templates, now I just need to work on my case studies and
              I'll be ready to go!
            </div>
            {/*View porfolio*/}
            <div className="rounded-md bg-white border border-grey flex justify-center mt-4">
              <div className="text-blue-800 py-4 font-bold">
                View Matthew's Portfolio
              </div>
            </div>
          </div>
        </div>
        {/*CARD 3*/}
        <div className="rounded-md border border-grey-800 border-2">
          <div className="p-4">
            {/*card title*/}
            <div className="flex flex-row">
              <div>
                <Image src={userAvatar3} alt="image" />
              </div>
              <div className="flex flex-col pl-4">
                <div className="text-blue-800 font-bold">Janice Dave</div>
                <div>$30k in revenue</div>
              </div>
            </div>
            {/*card content*/}
            <div>
              I only just started freelancing this year and I have already made
              more than I ever made in my full-time job. The templates are just
              so amazing.
            </div>
            {/*View porfolio*/}
            <div className="rounded-md bg-white border border-grey flex justify-center mt-4">
              <div className="text-blue-800 py-4 font-bold">
                View Janice's Portfolio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
