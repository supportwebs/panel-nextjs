'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import {getTask, getUsersfortask} from ".//../../../services/userService";

function Page(props) {

    const [Task, setTask] = useState([]);
    const taskId = props.params.id;

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const { data: taskData } = await getTask(taskId);
                    setTask(taskData.data);
                    console.log(taskData.data);
                } catch (err) {
                    console.log(err.message);
                }
            };
            fetchData();
        }, [taskId]);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        department: '',
        progress: '',
        begindate: '',
        enddate: '',
        estimatedtime: '',
        visible: '',
        customer: '',
        referee: '',
        doneby: '',

    });

    useEffect(() => {
        if (Task.title) {
            setFormData({
                title: Task.title,
                description: Task.description,
                department: Task.department,
                progress: Task.progress,
                begindate: Task.begindate,
                enddate: Task.enddate,
                estimatedtime: Task.estimatedtime,
                visible: Task.visible,
                customer: Task.customer,
                referee: Task.referee,
                doneby: Task.doneby,

            });
        }
    }, [Task.title,Task.description,Task.department,Task.progress,Task.begindate,Task.enddate,Task.estimatedtime,Task.visible,Task.customer,Task.referee,Task.doneby]);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: usersData } = await getUsersfortask();
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
            form.append('description', formData.description);
            form.append('department', formData.department);
            form.append('progress', formData.progress);
            form.append('begindate', formData.begindate);
            form.append('enddate', formData.enddate);
            form.append('estimatedtime', formData.estimatedtime);
            form.append('visible', formData.visible);
            form.append('customer', formData.customer);
            form.append('referee', formData.referee);
            form.append('doneby', formData.doneby);

            const response = await axios.post(`http://localhost/admin/api/edittask?id=${taskId}`, form, {
                headers: {
                    // 'Content-Type': 'multipart/form-data', // تنظیم هدر Content-Type به multipart/form-data
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
            console.log('درخواست موفقیت‌آمیز بود!', response.data);
            window.location.href = `/viewtask/${response.data.data['id']}`;
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
                                            فرم ثبت وظیفه
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <form  method="POST" onSubmit={handleSubmit} >
                                        <div className="w-full space-y-10">
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="name" className="text-gray-700">
                                                        نام وظیفه
                                                    </label>
                                                    <input type="text"
                                                           name="title"
                                                           value={formData.title}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="نام وظیفه"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="lastname" className="text-gray-700">
                                                        توضیحات
                                                    </label>
                                                    <textarea name="description"
                                                              value={formData.description}
                                                              onChange={handleChange}
                                                              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                              placeholder="توضیحات"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="department" className="text-gray-700">
                                                        دپارتمان
                                                    </label>
                                                    <select name="department" onChange={handleChange}>
                                                        <option value="">دپارتمان را انتخاب کنید</option>
                                                        <option value="web-support">طراحی و پشتیبانی سایت</option>
                                                        <option value="content-production">تولید محتوا</option>
                                                        <option value="programming">برنامه نویسی</option>
                                                        <option value="seo">سئو</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="username" className="text-gray-700">
                                                        پیشرفت
                                                    </label>
                                                    <input type="text" name="progress"
                                                           value={formData.progress}
                                                           onChange={handleChange}
                                                           className=" ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="میزان پیشرفت"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="begindate" className="text-gray-700">
                                                        تاریخ شروع

                                                    </label>
                                                    <input type="text" name="begindate"
                                                           value={formData.begindate}
                                                           onChange={handleChange}
                                                           className=" ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="1402/09/09"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="enddate" className="text-gray-700">
                                                        تاریخ پایان
                                                    </label>
                                                    <input type="text" name="enddate"
                                                           value={formData.enddate}
                                                           onChange={handleChange}
                                                           className=" ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="تاریخ پایان"/>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="estimatedtime" className="text-gray-700">
                                                        ساعت تخمین زده شده
                                                    </label>
                                                    <input type="text" name="estimatedtime"
                                                           value={formData.estimatedtime}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="12:40"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="visible" className="text-gray-700">
                                                        قابل مشاهده برای مشتری
                                                    </label>
                                                    <input type="checkbox" name="visible" checked={'checked'}
                                                           value={formData.visible}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    />
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="referee" className="text-gray-700">
                                                        ارجاع به
                                                    </label>
                                                    <select
                                                        name="referee"
                                                        value={formData.referee}
                                                        onChange={handleChange}
                                                        className="w-full mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option value="">لطفاً یک کاربر را انتخاب کنید</option>
                                                        {users.map(user => (
                                                            <option className="bg-white" key={user.id} value={user.id}>{user.username}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="doneby" className="text-gray-700">
                                                        انجام شده توسط
                                                    </label>
                                                    <select
                                                        name="doneby"
                                                        value={formData.doneby}
                                                        onChange={handleChange}
                                                        className="w-full mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option value="">لطفاً یک کاربر را انتخاب کنید</option>
                                                        {users.map(user => (
                                                            <option className="bg-white" key={user.id}
                                                                    value={user.id}>{user.username}</option>
                                                        ))}
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







