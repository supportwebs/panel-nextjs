"use client";
import {useState , useEffect} from 'react';
import React from 'react';
import Link from 'next/link';
import axios from "axios";
import {getAllDepartments, getAllRoles, getAllUsers} from "../../services/userService";

export default  function Page(){

  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: departmentsData } = await getAllDepartments();
        setDepartments(departmentsData.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, []);

  const handleDeleteDepartment = async (departmentId) => {
    try {

      // ارسال درخواست DELETE به سرور برای حذف کاربر
      const { data: deleteData } = await axios.post(`http://localhost/admin/api/deletedepartment?id=${departmentId}`); // فرض کردیم که آدرس API برای حذف کاربرها `/api/users/:userId` است
    console.log(deleteData)
      //  بروزرسانی وضعیت یا رفرش صفحه بعد از حذف کاربر
      updateDepartmentsList();
    } catch (error) {
      console.error("Error deleting department:", error.message);
    }
  };


  const updateDepartmentsList = async () => {
    try {
      const { data: updatedDepartmentsData } = await getAllDepartments();
      setDepartments(updatedDepartmentsData.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
      <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
        <div className="flex flex-col flex-wrap sm:flex-row">

          <div className="container mx-auto px-4 sm:px-8 max-w-8xl">

             {/*if Work Close Button Add hidden in class :)  */}
            <div id="alert1"
                 className="my-3  block  text-left text-white bg-green-500 h-12 flex items-center justify-center p-4 rounded-md relative"
                 role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   className="flex-shrink-0 w-6 h-6 mx-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                </path>
              </svg>
              این یک پیام موفقیت آمیز است.
              <button onClick="closeAlert()"
                      className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none">
                <span>×</span>
              </button>
            </div>


            <div className="py-8">
              <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                <h2 className="text-2xl leading-tight">
                  دپارتمان
                </h2>

                <div className="text-end">
                  <form
                      className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className=" relative ">
                      <input type="text" id="&quot;form-subscribe-Filter"
                             className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                             placeholder="نام"/>
                    </div>
                    <button
                        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                        type="submit">
                      فیلتر
                    </button>
                  </form>

                </div>
              </div>
              <Link className="w-full font-thin text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href={"/adddepartment"} >

                  <span className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                                ایجاد دپارتمان جدید
                            </span>
              </Link>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                    <tr>
                      <th scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-sm uppercase font-normal">
                        شناسه
                      </th>
                      <th scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-sm uppercase font-normal">
                        نام دپارتمان
                      </th>
                      <th scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-right text-sm uppercase font-normal">
                        اقدامات
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    {departments.map(department => (
                        // <li key={user.id}>{user.username}</li>
                        <tr key={department.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                      <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                    {/*<img alt="profil" src="../src/images/amin.jpg"*/}
                    {/*     className="mx-auto object-cover rounded-full h-10 w-10 "/>*/}
                      </a>
                      </div>
                      <div className="mr-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {department.id}
                      </p>
                      </div>
                      </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {department.name}
                      </p>
                      </td>


                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">

                        {/*<Link href={`/viewuser/${encodeURIComponent(user.id)}`} key={user.id}>*/}
                        {/*  <i className="fa-solid fa-eye text-blue-500" ></i>*/}
                        {/*</Link>*/}

                        <Link href={`/viewdepartment/${department.id}`}><i className="fa-solid fa-eye text-blue-500" ></i></Link>
                        <Link href={`/editdepartment/${department.id}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                      fill="#F9A602">
                      <path d="M0 0h24v24H0V0z" fill="none"/>
                      <path
                      d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
                      </svg>
                        </Link>
                        <button onClick={() => handleDeleteDepartment(department.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FF0000">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                          </svg>
                        </button>
                      </div>
                      </td>
                      </tr>

                      ))}

                    </tbody>
                  </table>
                  <div
                      className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                    <div className="flex items-center">
                      <button type="button"
                              className="w-full p-4 border text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" className=""
                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                          </path>
                        </svg>
                      </button>
                      <button type="button"
                              className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                        ۱
                      </button>
                      <button type="button"
                              className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                        ۲
                      </button>
                      <button type="button"
                              className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                        ۳
                      </button>
                      <button type="button"
                              className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                        ۴
                      </button>
                      <button type="button"
                              className="w-full p-4 border-t border-b border-l text-base  rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                        <svg width="9" fill="currentColor" height="8" className=""
                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

  )
}
