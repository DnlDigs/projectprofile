import profilpic from "../assets/bgremove.png"; // adjust path
import desig from '../assets/desig.svg'
import './Header.css'

const AboutMe = () => {
  return (
<section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          
          {/* Text Content bg-yellow-300 dark:bg-gray-900 */}
          <div>
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                Hey <span className="inline-block animate-waving-hand origin-[70%_70%]">👋</span> I am
                <br className="block sm:hidden" />
                Daniel
                </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
            I’m a passionate software developer focused on building modern, fast, and beautiful digital experiences. 
            Whether it’s front-end magic or back-end logic, I bring ideas to life with clean code.
            </p>

            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2"></span>
                <span className="relative"> Have a question?  </span>
              </span>
              <br className="block sm:hidden" />
               Ask me on{" "}
              <a
                href="#"
                title="Twitter"
                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
              >
                Twitter
              </a>
            </p>
          </div>

          {/* Image Content */}
          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src={desig}
              alt=""
            />
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src={profilpic}
              alt="Business Woman"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
