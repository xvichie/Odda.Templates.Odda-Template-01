import { Accordion, Button } from "flowbite-react";
import React from "react";
import Container from "../../components/Shared/Container/Container";

function FAQ() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center relative h-[75vh]">
        <div className="z-[50] flex flex-col gap-2 items-center">
          <h1 className="font-semibold text-white text-4xl text-center lg:text-5xl">
            ხშირად <br /> დასმული <br /> შეკითხვები
          </h1>
          <h3 className="text-gray-300 text-center">
            არ დატოვო არცერთი შეკითხვა პასუხგაუცემელი
          </h3>
          <Button outline color={"primary"} className="bg-none w-40 mt-4">
            დაგვიკავშირდი
          </Button>
        </div>
        <img
          src="/images/backgrounds/background-01.jpg"
          className="brightness-[30%] h-[75vh] w-screen object-cover absolute"
          alt="background-01"
        />
      </div>
      <div className="flex flex-col py-24 bg-darkBackground">
        <Container>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-gray-200 text-4xl text-center">
                ხ.დ.კ.
              </h1>
              <h3 className="text-gray-400 text-lg text-center">შეკითხვები</h3>
            </div>
            <div>
              <Accordion collapseAll>
                <Accordion.Panel>
                  <Accordion.Title>რა ღირს თქვენთან დარჩენა?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to&nbsp;
                      <a
                        href="https://flowbite.com/docs/getting-started/introduction/"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        get started&nbsp;
                      </a>
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    რა სერვისები გაქვთ?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                      >
                        Figma design system
                      </a>
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    რა გასართობები არის გარშემო?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                     worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default FAQ;
