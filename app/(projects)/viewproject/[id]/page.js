"use client";
import React from 'react'
import Link from 'next/link'
import {useEffect, useState} from "react";
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import {getProject} from ".//../../../services/userService";

function Page(props) {
    const [project, setProject] = useState([]);

    // console.log(`ID: ${id}`);


    const projectId = props.params.id;
    console.log(projectId)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: projectData } = await getProject(projectId);
                setProject(projectData.data);
                console.log(projectData.data)
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [projectId]);


    return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col  flex-wrap sm:flex-row ">

                <div className="container mx-auto px-4 sm:px-8 max-w-8xl">
                    <div className="py-8">
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <h2 className="text-2xl leading-tight">
                                {project.name}
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
                                                  اطلاعات پروژه
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
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">شناسه
                                                                    پروژه
                                                                </td>
                                                                <td className="whitespace-nowrap  px-6 py-4">{project.id}</td>

                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">عنوان
                                                                    پروژه
                                                                </td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.title}</td>

                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">نام
                                                                    پروژه
                                                                </td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.name}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">سرویس
                                                                    ها
                                                                </td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.services}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">سایت</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.site}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">کد
                                                                    پروژه
                                                                </td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.code}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">کلمه
                                                                    کلیدی برای سئو
                                                                </td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.keywordseo}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">عکس</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.image}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">وضعیت</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.status}</td>
                                                            </tr>
                                                            <tr className="border-b dark:border-neutral-500">
                                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">مشتری</td>
                                                                <td className="whitespace-nowrap  px-6 py-4 ">{project.customer}</td>
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







