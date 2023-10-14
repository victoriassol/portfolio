import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faReact,
  faSquareJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <header className="py-4 font-young">
        <img src="/vick.PNG" className="w-24 m-auto" />
      </header>
      <aside className="sm:fixed sm:mt-40">
        <ul className="flex sm:flex-col items-center justify-center">
          <li className="p-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-10 hover:text-lime-400"
            />
          </li>
          <li className="p-2">
            <FontAwesomeIcon icon={faAt} className="w-10 hover:text-lime-400" />
          </li>
          <li className="p-2">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-10 hover:text-lime-400"
            />
          </li>
        </ul>
      </aside>
      <main className="flex min-h-screen flex-col items-center justify-between md:p-24 py-10 md:py-5 font-young">
        <section className="">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="font-bold text-5xl">
                Victoria Sol Ecalle
              </h1>
              <p className="text-lg mt-4 font-jost">
                Rising React developer based in Rosario, Argentina.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src="/vic.png" className="rounded-full" />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="flex gap-10">
            <a target='_blank'
            rel='noopener noreferrer' href="www.x.com">
            <FontAwesomeIcon icon={faReact} className="w-20 " />
            </a>
            <FontAwesomeIcon className="w-20 " icon={faSquareJs} />
            <FontAwesomeIcon className="w-20 " icon={faNode} />
            <img
              src="/tailwind-css.svg"
              alt="Tailwind CSS Logo"
              className="w-20 "
            />
          </div>
        </section>
        <section>
          <div className="flex flex-wrap max-w-screen-lg">
            <div className="w-full px-4 mb-8">
              <div className="bg-gray overflow-hidden">
                <div className="p-4">
                  <h2 className="text-2xl md:text-5xl font-bold mb-2">
                    Game Finder
                  </h2>
                </div>
                <img
                  src="/gamefinder.PNG"
                  alt="Game Finder"
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="w-full px-4 mb-8">
              <div className="bg-gray rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-2xl md:text-5xl font-bold mb-2">
                    Mega Rocket
                  </h2>
                </div>
                <img
                  src="/megarocket.PNG"
                  alt="Card 2"
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full px-4 mb-8">
              <div className="bg-gray rounded-lg overflow-hidden">
                <div className="p-4">
                  <h2 className="text-2xl md:text-5xl font-bold mb-2">
                    Artist's gallery
                  </h2>
                </div>
                <img
                  src="/alegoma.PNG"
                  alt="Card 3"
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0">
              <img
                src="/vick.PNG"
                class="w-20"
                alt=""
              />
              </a>

            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Github
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  victoriaecalle@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            2023 Victoria Sol Ecalle
          </span>
        </div>
      </footer>
    </>
  );
}
