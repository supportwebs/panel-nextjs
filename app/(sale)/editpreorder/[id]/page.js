'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import {getPreorder} from ".//../../../services/userService";

function Page(props) {

    const [Preorder, setPreorder] = useState([]);
    const preorderId = props.params.id;

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const { data: preorderData } = await getPreorder(preorderId);
                    setPreorder(preorderData.data);
                    console.log(preorderData.data);
                } catch (err) {
                    console.log(err.message);
                }
            };
            fetchData();
        }, [preorderId]);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        services: '',
        content: '',
        site: '',
        checkorder: '',

    });

    useEffect(() => {
        if (Preorder.name) {
            setFormData({
                name: Preorder.name,
                phone: Preorder.phone,
                email: Preorder.email,
                services: Preorder.services,
                content: Preorder.content,
                site: Preorder.site,
                checkorder: Preorder.checkorder,

            });
        }

        // و غیره...
    }, [Preorder.name,Preorder.phone,Preorder.email,Preorder.services, Preorder.content, Preorder.site,Preorder.checkorder]);

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const form = new FormData();
            form.append('name', formData.name);
            form.append('phone', formData.phone);
            form.append('email', formData.email);
            form.append('services', formData.services);
            form.append('content', formData.content);
            form.append('site', formData.site);
            form.append('checkorder', formData.checkorder);

            const response = await axios.post(`http://localhost/admin/api/editpreorder?id=${preorderId}`, form, {
                headers: {
                    // 'Content-Type': 'multipart/form-data', // تنظیم هدر Content-Type به multipart/form-data
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
            console.log('درخواست موفقیت‌آمیز بود!', response.data);
            window.location.href = `/viewpreorder/${response.data.data['id']}`;
        } catch (error) {
            console.error('خطا در ارسال درخواست:', error);
        }
    };

    //  به‌روزرسانی مقادیر فرم
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col  flex-wrap sm:flex-row ">

                <div className="container mx-auto px-4 sm:px-8 max-w-8xl">
                    <div className="py-8">
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <h2 className="text-2xl leading-tight">
                                فرم ها
                            </h2>
                        </div>

                        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                            <div className="px-4 py-8 sm:px-10">
                                <div className="relative mt-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300">
                                        </div>
                                    </div>
                                    <div className="relative flex justify-center text-sm leading-5">
                                            <span className="px-2 text-gray-500 bg-white">
                                                فرم ثبت سفارش
                                            </span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <form  method="POST" onSubmit={handleSubmit} >
                                        <div className="w-full space-y-10">
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="name" className="text-gray-700">
                                                        نام
                                                    </label>
                                                    <input type="text"
                                                           name="name"
                                                           value={formData.name}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="نام"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="lastname" className="text-gray-700">
                                                        شماره تلفن
                                                    </label>
                                                    <input type="text" name="phone"
                                                           value={formData.phone}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="شماره تلفن"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="email" className="text-gray-700">
                                                        ایمیل
                                                        <span className="text-red-500 required-dot">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type="email" name="email"
                                                           value={formData.email}
                                                           onChange={handleChange}
                                                           className="ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="ایمیل شما"/>
                                                    <p className="absolute text-sm text-red-500 -bottom-6">
                                                        ایمیل نا معتبر
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="username" className="text-gray-700">
                                                        سرویس ها
                                                        <span className="text-red-500 required-dot">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type="text" name="services"
                                                           value={formData.services}
                                                           onChange={handleChange}
                                                           className="ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="سرویس ها"/>

                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="password" className="text-gray-700">
                                                        متن
                                                        <span className="text-red-500 required-dot">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type="text" name="content"
                                                           value={formData.content}
                                                           onChange={handleChange}
                                                           className="ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="متن سفارش"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="lastname" className="text-gray-700">
                                                        سایت
                                                    </label>

                                                    <input type="text" name="site"
                                                           value={formData.site}
                                                           onChange={handleChange}
                                                           className="ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="سایت"/>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="phonenumber" className="text-gray-700">
                                                        وضعیت سفارش
                                                    </label>
                                                    <input type="text" name="checkorder"
                                                           value={formData.checkorder}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="وضعیت سفارش"/>
                                                </div>
                                            </div>


                                            <div>
                                                <span className="block w-full rounded-md shadow-sm">
                                                    <button type="submit" name="submit"
                                                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        ثبت
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Page







