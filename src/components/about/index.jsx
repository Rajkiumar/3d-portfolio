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
            Aspiring Full-Stack Developer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I am a fresher passionate about building clean, user-friendly, and
            responsive web applications. I work with JavaScript, React.js, and
            Next.js to create modern interfaces and meaningful digital
            experiences. Through academic and personal projects, I have gained
            hands-on experience in frontend development, API integration, and
            performance-focused UI design. I am actively looking for
            opportunities where I can contribute, learn from experienced teams,
            and grow as a professional software developer.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            8+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1 <sub className="font-semibold text-base">fresher profile</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Rajkiumar&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub top languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=Rajkiumar&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub profile stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,java,js,cpp,react,redux,tailwind,threejs,nextjs,ts,flutter,nodejs,express,mongodb,mysql,docker,git,github,githubactions,firebase,figma,supabase,vercel,netlify,vite,npm,yarn,vscode`}
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <div className="w-full flex flex-wrap gap-2 items-center justify-start">
            <img
              src="https://img.shields.io/badge/REST-API-0A66C2?style=for-the-badge"
              alt="REST API"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/JWT-Auth-111827?style=for-the-badge"
              alt="JWT Auth"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/WebSockets-Basic-7C3AED?style=for-the-badge"
              alt="WebSockets basic"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/SQL-Database-2563EB?style=for-the-badge"
              alt="SQL"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Render-Deploy-0B0F19?style=for-the-badge"
              alt="Render deploy"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Gemini-API-1D4ED8?style=for-the-badge"
              alt="Gemini API"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/RAG-Patterns-0F766E?style=for-the-badge"
              alt="RAG patterns"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/UI%2FUX-Designer-DB2777?style=for-the-badge"
              alt="UI UX Designer"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/React%20Native-Expo%20(Basic)-111827?style=for-the-badge"
              alt="React Native Expo basic"
              loading="lazy"
            />
            <img
              src="https://img.shields.io/badge/Bcrypt-Security-374151?style=for-the-badge"
              alt="Bcrypt"
              loading="lazy"
            />
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=Rajkiumar&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="GitHub streak stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
