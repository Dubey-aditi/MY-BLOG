import background5 from "../assets/background5.png";
import img17 from "../assets/img17.png";
import Navbar from "../react-components/Navbar";

export default function AboutMePage() {
  return (
    <div className="h-screen flex flex-col">
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ background: `url(${background5})`, backgroundSize: "cover" }}
      >
        <Navbar />
        <div>
          <div className="flex flex-col items-center justify-center px-4 py-10 space-y-10 min-h-screen">
            <div className="flex flex-col items-center justify-center space-y-4 -mt-70">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Hi, I&#39;m Aditi Dubey
                </h1>
              </div>
              <div className="inline-flex flex-col gap-2 items-center">
                <img
                  src={img17}
                  width="250"
                  height="250"
                  alt="Profile Picture"
                  className="rounded-full overflow-hidden aspect-square object-cover"
                />
              </div>
              <div className="max-w-2xl text-center text-gray-500 dark:text-gray-400 px-4">
                <p className="text-lg leading-relaxed">
                  Professional stories belong on LinkedIn — here, I&#39;ll share
                  a little more about who I am. I&#39;m a simple girl, wandering
                  through life, eager to live all its colors. I find joy in
                  creativity and peace in art. I am a classical music learner
                  who dreams of singing in her own cozy café in the mountains,
                  where the air is filled with music and the sound of
                  instruments. I&#39;m also a chai enthusiast and always on the
                  lookout for the perfect cup.
                </p>
              </div>
              <div className="inline-flex flex-col gap-2 items-center">
                <div className="grid gap-1">
                  <span className="text-xl font-medium justify-center">
                    Connect with me
                  </span>
                  <div className="inline-flex gap-5 text-2xl justify-center">
                    <a
                      href="mailto:99dubeyaditi@gmail.com"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      target="_blank"
                    >
                      <MailIcon className="w-10 h-10" />
                      <span className="sr-only">Mail</span>
                    </a>
                    <a
                      href="https://github.com/Dubey-aditi"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      target="_blank"
                    >
                      <GithubIcon className="w-10 h-10" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aditi-dubey-0242ba197/"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      target="_blank"
                    >
                      <LinkedinIcon className="w-10 h-10" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <path d="M22 6 12 13 2 6" />
    </svg>
  );
}
