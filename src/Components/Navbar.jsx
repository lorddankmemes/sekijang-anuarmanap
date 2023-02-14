import { Link } from "react-router-dom";

const navigations = [
  { name: "Anuar", href: "/", current: false },
  { name: "Kenali Saya", href: "/bio", current: false },
  { name: "Survey P141", href: "/kajiselidik-anak-muda-sekijang" },
  // { name: "P141 Sekijang", href: "#", current: true }
];

const Navbar = () => {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex w-0 flex-1 lg:hidden">
          {/* <button className="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
            <span className="sr-only">Account</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button> */}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/">
            <span className="sr-only">Logo</span>
            <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
          </Link>
        </div>

        <div className="flex w-0 flex-1 justify-end lg:hidden">
          {/* <button className="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button> */}
        </div>

        <nav className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1">
          {navigations.map((nav) => {
            return (
              <Link className="text-gray-900" to={nav.href} key={nav.name}>
                {nav.name}
              </Link>
            );
          })}
        </nav>

        <div className="items-center gap-2 flex">
          saya@anuar.com
          <a
            className="inline-block rounded-full border border-blue-600 bg-blue-600 p-2 text-white hover:bg-blue-900 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            href="https://instagram.com/anuarmanap?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Instagram </span>

            <svg
              style={{ color: "white" }}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
          <a
            className="inline-block rounded-full border border-blue-600 bg-blue-600 p-2 text-white hover:bg-blue-900 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            href="https://www.facebook.com/anuar.abdmanap"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Facebook </span>

            <svg
              style={{ color: "white" }}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          {/* <a
            className="inline-block rounded-full border border-blue-600 bg-blue-600 p-2 text-white hover:bg-blue-900 hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            href="https://www.tiktok.com/@mdsalleheenmohd"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Tiktok </span>

            <svg
              style={{ color: "white" }}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path
                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"
                fill="white"
              ></path>
            </svg>
          </a> */}
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
          {navigations.map((nav) => {
            return (
              <Link
                className="flex-shrink-0 pl-4 text-gray-900"
                to={nav.href}
                key={nav.name}
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
