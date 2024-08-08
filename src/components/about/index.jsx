import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

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

       

        {/** forntend-Development */}

        <ItemLayout className={"col-span-full flex flex-col gap-4"}>
          <p className="text-xl md:text-2xl">Frontend Development</p>
          <div className="lg:flex w-full lg:justify-between">
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Programming Language</h1>
              <hr className="mb-6"/>
              <img
                className="w-50 mb-8"
                src={`https://skillicons.dev/icons?i=typescript,javascript`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Tech Stack</h1>
              <hr className="mb-6"/>
              <img
                className="w-50 mb-8"
                src={`https://skillicons.dev/icons?i=nextjs,react,html,css,tailwindcss,bootstrap,materialui`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-xs sm:text-sm md:text-base mb-4 text-center">Tools</h1>
              <hr className="mb-6"/>
              <img
                className="w-50 mb-8"
                src={`https://skillicons.dev/icons?i=vscode,github,vercel`}
                alt="CodeBucks"
                loading="lazy"
              />
            </div>
          </div>
        </ItemLayout>   
      </div>
    </section>
  );
};

export default AboutDetails;
