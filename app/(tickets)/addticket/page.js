'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import {getUsersfortask, getUsersAndStaff, getAllDepartments} from "../../services/userService";

function Page() {

    const [formData, setFormData] = useState({
        subject: '',
        text: '',
        file: '',
        reporter: '',
        referee: '',
        website:'',
        priority: '',
        department: ''
    });
    const [Referee, setReferee] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: RefereeData } = await getUsersfortask();
                console.log(RefereeData.data);
                setReferee(RefereeData.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, []);
    const [Reporter, setReporter] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: ReporterData } = await getUsersAndStaff();
                console.log(ReporterData.data);

                setReporter(ReporterData.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, []);
    const [Department, setDepartment] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: DepartmentData } = await getAllDepartments();
                console.log(DepartmentData.data);

                setDepartment(DepartmentData.data);
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('subject', formData.subject);
        form.append('text', formData.text);
        form.append('file', formData.file);
        form.append('reporter', formData.reporter);
        form.append('referee', formData.referee);
        form.append('website', formData.website);
        form.append('priority', formData.priority);
        form.append('department', formData.department);
        try {
            const response = await axios.post('http://localhost/admin/api/addticket', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success:', response.data);
            window.location.href = `/viewticket/${response.data.data['id']}`;
        } catch (error) {
            console.error('Error:', error);
        }
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
                                                فرم ثبت تیکت
                                            </span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <form  onSubmit={handleSubmit} >
                                        <div className="w-full space-y-10">
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="subject" className="text-gray-700">
                                                        موضوع
                                                    </label>
                                                    <input type="text"
                                                           name="subject"
                                                           value={formData.subject}
                                                           onChange={handleInputChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="موضوع"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="text" className="text-gray-700">
                                                        متن تیکت
                                                    </label>
                                                    <input type="text" name="text"
                                                           value={formData.text}
                                                           onChange={handleInputChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="متن تیکت"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="file" className="text-gray-700">
                                                        فایل
                                                    </label>
                                                    <input
                                                        type="file"
                                                        id="file"
                                                        name="file"
                                                        onChange={handleImageChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="reporter" className="text-gray-700">
                                                        گزارش دهنده
                                                    </label>
                                                    <select
                                                        name="reporter"
                                                        value={formData.reporter}
                                                        onChange={handleInputChange}
                                                        className="w-full mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="">لطفاً یک کاربر را انتخاب کنید</option>
                                                        {Reporter.map(r => (
                                                            <option className="bg-white" key={r.id}
                                                                    value={r.id}>{r.username}</option>
                                                        ))}
                                                    </select>
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
                                                        onChange={handleInputChange}
                                                        className="w-full mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="">لطفاً یک کاربر را انتخاب کنید</option>
                                                        {Referee.map(ref => (
                                                            <option className="bg-white" key={ref.id}
                                                                    value={ref.id}>{ref.username}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="website" className="text-gray-700">
                                                        آدرس سایت
                                                    </label>
                                                    <input type="text" name="website"
                                                           value={formData.website}
                                                           onChange={handleInputChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="آدرس وب سایت"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="priority" className="text-gray-700">
                                                        اولویت
                                                    </label>
                                                    <select name="priority"
                                                            value={formData.priority}
                                                            onChange={handleInputChange}
                                                            required>
                                                        <option value=''>اولویت را انتخاب کنید</option>
                                                        <option value='1'>پایین</option>
                                                        <option value='2'>متوسط</option>
                                                        <option value='3'>بالا</option>
                                                        <option value='4'>اورژانس</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="department" className="text-gray-700">
                                                        دپارتمان
                                                    </label>
                                                    <select
                                                        name="department"
                                                        value={formData.Department}
                                                        onChange={handleInputChange}
                                                        className="w-full mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="">لطفاً یک دپارتمان را انتخاب کنید</option>
                                                        {Department.map(dep => (
                                                            <option className="bg-white" key={dep.id}
                                                                    value={dep.id}>{dep.name}</option>
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







