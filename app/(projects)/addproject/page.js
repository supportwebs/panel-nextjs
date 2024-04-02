'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import {getCustomersforcustomerdata} from "../../services/userService";

function Page() {

    const [formData, setFormData] = useState({
        title: '',
        name: '',
        services: '',
        site: '',
        code: '',
        keywordseo: '',
        image: '',
        status: '',
        customer: '',
    });
    const setImageHandle = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0],

        });
    }
    const [users, setUsers] = useState([]);
    // const [image, setImage]= useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: usersData } = await getCustomersforcustomerdata();
                console.log(usersData.data);

                setUsers(usersData.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, []);
    const handleSubmitt = async () => {
        try {
            // event.preventDefault();
            let form4 = new FormData();
            form4.append('title', formData.title);
            form4.append('name', formData.name);
            form4.append('services', formData.services);
            form4.append('site', formData.site);
            form4.append('code', formData.code);
            form4.append('keywordseo', formData.keywordseo);
            form4.append('image', formData.image);
            form4.append('status', formData.status);
            form4.append('customer', formData.customer);
            const response = await axios.post(`http://localhost/admin/api/addproject`, form4,{
                headers:{
                    'Content-Type': 'multipart/form-data', // تنظیم هدر Content-Type به multipart/form-data
                    'x-auth-token':localStorage.getItem('token')
                }
            });
            console.log('درخواست موفقیت‌آمیز بود!', response.data);
            // window.location.href = `/viewproject/${response.data.data['id']}`;
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
                                                فرم ثبت پروژه جدید
                                            </span>
                                    </div>
                                </div>
                                <div className="mt-6">

                                        <div className="w-full space-y-10">
                                            <div className="w-full">
                                                <div className=" relative">
                                                    <label htmlFor="title" className="text-gray-700">
                                                        عنوان
                                                    </label>
                                                    <input type="text"
                                                           name="title"
                                                           value={formData.title}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="عنوان"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="name" className="text-gray-700">
                                                        نام
                                                    </label>
                                                    <input type="text" name="name"
                                                           value={formData.name}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="نام"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="services" className="text-gray-700">
                                                        سرویس ها
                                                    </label>
                                                    <input type="services" name="services"
                                                           value={formData.email}
                                                           onChange={handleChange}
                                                           className=" ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="سرویس ها"/>

                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="site" className="text-gray-700">
                                                        سایت

                                                    </label>
                                                    <input type="text" name="site"
                                                           value={formData.site}
                                                           onChange={handleChange}
                                                           className=" ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="سایت"/>

                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="password" className="text-gray-700">
                                                        کد

                                                    </label>
                                                    <input type="text" name="code"
                                                           value={formData.code}
                                                           onChange={handleChange}
                                                           className="ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="کد"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="keywordseo" className="text-gray-700">
                                                        کلمه کلیدی برای سئو
                                                    </label>

                                                    <input type="text" name="keywordseo"
                                                           value={formData.keywordseo}
                                                           onChange={handleChange}
                                                           className="ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="کلمه کلیدی برای سئو"/>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="phonenumber" className="text-gray-700">
                                                        عکس
                                                    </label>
                                                    <input type="file" name="image"
                                                           onChange={setImageHandle}
                                                           className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="status" className="text-gray-700">
                                                        وضعیت
                                                    </label>
                                                    <select name="status" required onChange={handleChange}>
                                                        <option value="">انتخاب کنید</option>
                                                        <option value="1">انجام نشده</option>
                                                        <option value="2">در حال انجام</option>
                                                        <option value="3">انجام شده</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="customer" className="text-gray-700">
                                                        مشتری
                                                    </label>
                                                    <select
                                                        name="customer"
                                                        value={formData.customer}
                                                        onChange={handleChange}
                                                        className="w-full mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="">انتخاب کنید</option>
                                                        {users.map(user => (
                                                            <option className="bg-white" key={user.id}
                                                                    value={user.id}>{user.username}</option>
                                                        ))}

                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                    <button onClick={()=>handleSubmitt()} type="button" name="submit"
                                                            className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        ثبت
                                                    </button>
                                            </div>
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

export default Page







