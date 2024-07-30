import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center
    relative overflow-hidden mx-auto py-10 md:py-0">
        
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />

      <div className="p-4 relative z-10 w-full text-center">

        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text
         text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Empower Your Learning Journey
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Discover a diverse range of expertly crafted courses designed to boost your skills 
        and advance your career. Whether you are looking to learn a new language, master programming, 
        or explore creative arts, our platform provides you with the tools and resources to succeed. 
        Join us and start your learning journey today
        </p>

        <div className="py-4">
            <Link href={"/courses"}>
            <Button borderRadius="1.9rem"
            className="bg-white dark:bg-black text-black dark:text-white
            border-neutral-200 dark:border-slate-800">
            Explore Courses!
            </Button>
            </Link>
        </div>
      </div>





    </div>
  )
}

export default HeroSection
