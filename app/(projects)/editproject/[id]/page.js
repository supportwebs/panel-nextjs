'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import {getCustomersforcustomerdata, getProject} from ".//../../../services/userService";

function Page(props) {

    const [Project, setProject] = useState([]);
    const projectId = props.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: projectData } = await getProject(projectId);
                setProject(projectData.data);
                console.log(projectData.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, [projectId]);

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

    useEffect(() => {
        if (Project.title) {
            setFormData({
                name: Project.name,
                title: Project.title,
                services: Project.services,
                site: Project.site,
                code: Project.code,
                keywordseo: Project.keywordseo,
                image: Project.image,
                status: Project.status,
                customer: Project.customer,

            });
        }

        // و غیره...
    }, [Project.name,Project.title,Project.services,Project.site, Project.code, Project.keywordseo,Project.image,Project.status,Project.customer]);
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
    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const form = new FormData();
            form.append('title', formData.title);
            form.append('name', formData.name);
            form.append('services', formData.services);
            form.append('site', formData.site);
            form.append('code', formData.code);
            form.append('keywordseo', formData.keywordseo);
            form.append('image', formData.image);
            form.append('status', formData.status);
            form.append('customer', formData.customer);

            const response = await axios.post(`http://localhost/admin/api/editproject?id=${projectId}`, form, {
                headers: {
                    // 'Content-Type': 'multipart/form-data', // تنظیم هدر Content-Type به multipart/form-data
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
            console.log('درخواست موفقیت‌آمیز بود!', response.data);
            window.location.href = `/viewproject/${response.data.data['id']}`;
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
    const setImageHandle = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0],

        });
    }

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







