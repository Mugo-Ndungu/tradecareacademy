import { SignUp } from "@clerk/nextjs";
import TLogoImage from "./tradeCareacademylogo.png";
import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <main>
      <div className="w-full flex justify-center p-10">
        <SignUp />
      </div>
    </main>
    //     <section className="bg-gray-50 dark:bg-gray-900">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //       {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
    //           <img  className="w-32 h-33 mr-2" src="/images/logo/logo.png" alt="logo" />
    //           TradeCare Academy
    //       </a> */}
    //       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //               <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //                   Trade Care Academy <br />Create an account
    //               </h1>
    //               <form className="space-y-4 md:space-y-6" action="#">
    //                   <div>
    //                       <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Names</label>
    //                       <input type="text" name="fullname" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
    //                   </div>
    //                   <div>
    //                       <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    //                       <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
    //                   </div>
    //                   <div>
    //                       <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    //                       <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    //                   </div>
    //                   <div>
    //                       <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
    //                       <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    //                   </div>
    //                   <div className="flex items-start">
    //                       <div className="flex items-center h-5">
    //                         <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
    //                       </div>
    //                       <div className="ml-3 text-sm">
    //                         <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
    //                       </div>
    //                   </div>
    //                   {/* <button type="submit" className="w-full text-white bg-yellow-900">Create an account</button> */}
    //                   <Button className="w-full">Create an account</Button>
    //                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //                       Already have an account? <a href="/sign-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
    //                   </p>
    //               </form>
    //           </div>
    //       </div>
    //   </div>
    // </section>
  );
}
