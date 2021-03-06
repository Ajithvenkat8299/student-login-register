import React, { Component } from "react";
import React from 'react'

const Login = () => {
    return (
        <div>
            <p class="ml-30 font-bold ml-32 mt-16 text-xl">Login</p>
        
        <div class="flex flex-wrap content-start ">
            <div class="mt-32 ml-96">
                <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="username">
                      Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2 text-left" for="password">
                      Password
                    </label>
                    <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********" />
                    
                  </div>
                  <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                  &copy;2021 All rights reserved.
                </p>
            </div>
          </div>
        </div>
    )
}

export default Login
