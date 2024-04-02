import React from "react";
function Header() {
  return (

      // Header
    <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16  z-40 border-solid border-y-2 border-gray-200">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
            <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                    <div className="relative flex items-center w-full lg:w-64 h-full group">
                        <ul className="navbar-nav flex items-center">
                            <li className="nav-item d-none d-sm-inline-block ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black-600" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block ml-4">
                                <a href="/admin" className="nav-link">خانه</a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="/admin/site/logout" className="nav-link">خروج</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                    <ul className="navbar-nav flex items-center">
                        <li className="nav-item d-none d-sm-inline-block ml-4">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                <path
                                    d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z"
                                    fill="currentColor"/>
                                <path
                                    d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z"
                                    fill="currentColor"/>
                            </svg>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block ml-4">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M15.133 10.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.944.944 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.39A1.001 1.001 0 1 1 4.854 3.8a7.431 7.431 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 15.146 3.8a1 1 0 0 1 1.471-1.354 9.425 9.425 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z"/>
                            </svg>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    </header>
    // Header
      // <div className="flex w-full h-[50px]  bg-red-900">
      //   header
      // </div>


  );
}

export default Header;
