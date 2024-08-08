import React from "react";
import ItemLayout from "./ItemLayout";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">Professonal Projects</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            7+ <sub className="font-semibold text-base">Personal Projects</sub>
          </p>
        </ItemLayout>

        {/** experience */}
        <ItemLayout className={"col-span-full flex flex-col gap-4"}>
          <p className="text-xl md:text-2xl">Professional Experience</p>
          <div className="md:xl mb-6">
            <p>Software Engineer(Intern), Astha IT.</p>
            <p className="text-center">2024, Mar - 2024, Jun</p>
          </div>
          <div>
            <h1>Tech Used</h1>
            <hr />
          </div>
          <div className="w-full flex justify-between">
            <div>
              <h1>Frontend</h1>
              <p>Next JS, TypeScript, Zustand, Tanstack query, Material UI, Tailwind CSS.</p>
              <h1 className="mt-6">Backend</h1>
              <p>C#, ASP.Net Core Web Api, postgresql.</p>
              <p className="mt-6">
                * Designed and implemented the Registration, Sidebar Layout, and Profile, Dashboard, Messages.
              </p>
              <p className="mt-6">
                * Enabling capabilities with optimized performance and advanced functionality by integrating third-party APIs.
              </p>
              <p className="mt-6">
                * Acquired proficiency in DevOps, OOP, SDLC, and Git.
              </p>
            </div>
            <div>
              <img
                className="w-[120px] mr-4 mb-8 mt-4"
                src={`https://skillicons.dev/icons?i=nextjs,typescript,materialui,tailwindcss`}
                alt="CodeBucks"
                loading="lazy"

              />
              <img
                className="w-[100px] mr-4 mb-8 mt-4"
                src={`https://skillicons.dev/icons?i=cs,dotnet,postgresql`}
                alt="CodeBucks"
                loading="lazy"

              />
            </div>
          </div>

        </ItemLayout>



        {/** forntend-Development */}

        <ItemLayout className={"col-span-full flex flex-col gap-4"}>
          <p className="text-xl md:text-2xl">Frontend Development</p>
          <div className="lg:flex w-full lg:justify-between ">
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Programming Language</h1>
              <hr className="mb-6" />
              <img
                className="w-50 mb-8"
                src={`https://skillicons.dev/icons?i=typescript,javascript`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Tech Stack</h1>
              <hr className="mb-6" />
              <img
                className="w-50 mb-8"
                src={`https://skillicons.dev/icons?i=nextjs,react,html,css,tailwindcss,bootstrap,materialui`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Tools</h1>
              <hr className="mb-6" />
              <img
                className="w-50 mb-8"
                src={`https://skillicons.dev/icons?i=vscode,github,vercel`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
          </div>
        </ItemLayout>
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-center"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize text-center">
            Backend Developer
          </h2>
          <div className="lg:flex lg:justify-between gap-24">
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Programming Language</h1>
              <hr className="mb-6" />
              <img
                className="w-[34px] mb-8"
                src={`https://skillicons.dev/icons?i=cs`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Tech Stack</h1>
              <hr className="mb-6" />
              <img
                className="w-40 mb-8"
                src={`https://skillicons.dev/icons?i=npm,nodejs,expressjs,dotnet`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Tools</h1>
              <hr className="mb-6" />
              <img
                className="w-28 mb-8"
                src={`https://skillicons.dev/icons?i=vscode,visualstudio,git`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
          </div>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-6 flex flex-col"}
        >
          <h1 className="lg:text-2xl sm:text-xl"> Database</h1>
          <div>
            <img
              className="w-[130px] mb-8"
              src={`https://skillicons.dev/icons?i=mongodb,postgres,mysql`}
              alt="CodeBucks"
              loading="lazy"
            />
          </div>

        </ItemLayout>
        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-2 flex flex-col"}
        >
          <h1 className="lg:text-2xl sm:text-xl">Tools</h1>
          <div>
            <img
              className="w-[150px] mb-8"
              src={`https://skillicons.dev/icons?i=postman,git,github`}
              alt="CodeBucks"
              loading="lazy"
            />
          </div>

        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
