export function Hero() {
  return (
    <div className="flex justify-between items-center flex-col px-[20px] py-[16px] w-full lg:container lg:mx-auto lg:px-20">
      <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl ">
        We invest in the world’s potential
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <a
        href="#"
        className="group inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
      >
        Learn more
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180 transition-transform transform-gpu group-hover:translate-x-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
