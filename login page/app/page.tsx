"use client";
import Login from "./component/Login/Login";
import { FaBeer } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
export default function Home() {

  return (
    <>
    {
      'flex items-center justify-center p-4 text-sm font-medium  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 ml-2 first:ml-0 rounded-t-lg border-b-2'
    }
      <div className="flex text-center flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700">
        <button className="  text-blue-600   border-blue-600 active dark:text-blue-500 dark:border-blue-500">
          Login
        </button>
        <button className=" border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
          Security
        </button>
        <button className=" rounded-t-lg border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
          Devices
        </button>
      </div>

      {/* <Login /> */}
      {/* // <div
      //   className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      //   role="status"
      // >
      //   <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      //     Loading...
      //   </span>
      // </div>
      {/* <div
        className="fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full items-center justify-center flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80"
        aria-hidden="false"
      >
        <div className="relative h-full w-full p-4 max-w-2xl">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add Withdrawal Address
              </h3>
              <button
                className="ml-auto inline-flex  items-center rounded-lg bg-transparent p-1.5 text-lg text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-4">
                    <div className="w-full">
                      <label className="mb-2 block text-xs font-bold uppercase text-gray-600">
                        Address Label
                      </label>
                      <div className="relative">
                        <input
                          name="label"
                          type="text"
                          className="w-full rounded border bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow focus:outline-none border-gray-200 undefined"
                          placeholder="4-20 characters. e.g. Amy's Binance"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="mb-2 block text-xs font-bold uppercase text-gray-600">
                        Select Crypto
                      </label>
                      <div>
                        <div className="flex-none cursor-pointer rounded border bg-white px-2 py-3 text-sm text-gray-600 shadow border-gray-200">
                          <div className="flex items-center">
                            <span className="text-sm">Etherum</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="ml-auto h-4 w-4 "
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="asset" value="ETH" />
                    </div>
                    <div className="w-full">
                      <label className="mb-2 block text-xs font-bold uppercase text-gray-600">
                        Address
                      </label>
                      <div className="relative">
                        <input
                          name="address"
                          type="text"
                          className="w-full rounded border bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow focus:outline-none border-gray-200 undefined"
                          placeholder="Enter address here"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="mb-2 block text-xs font-bold uppercase text-gray-600">
                        Select Network
                      </label>
                      <div>
                        <div className="flex-none cursor-pointer rounded border bg-white px-2 py-3 text-sm text-gray-600 shadow border-gray-200">
                          <div className="flex items-center">
                            <span className="text-sm">Ethereum</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="ml-auto h-4 w-4 "
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="network" value="ETH" />
                    </div>
                    <div className="w-full">
                      <label className="mb-2 block text-xs font-bold uppercase text-gray-600">
                        Memo (Optional)
                      </label>
                      <div className="relative">
                        <input
                          name="memo"
                          type="text"
                          className="w-full rounded border bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow focus:outline-none border-gray-200 undefined"
                          placeholder="Enter Memo here"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500">
                      Please confirm if the receiving address requires a MEMO/
                      Tag. If it is not filled or filled incorrectly, the asset
                      will be lost. Other exchanges or wallets also call Tag
                      names Memo, digital ID, label, and notes.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="relative w-full">
                      <div className="w-full">
                        <label className="mb-2 block text-xs font-bold uppercase text-gray-600">
                          Email code
                        </label>
                        <div className="relative">
                          <input
                            maxLength={6}
                            name="email_otp"
                            type="otp"
                            className="w-full rounded border bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow focus:outline-none border-gray-200 undefined"
                            placeholder="Enter the 6-digit code"
                          />
                          <a href="#">
                            <div className="absolute top-[50%] right-2 mt-[-10px] h-5 w-20 text-center text-sm text-blue-500">
                              Get Code
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-base px-5 py-2.5 text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 rounded w-full relative  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>Save</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
