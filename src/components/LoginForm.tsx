import { SubmitHandler, useForm } from "react-hook-form";

import { FaGithub, FaGoogle } from "react-icons/fa";

interface FormData {
  email: string;
  password: string;
}

const LoginPopup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div
      className="relative p-4 w-full
    //  md:w-[400px]
      h-full md:h-auto"
    >
      <div className="relative bg-white rounded-lg shadow-lg">
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        >
          <span className="sr-only">Close popup</span>
        </button>

        <div className="p-5">
          <div className="text-center">
            <p className="text-sm text-slate-600">
              You must be logged in to perform this action.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-[1.5rem]">
            <button className="inline-flex h-10 text-[14px] w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <FaGithub className="h-8 w-8 mr-[1rem]" />
              Continue with GitHub
            </button>

            <button className="inline-flex h-10 text-[14px]  w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <FaGoogle className="h-8 w-8 mr-[1rem]" />
              Continue with Google
            </button>
          </div>

          <div className="flex w-full items-center gap-2 py-4 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200"></div>
            <span>OR</span>
            <div className="h-px w-full bg-slate-200"></div>
          </div>

          <form
            className="w-full flex flex-col gap-[2rem] py-[1rem]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Email address is required",
              })}
              className={`block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 font-[600] text-[1rem] mt-1">
                {errors.email.message}
              </p>
            )}

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password", { required: "Password is required" })}
              className={`mt-4 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 font-[600] text-[1rem]  mt-1">
                {errors.password.message}
              </p>
            )}

            <p className="mb-3 mt-2 text-sm text-gray-500">
              <a
                href="/forgot-password"
                className="text-blue-800 text-[12px] font-[550] hover:text-blue-600"
              >
                Reset your password?
              </a>
            </p>
            <button
              type="submit"
              className="inline-flex  w-full items-center justify-center rounded-lg bg-black p-2 py-[1rem] mb-[3rem] text-[16px] font-[600] text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
            >
              Continue
            </button>
          </form>

          <div className="mt-6 text-center text-[1rem] font-[500] text-slate-600">
            Don't have an account? &nbsp;
            <a
              href="/signup"
              className="font-medium text-[1rem]  text-blue-600 hover:text-blue-800"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
