
"use client"
import Link from 'next/link'
import React, {useState} from 'react'

function Drawer() {

    const [isDropdownOpen, setDropdownOpen] = useState({
        sales: false,
        accounting: false,
        tickets: false,
        accountancy: false,
        // اینجا می‌توانید سایر گزینه‌ها با زیرگزینه‌هایشان را اضافه کنید
    });

    const toggleDropdown = (dropdownName) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName],
        }));
    };
    return (
        // Nav Bar
        <div className="h-full hidden lg:block shadow-lg relative w-80">
            <div className="bg-gray-900 h-full  dark:bg-gray-700">
                <div className="flex items-center justify-center pt-6">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35"*/}
                    {/*     height="35">*/}
                    {/*  <image width="35" height="35"*/}
                    {/*         xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAP0lEQVRYhe3OMQEAIADDsIF/z0NBuXc0CnLaNiPuSiRmPswQM8QMMUPMEDPEDDFDzBAzxAwxQ8wQM8QM2ckkeX+LBELpdJssAAAAAElFTkSuQmCC"/>*/}
                    {/*  <image x="2" width="28" height="25"*/}
                    {/*         xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAZCAYAAAAiwE4nAAAEYUlEQVRIia1WTYgcRRT+vldV3TOz2exffsghJBcNGhU1BxOQJMRDAgoi/ixBBCFeRC/i0asiePDmSSVBoiARDQgBEU8JBA+Cp0gkNyWERFeT7M5Md1fVk+qZXXtmZyVR38w3VFf36/f31XvDHVOEAmD6EFgpFb1S6/UkUQWsEbjM7l8pqhMKHNg8lfemJR71PjzSXwnfbaSbRDa+NVmMkTlY+Wi59Bd81FdC1L3d2/3LZVG1b1b6AQUz/6R/xwZTZGK4LQrPdQt/IoRoVu+1DU9G4eGVMu6JwoN3ZdAQdYqTgSZEaJT8pKjC/rEXXHfExX7AS+m6Ao4L6xpNxIjBZCi3AiuoaygNWCeLhY9Hxx10wLdBMbdcxsPpuh9xLBLbBl6vx7oIk6GpXFKtYO0QTlwZ9M0U6bjkglOR+lRU5OmWjzoXySc34s3EGmaWcAbwAAKAKuKB0sdH1zkHXG1ZnK+IF5r7fcWL2MDihqSZyohMgBAUGrU36RlHfC0GW/sBR5r7RdTHVXjPJB0znXHoLTH4cq24uROQRAjxNyh+j8AuALcBLCVMCd4S4t6uxz4AywTaAKzWJedVo7gwXoV08GcVKAlq02BNMiEqBQufokS3CjqbWdods3kkobMtuxxV29eXCq4UsSxLP1tEPFECrxnL+U1BH46KkexwOuP7/YBFqPab7WV1FQGq1oGm4xGsoW7uOJ+uo8KQ1LKKEao3WkbOM8RPfeEvFcTLcx17gapXRgxOCeY9ea4I+thG9bwbcc7Eubb7zJT+9a3z7mYrNxhhd4fAJsGW3PDHySfn32FT213elpk98wCaqA0OjHJXJvzhfzXaspe2O9m+AGCBAxg3LJYCNw3xuSETy+7TAeP+k5Q+bjWZOZgDZ1W1WxOx0zigOvwhsROCA1XEoaDYMeDL2jOpo9hhy615oGtq6DciXCVfPpObk7YKZ+oxOG3GYyAMFe2ch6ZyXCsjez6Sqb8aY3irF6/d6vo+/85MDSNAOzc7hbRpP0RFiICzggy86bvlUk39WcsRzDhiS44HrUBrGBRGUFhB4QzLjvBIynUKM/UMN0RLgMzgSyErEZZClCTKtJ5pua+2CLEggIxXOuXHA8/7mBox4AOyEJH5iCwE/RWqF5tjJjlthqEa4ExUtTGqiwqnCpfWXR+O0cjuelqkVDSRWXVFxLOTyGKIs8Cwcwy7UfKYQwjwjTO4Ma7ng7bgzDOD5xtDNqoigvsLj/vXVZboWeBDbaRDhkxZHbQasZQJPx7XVVX0gi5SmL4DpQQjRKAcjxPmngPeoeKnUXqN1iM5w4D3Wo4/j+v3Q9wn1jwksY4MCHUBubnn49PrjBGnLPAuGs6tRTaevqh/5ORz7cz8MrLvg/Uii5h1XMNCSxbTFFj1mUCREW93CFntSONIjB1HB8C04d7M8Hs03tfJ3RXTsYP/o4kwnnyj73W3AH9a4ouMeNUAp5sH+U4kBR4VNyxw2givUmS7QltV0Oovk70DD93TSqEAAAAASUVORK5CYII="/>*/}
                    {/*  <path data-name="Color Fill 1"*/}
                    {/*        d="m6.676 25.868.844.094c-.031 1.457-.29 3.909.281 4.878a3.406 3.406 0 0 0 1.876-.281v-1.595h.75a2.834 2.834 0 0 0 .373 1.876 3.665 3.665 0 0 0 2.251-.375v-1.5h.749l-.188 2.157c-1.1.815-2.539.479-3.752.094-.488.618-1.615.521-2.439.281-.075 2.23-3.357 3.574-4.69 1.595a6.12 6.12 0 0 1-.37-3.192h.75a10.822 10.822 0 0 0 .189 2.628l.657.563c3.974.109 2.825-3.583 2.719-7.223Zm23.731 0h.75v5.816h-.75v-5.816ZM9.583 26.994l.938.094-.094.75-.937-.094Zm8.536 1.032h.844v.75h-.844v-.75Zm-1.97 1.874h.751a10.828 10.828 0 0 0 .188 2.626l.657.563c3.013.124 2.839-1.259 2.72-4.127l.844.094a3.149 3.149 0 0 0 .281 1.782 3.67 3.67 0 0 0 1.97-.281v-1.593h.75a2.834 2.834 0 0 0 .375 1.876H25.9l.281-.281a2.837 2.837 0 0 1 .563-2.064c1.983-.652 2.913.634 2.345 2.533-1.426 1.087-1.253.271-2.533.188l-.657.469c-.927.321-1.633-.306-2.157-.469-.5.626-1.7.524-2.533.281-.075 2.23-3.357 3.574-4.69 1.595a6.122 6.122 0 0 1-.37-3.192Zm11.256-.844-.469.469a1.655 1.655 0 0 0 .375 1.313h.094a1.394 1.394 0 0 0 1.126-.375v-.092l-.094-.844c-.209-.427-.382-.481-1.032-.469Zm-2.626 4.5h-.844l.094-.844.75.094v.75Zm-13.226-.75h.847v.75h-.847v-.746Zm1.219 0h.844v.75h-.843v-.746Zm9.943 0h.75v.75h-.75v-.746ZM12.21 34.029h.75v.75h-.75v-.75Z"*/}
                    {/*        style="fill:#e8125e;fill-rule:evenodd"/>*/}
                    {/*</svg>*/}

                </div>
                <nav className="mt-6 ">
                    <div>

                        <Link href={"/"} className="w-full  font-thin text-white flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-l from-gray-600 to-gray-700 border-l-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-l-4 border-white">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4  font-normal text-lg">
                                داشبورد
                            </span>
                        </Link>

                        <Link onClick={() => toggleDropdown("sales")}
                              className="w-full font-thin text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                              href={""}>
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                            </span>

                            <span className="mx-4 text-sm font-normal">
                                فروش
                            </span>
                            <span className="text-left">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"/>
        </svg>
    </span>
                        </Link>
                        {isDropdownOpen.sales && (
                            <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-lg mr-5">
                                <Link href={"/preorders"}
                                      className="block px-2 py-2 text-sm text-gray-500 hover:text-white flex items-center">
    <span className="text-right mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.414 6H17a1 1 0 011 1v10a1 1 0 01-1 1H3.414l-2-2V8a1 1 0 011-1zM6 12a2 2 0 100-4 2 2 0 000 4zm12-5a1 1 0 00-1 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 00-2 0v8a3 3 0 003 3h11a3 3 0 003-3v-8a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
    </span>
                                    <span className="text-sm text-left font-normal mr-1">
        سفارشات
    </span>
                                </Link>
                                <Link
                                    href={"/contracts"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M2 6c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v1H2V6zM2 10v1h7v-1H2zm8 0v1h8v-1h-8zm8-4h3c1.1 0 2 .9 2 2v1H18V6zM18 12v1H2v-1h16zm-7 5v1H2v-1h7zm-8 2h3c1.1 0 2 .9 2 2v1H2v-1c0-1.1.9-2 2-2zm12 0v1H10v-1h3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        قراردادها
    </span>
                                </Link>
                                {/* اینجا می‌توانید گزینه‌های بیشتری برای منوی دراپ‌دان اضافه کنید */}
                            </div>
                        )}

                        {/*اکانتینگ*/}
                        <Link onClick={() => toggleDropdown("accounting")}
                              className="w-full font-thin text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                              href={""}>
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                            </span>

                            <span className="mx-4 text-sm font-normal">
                                اکانتینگ
                            </span>
                            <span className="text-left">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"/>
        </svg>
    </span>
                        </Link>
                        {isDropdownOpen.accounting && (
                            <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-lg mr-5">
                                <Link href={"/users"}
                                      className="block px-2 py-2 text-sm text-gray-500 hover:text-white flex items-center">
  <span className="text-left">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a7 7 0 004.899-1.98 6.94 6.94 0 01-2.97 1.097A6.98 6.98 0 013 12a6.98 6.98 0 014.07-6.42 6.94 6.94 0 012.97 1.097A7 7 0 1010 14z"
                  clipRule="evenodd"/>
        </svg>
    </span>
                                    <span className="text-sm text-left font-normal mr-1">
        کاربران
    </span>
                                </Link>
                                <Link
                                    href={"/customers"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M12 2a3 3 0 00-3 3v2c-3.309 0-6 2.691-6 6v1c0 1.151.308 2.213.837 3.131l-.631 3.783a1 1 0 001.161 1.16l3.783-.63a7.985 7.985 0 003.132.836h1c3.309 0 6-2.691 6-6v-1c0-3.309-2.691-6-6-6h-1a7.985 7.985 0 00-.836-3.132l.631-3.783a1 1 0 00-1.16-1.161L15 5a3 3 0 00-3-3zM8.666 7.687A1.5 1.5 0 019.5 9.5v4a1.5 1.5 0 11-3 0v-4a1.5 1.5 0 011.166-1.454l-.084-.504A3.977 3.977 0 006 10v1a1 1 0 11-2 0v-1a3.977 3.977 0 00-.583-2.042l-.084.504zm7.708 6.041a5.978 5.978 0 00-.743-.743l-.504.084A1.5 1.5 0 0115.5 13v4a1.5 1.5 0 11-3 0v-4a1.5 1.5 0 011.166-1.454l-.084-.504a5.978 5.978 0 00-.743-.743l-.504.084a1.5 1.5 0 01-1.453-2.166l.504-.084a5.978 5.978 0 00.743-.743l.084-.504A1.5 1.5 0 0112.5 7h4a1.5 1.5 0 110 3h-4a1.5 1.5 0 01-1.454-1.166l.084.504a5.978 5.978 0 00.743.743l.504-.084A1.5 1.5 0 0113.5 10v-4a1.5 1.5 0 113 0v4a1.5 1.5 0 01-1.166 1.454l.084.504a5.978 5.978 0 00.743.743l.504-.084a1.5 1.5 0 011.453 2.166z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        مشتریان
    </span>
                                </Link>
                                <Link
                                    href={"/roles"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a7 7 0 004.899-1.98 6.94 6.94 0 01-2.97 1.097A6.98 6.98 0 013 12a6.98 6.98 0 014.07-6.42 6.94 6.94 0 012.97 1.097A7 7 0 1010 14z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        نقش ها
    </span>
                                </Link>
                                <Link
                                    href={"/departments"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fill-rule="evenodd"
                                              d="M10 12a2 2 0 100-4 2 2 0 000 4zm0 2a7 7 0 004.899-1.98 6.94 6.94 0 01-2.97 1.097A6.98 6.98 0 013 12a6.98 6.98 0 014.07-6.42 6.94 6.94 0 012.97 1.097A7 7 0 1010 14z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        دپارتمان
    </span>
                                </Link>
                                {/* اینجا می‌توانید گزینه‌های بیشتری برای منوی دراپ‌دان اضافه کنید */}
                            </div>
                        )}


                        <a className="w-full font-thin   text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="/projects">
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                پروژه های پشتیبان وب
                            </span>
                        </a>
                        <a className="w-full font-thin   text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="/tasks">
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                وظیفه ها
                            </span>
                        </a>
                        <Link onClick={() => toggleDropdown("tickets")}
                              className="w-full font-thin text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                              href={""}>
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                            </span>

                            <span className="mx-4 text-sm font-normal">
                                تیکت ها
                            </span>
                            <span className="text-left">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"/>
        </svg>
    </span>
                        </Link>
                        {isDropdownOpen.tickets && (
                            <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-lg mr-5">
                                <Link href={"/tickets"}
                                      className="block px-2 py-2 text-sm text-gray-500 hover:text-white flex items-center">
    <span className="text-right mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.414 6H17a1 1 0 011 1v10a1 1 0 01-1 1H3.414l-2-2V8a1 1 0 011-1zM6 12a2 2 0 100-4 2 2 0 000 4zm12-5a1 1 0 00-1 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 00-2 0v8a3 3 0 003 3h11a3 3 0 003-3v-8a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
    </span>
                                    <span className="text-sm text-left font-normal mr-1">
        همه تیکت ها
    </span>
                                </Link>
                                <Link
                                    href={"/customertickets"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M2 6c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v1H2V6zM2 10v1h7v-1H2zm8 0v1h8v-1h-8zm8-4h3c1.1 0 2 .9 2 2v1H18V6zM18 12v1H2v-1h16zm-7 5v1H2v-1h7zm-8 2h3c1.1 0 2 .9 2 2v1H2v-1c0-1.1.9-2 2-2zm12 0v1H10v-1h3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        تیکت های مشتریان
    </span>
                                </Link>

                            </div>
                        )}
                        <Link onClick={() => toggleDropdown("accountancy")}
                              className="w-full font-thin text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                              href={""}>
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                </svg>
                            </span>

                            <span className="mx-4 text-sm font-normal">
                                حسابداری
                            </span>
                            <span className="text-left">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"/>
        </svg>
    </span>
                        </Link>
                        {isDropdownOpen.accountancy && (
                            <div className="ml-8 mt-1 bg-gray-800 rounded-md shadow-lg mr-5">
                                <Link href={"proformainvoice/"}
                                      className="block px-2 py-2 text-sm text-gray-500 hover:text-white flex items-center">
    <span className="text-right mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.414 6H17a1 1 0 011 1v10a1 1 0 01-1 1H3.414l-2-2V8a1 1 0 011-1zM6 12a2 2 0 100-4 2 2 0 000 4zm12-5a1 1 0 00-1 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 00-2 0v8a3 3 0 003 3h11a3 3 0 003-3v-8a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
    </span>
                                    <span className="text-sm text-left font-normal mr-1">
        مدیریت پیش فاکتور
    </span>
                                </Link>
                                <Link
                                    href={"/proformainvoice"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M2 6c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v1H2V6zM2 10v1h7v-1H2zm8 0v1h8v-1h-8zm8-4h3c1.1 0 2 .9 2 2v1H18V6zM18 12v1H2v-1h16zm-7 5v1H2v-1h7zm-8 2h3c1.1 0 2 .9 2 2v1H2v-1c0-1.1.9-2 2-2zm12 0v1H10v-1h3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        ایجاد پیش فاکتور
    </span>
                                </Link>
                                <Link
                                    href={"/invoices"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M2 6c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v1H2V6zM2 10v1h7v-1H2zm8 0v1h8v-1h-8zm8-4h3c1.1 0 2 .9 2 2v1H18V6zM18 12v1H2v-1h16zm-7 5v1H2v-1h7zm-8 2h3c1.1 0 2 .9 2 2v1H2v-1c0-1.1.9-2 2-2zm12 0v1H10v-1h3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
                                      فاکتور خدمات
                                    </span>
                                </Link>
                                <Link
                                    href={"/"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M2 6c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v1H2V6zM2 10v1h7v-1H2zm8 0v1h8v-1h-8zm8-4h3c1.1 0 2 .9 2 2v1H18V6zM18 12v1H2v-1h16zm-7 5v1H2v-1h7zm-8 2h3c1.1 0 2 .9 2 2v1H2v-1c0-1.1.9-2 2-2zm12 0v1H10v-1h3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        فاکتور محصولات
    </span>
                                </Link>
                                <Link
                                    href={"/"}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M2 6c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v1H2V6zM2 10v1h7v-1H2zm8 0v1h8v-1h-8zm8-4h3c1.1 0 2 .9 2 2v1H18V6zM18 12v1H2v-1h16zm-7 5v1H2v-1h7zm-8 2h3c1.1 0 2 .9 2 2v1H2v-1c0-1.1.9-2 2-2zm12 0v1H10v-1h3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="text-sm text-left font-normal mr-1">
        فاکتور اتوماتیک
    </span>
                                </Link>

                            </div>
                        )}
                        <a className="w-full font-thin   text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="./register.html">
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                اهداف
                            </span>
                        </a>
                        <a className="w-full font-thin   text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="./register.html">
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                صفحه ساز
                            </span>
                        </a>
                        <a className="w-full font-thin   text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="./register.html">
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                فروشگاه
                            </span>
                        </a>

                        <a className="w-full font-thin   text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                           href="./register.html">
                            <span className="text-left">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path
                                        d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                خروج
                            </span>
                        </a>
                    </div>
                </nav>

                <a className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8"
                   href="https://github.com/aminesmkhani/aminpanel">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" className="text-blue-500 h-5 w-5"
                         viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"/>
                    </svg>
                    <span className="mx-4">
                            پشتیبان وب
                        </span>
                </a>

            </div>
        </div>
        // End Navbar


        // <div className={`pt-[50px] w-[300px] fixed z-40 right-0 top-0 h-[100vh] bg-[#f18787]`}>
        //  <div className='flex flex-col w-full'>
        //  <Link className='w-[300px] h-[40px] border-b-2 border-[#000000]'  href={"/articels"}>مقالات</Link>
        //  <Link className='w-[300px] h-[40px] border-b-2 border-[#000000]'  href={"/buyes"}>خریدها</Link>
        //  <Link className='w-[300px] h-[40px] border-b-2 border-[#000000]'  href={"/"}>صفحه اصلی</Link>
        //
        //  </div>
        //  </div>
    )
}

export default Drawer