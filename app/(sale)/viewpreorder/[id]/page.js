"use client";
import React from 'react'
import Link from 'next/link'
import {useEffect, useState} from "react";
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import {getPreorder} from ".//../../../services/userService";

function Page(props) {
    const [preorder, setPreorder] = useState([]);

    // console.log(`ID: ${id}`);


    const preorderId = props.params.id;
    console.log(preorderId)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: preorderData } = await getPreorder(preorderId);
                setPreorder(preorderData.data);
                console.log(preorderData.data)
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [preorderId]);


    return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col  flex-wrap sm:flex-row ">

                <div className="container mx-auto px-4 sm:px-8 max-w-8xl">
                    <div className="py-8">
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <h2 className="text-2xl leading-tight">
                                {preorder.name}
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
                                                  اطلاعات سفارش
                                            </span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="w-full space-y-10">

                                        <div className="flex flex-col">
                                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                    <div className="overflow-hidden">
                                                        <table className="min-w-full text-center text-sm font-light">
                                                            <thead
                                                                className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                                            <tr>

                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">شناسه سفارش</td>
                                                                <td className="whitespace-nowrap  px-6 py-4">{preorder.id}</td>

                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">نام</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{preorder.name}</td>

                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">سایت</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{preorder.site}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">شماره تلفن</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{preorder.phone}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">ایمیل</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{preorder.email}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">سروریس ها</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{preorder.services}</td>
                                                            </tr>
                                                            {/*<tr className="border-b dark:border-neutral-500">*/}
                                                            {/*    <td className="whitespace-nowrap  px-6 py-4 font-medium">متن</td>*/}
                                                            {/*    <td className="whitespace-nowrap  px-6 py-4 ">{preorder.content}</td>*/}
                                                            {/*</tr>*/}
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">وضعیت سفارش</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{preorder.checkorder}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">تایید</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{preorder.confirm}</td>
                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
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







