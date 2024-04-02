'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import {getCustomersforcustomerdata, getProject, getUser} from ".//../../../services/userService";

function Page(props) {

    const [User, setUser] = useState([]);
    const userId = props.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: userData } = await getUser(userId);
                setUser(userData.data);
                console.log(userData.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, [userId]);
console.log('jjjjjjj' , userId)
    const [formData, setFormData] = useState({
        name: '',
        family: '',
        email: '',
        username: '',
        password: '',
        phonenumber: '',
        post: '',
        department: '',
        address: '',
        image: null
    });
    useEffect(() => {
        if (User.name) {
            setFormData({
                name: User.name,
                family: User.family,
                email: User.email,
                username: User.username,
                password: User.password,
                phonenumber: User.phonenumber,
                post: User.post,
                department: User.department,
                image: User.image,
            });
        }
    }, [User.name,User.family,User.email,User.username, User.password, User.phonenumber,User.post,User.department,User.image]);

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const form = new FormData();
            form.append('name', formData.name);
            form.append('family', formData.family);
            form.append('email', formData.email);
            form.append('username', formData.username);
            form.append('password', formData.password);
            form.append('phonenumber', formData.phonenumber);
            form.append('post', formData.post);
            form.append('department', formData.department);
            form.append('address', formData.address);
            form.append('image', formData.image);

            const response = await axios.post(`http://localhost/admin/api/edituser?id=${userId}`, form, {
                headers: {
                    // 'Content-Type': 'multipart/form-data', // تنظیم هدر Content-Type به multipart/form-data
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
            console.log('درخواست موفقیت‌آمیز بود!', response.data);
            window.location.href = `/viewuser/${response.data.data['id']}`;
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
            image: e.target.files[0]
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
                                                فرم ثبت کاربر
                                            </span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <form onSubmit={handleSubmit}>
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
                                                        فامیلی
                                                    </label>
                                                    <input type="text" name="family"
                                                           value={formData.family}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="نام خانوادگی"/>
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
                                                        نام کاربری
                                                        <span className="text-red-500 required-dot">
                                                            *
                                                        </span>
                                                    </label>
                                                    <input type="text" name="username" disabled='disabled'
                                                           value={formData.username}
                                                           onChange={handleChange}
                                                           className="ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="نام کاربری"/>
                                                    <p className="absolute text-sm text-red-500 -bottom-6 hidden">
                                                        نام کاربری اشتباه است.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="image" className="text-gray-700">
                                                        عکس
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="image"
                                                        name="image"
                                                        onChange={setImageHandle}
                                                    />
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="phonenumber" className="text-gray-700">
                                                        شماره تلفن
                                                    </label>
                                                    <input type="text" name="phonenumber"
                                                           value={formData.phonenumber}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="شماره تلفن"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="post" className="text-gray-700">
                                                        سمت
                                                    </label>
                                                    <select name="post"
                                                            value={formData.post}
                                                            onChange={handleChange}
                                                            required>
                                                        <option value=''>سمت را انتخاب کنید</option>
                                                        <option value='admin'>admin</option>
                                                        <option value='user'>user</option>
                                                        <option value='staff'>staff</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="department" className="text-gray-700">
                                                        دپارتمان
                                                    </label>
                                                    <select name="department" required value={formData.department}
                                                            onChange={handleChange}>
                                                        <option value="">دپارتمان را انتخاب کنید</option>
                                                        <option value="طراحی و پشتیبانی سایت">طراحی و پشتیبانی سایت
                                                        </option>
                                                        <option value="تولید محتوا">تولید محتوا</option>
                                                        <option value="برنامه نویسی">برنامه نویسی</option>
                                                        <option value="سئو">سئو</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="address" className="text-gray-700">
                                                        آدرس
                                                    </label>
                                                    <input type="text" name="address"
                                                           value={formData.address}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="آدرس"/>
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