import React from "react";
import Container from "../../Shared/Container/Container";
import { Button } from "flowbite-react";

function MainLandingAboutUs() {
  return (
    <div className="bg-darkBackground z-[10]">
      <div className="bg-lightBackground2 pt-8 pb-24 rounded-b-[36px] z-[10]">
        <Container>
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            <img
              src="/images/cottages/cottage-inside-01.jpg"
              alt="cottage-inside"
              className="rounded-2xl object-cover aspect-square lg:h-96"
            />
            <div className="w-full flex flex-col justify-between gap-6 mt-4">
              <div className="flex flex-col gap-6">
                <h2 className="text-center text-white text-2xl font-semibold
                lg:text-4xl lg:text-left">
                  კეთილი იყოს შენი მობრძანება დასვნების ოაზისში
                </h2>
                <h4 className="text-center text-slate-100 text-md
                lg:text-left">
                  იპოვე და დაჯავშნე შენთვის სასურველი ოთახი
                </h4>
                <h5 className="text-center text-sm text-gray-300
                lg:text-left">
                  კოტეჯი მდებარეობს ულამაზეს ბუნებაში, ქალაქის ხმაურიდან შორს.
                  აქ შეგიძლიათ დაისვენოთ და განიტვირთოთ, დატკბეთ მშვიდობითა და
                  სიწყნარით. სახლი აღჭურვილია ყველა საჭირო კომფორტით: მყუდრო
                  საძინებელი, კომფორტული მისაღები ოთახი, სრულად აღჭურვილი
                  სამზარეულო და თანამედროვე სააბაზანო. კოტეჯის ეზო საშუალებას
                  მოგცემთ გაატაროთ დრო სუფთა ჰაერზე, მოაწყოთ პიკნიკი ან უბრალოდ
                  დატკბეთ ბუნების ხედებით.
                </h5>
              </div>
              <Button outline color="primary" className="bg-none lg:w-36
              hover:bg-blue-500">
                გაიგე მეტი
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainLandingAboutUs;
