import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
          </Switch>
      </BrowserRouter>
      <div class="relative min-h-screen md:flex">
        <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          <a href="#" class="block p-4 text-white font-bold">Student login register</a>
            <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
        </div>


        <div class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <a href="#" class="text-white flex items-center space-x-2 px-4">
            <span class="text-2xl font-extrabold">&nbsp;Students Details</span>
            </a>

            <nav>
              <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                Home
              </a>
              <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                About
              </a>
              <a href="#" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                Features
              </a>
              
            </nav>
        </div>

        
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
      
      
      <div class="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div class="flex flex-col md:flex-row">
            <div class="w-full">
              <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign up
              </h1>
              <div>
                <label class="block text-sm text-left">
                  Name
                </label>
                <input type="text"
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Name" />
              </div>
              <div class="mt-4">
                <label class="block text-sm text-left">
                  Email
                </label>
                <input type="email"
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Email Address" />
              </div>
              <div>
                <label class="block mt-4 text-sm text-left">
                  Password
                </label>
                <input
                  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Password" type="password" />
              </div>
              <button
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                href="#">
                Sign up
              </button>

              <div class="mt-4 text-center">
                <p class="text-sm">Don't have an account yet? <a href="#"
                    class="text-blue-600 hover:underline"> Sign up.</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
