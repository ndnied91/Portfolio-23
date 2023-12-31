import { Link, useRouteError } from 'react-router-dom';

import Maya from '../assets/Maya.jpeg';

const Error = () => {
  //create two errors
  const error = useRouteError();
  console.log(error);
  //first to catch 404
  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8 ">
        <div className="text-center">
          <p className="lg:text-9xl text-5xl font-semibold text-primary">
            404 :(
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7 ">
            Sorry, we couldn’t find the page you’re looking for.
            {/* maya */}
            <div className="flex justify-center flex-col mt-2 items-center">
              <p className="mb-1">While you're here, here's my doggo Maya </p>
              <img
                src={Maya}
                alt="best dog in the whole world"
                className="md:w-1/3 rounded-3xl"
              />
            </div>
          </p>
        </div>

        <Link className="btn btn-primary" to="/">
          Go back Home
        </Link>
      </main>
    );
  } else {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8 ">
        Something went wrong :/
        <div className="">
          <Link className="btn btn-primary" to="/">
            Go back Home
          </Link>
        </div>
      </main>
    );
  }
};

export default Error;
