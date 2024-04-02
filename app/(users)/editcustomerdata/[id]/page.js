'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from "axios";
import {getCustomerdata, getCustomersforcustomerdata, getProject} from ".//../../../services/userService";

function Page(props) {

    const [Customerdata, setCustomerdata] = useState([]);
    const customerdataId = props.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: customerdataData } = await getCustomerdata(customerdataId);
                setCustomerdata(customerdataData.data);
                console.log(customerdataData.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchData();
    }, [customerdataId]);

    const [formData, setFormData] = useState({
        hosting: '',
        hosting_period: '',
        bdatehosting: '',
        edatehosting: '',
        hostingprice: '',
        hostingtype: '',
        seo: '',
        seo_period: '',
        bdateseo: '',
        edateseo: '',
        seoprice: '',
        support: '',
        support_period: '',
        bdatesupport: '',
        edatesupport: '',
        supportprice: '',
        customer_id: '',
        site: '',

    });

    useEffect(() => {
        if (Customerdata.hosting) {
            setFormData({
                hosting: Customerdata.hosting,
                hosting_period: Customerdata.hosting_period,
                bdatehosting: Customerdata.bdatehosting,
                edatehosting: Customerdata.edatehosting,
                hostingprice: Customerdata.hostingprice,
                hostingtype: Customerdata.hostingtype,
                seo: Customerdata.seo,
                seo_period: Customerdata.seo_period,
                bdateseo: Customerdata.bdateseo,
                edateseo: Customerdata.edateseo,
                seoprice: Customerdata.seoprice,
                support: Customerdata.support,
                support_period: Customerdata.support_period,
                bdatesupport: Customerdata.bdatesupport,
                edatesupport: Customerdata.edatesupport,
                supportprice: Customerdata.supportprice,
                customer_id: Customerdata.customer_id,
                site: Customerdata.site,
            });
        }
    }, [Customerdata.hosting, Customerdata.hosting_period, Customerdata.bdatehosting, Customerdata.edatehosting, Customerdata.hostingprice, Customerdata.hostingtype, Customerdata.seo, Customerdata.seo_period, Customerdata.bdateseo, Customerdata.edateseo, Customerdata.seoprice, Customerdata.support, Customerdata.support_period, Customerdata.bdatesupport, Customerdata.edatesupport, Customerdata.supportprice, Customerdata.customer_id, Customerdata.site
        ]);
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: customersData } = await getCustomersforcustomerdata();
                console.log(customersData.data);

                setCustomers(customersData.data);
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
            form.append('hosting', formData.hosting);
            form.append('hosting_period', formData.hosting_period);
            form.append('bdatehosting', formData.bdatehosting);
            form.append('edatehosting', formData.edatehosting);
            form.append('hostingprice', formData.hostingprice);
            form.append('hostingtype', formData.hostingtype);
            form.append('seo', formData.seo);
            form.append('seo_period', formData.seo_period);
            form.append('bdateseo', formData.bdateseo);
            form.append('edateseo', formData.edateseo);
            form.append('seoprice', formData.seoprice);
            form.append('support', formData.support);
            form.append('support_period', formData.support_period);
            form.append('bdatesupport', formData.bdatesupport);
            form.append('edatesupport', formData.edatesupport);
            form.append('supportprice', formData.supportprice);
            form.append('customer_id', formData.customer_id);
            form.append('site', formData.site);
            const response = await axios.post(`http://localhost/admin/api/editcustomerdata?id=${customerdataId}`, form, {
                headers: {
                    // 'Content-Type': 'multipart/form-data', // تنظیم هدر Content-Type به multipart/form-data
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
            console.log('درخواست موفقیت‌آمیز بود!', response.data);
            window.location.href = `/viewcustomerdata/${response.data.data['id']}`;
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
                                                فرم ثبت خدمت جدید برای مشتری
                                            </span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <form method="POST" enctype='multipart/form-data' onSubmit={handleSubmit}>
                                        <div className="w-full space-y-10">
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="hosting" className="text-gray-700">
                                                        هاستینگ
                                                    </label>
                                                    <input type="text"
                                                           name="hosting"
                                                           value={formData.hosting}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="هاستینگ"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="hosting_period" className="text-gray-700">
                                                        مدت دوره هاستینگ
                                                    </label>
                                                    <select name="hosting_period" required onChange={handleChange}>
                                                        <option value=""> انتخاب کنید</option>
                                                        <option value="یک ماهه">یک ماهه</option>
                                                        <option value="سه ماهه">سه ماهه</option>
                                                        <option value="شش ماهه">شش ماهه</option>
                                                        <option value="دوازده ماهه">دوازده ماهه</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="bdatehosting" className="text-gray-700">
                                                        تاریخ شروع هاستینگ
                                                    </label>
                                                    <input type="text" name="bdatehosting"
                                                           value={formData.bdatehosting}
                                                           onChange={handleChange}
                                                           className=" ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="تاریخ شروع هاستینگ"/>

                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="edatehosting" className="text-gray-700">
                                                        تاریخ پایان هاستینگ
                                                    </label>
                                                    <input type="text" name="edatehosting"
                                                           value={formData.edatehosting}
                                                           onChange={handleChange}
                                                           className=" ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="نام کاربری"/>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className="relative">
                                                    <label htmlFor="hostingprice" className="text-gray-700">
                                                        قیمت هاستینگ
                                                    </label>
                                                    <input type="text" name="hostingprice"
                                                           value={formData.hostingprice}
                                                           onChange={handleChange}
                                                           className="ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="قیمت هاستینگ"/>

                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="hostingtype" className="text-gray-700">
                                                        نوع هاستینگ
                                                    </label>
                                                    <select name="hostingtype" required onChange={handleChange}>
                                                        <option value=""> انتخاب کنید</option>
                                                        <option value="ماهیانه">ماهیانه</option>
                                                        <option value="سالیانه">سالیانه</option>

                                                    </select>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="seo" className="text-gray-700">
                                                        سئو
                                                    </label>
                                                    <input type="text" name="seo"
                                                           value={formData.seo}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="سئو"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="seo" className="text-gray-700">

                                                        مدت دوره سئو
                                                    </label>
                                                    <input type="text" name="seo_period"
                                                           value={formData.seo_period}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="مدت دوره سئو"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="bdateseo" className="text-gray-700">
                                                        تاریخ شروع سئو
                                                    </label>
                                                    <input type="text" name="bdateseo"
                                                           value={formData.bdateseo}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="تاریخ شروع سئو"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="edateseo" className="text-gray-700">
                                                        تاریخ پایان سئو
                                                    </label>
                                                    <input type="text" name="edateseo"
                                                           value={formData.edateseo}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="تاریخ پایان سئو"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="seoprice" className="text-gray-700">
                                                        قیمت سئو
                                                    </label>
                                                    <input type="text" name="seoprice"
                                                           value={formData.seoprice}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="قیمت سئو"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="support" className="text-gray-700">
                                                        پشتیبانی
                                                    </label>
                                                    <input type="text" name="support"
                                                           value={formData.support}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="پشتیبانی"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="support_period" className="text-gray-700">
                                                        مدت دوره پشتیبانی
                                                    </label>
                                                    <input type="text" name="support_period"
                                                           value={formData.support_period}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="مدت دوره پشتیبانی"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="bdatesupport" className="text-gray-700">
                                                        تاریخ شروع پشتیبانی
                                                    </label>
                                                    <input type="text" name="bdatesupport"
                                                           value={formData.bdatesupport}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="تاریخ شروع پشتیبانی"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="edatesupport" className="text-gray-700">
                                                        تاریخ پایان پشتیبانی
                                                    </label>
                                                    <input type="text" name="edatesupport"
                                                           value={formData.edatesupport}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="تاریخ پایان پشتیبانی"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="supportprice" className="text-gray-700">
                                                        قیمت پشتیبانی
                                                    </label>
                                                    <input type="text" name="supportprice"
                                                           value={formData.supportprice}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="قیمت پشتیبانی"/>
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="customer_id" className="text-gray-700">
                                                        مشتری
                                                    </label>
                                                    <select
                                                        name="customer_id"
                                                        value={formData.customer_id}
                                                        onChange={handleChange}
                                                        className="w-full mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option value="">لطفاً یک کاربر را انتخاب کنید</option>
                                                        {customers.map(customer => (
                                                            <option className="bg-white" key={customer.id}
                                                                    value={customer.id}>{customer.username}</option>
                                                        ))}

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <label htmlFor="site" className="text-gray-700">
                                                        سایت مشتری
                                                    </label>
                                                    <input type="text" name="site"
                                                           value={formData.site}
                                                           onChange={handleChange}
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="قیمت پشتیبانی"/>
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







