
import Image from 'next/image'

export default function Home() {
  return (

      <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4 text-center">
                      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                          <div className="bg-blue-500 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                   stroke-linejoin="round" stroke-width="2"
                                   className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                              </svg>
                              <h2 className=" font-medium text-3xl text-white">۲۷۰۰</h2>
                              <p className="leading-relaxed text-white">سفارشات</p>
                          </div>
                      </div>
                      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                          <div className="bg-green-500 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                   stroke-linejoin="round" stroke-width="2"
                                   className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                              </svg>
                              <h2 className="font-medium text-3xl text-white">۱۳۰۰</h2>
                              <p className="leading-relaxed text-white">فاکتور</p>
                          </div>
                      </div>
                      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                          <div className="bg-yellow-400 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                   stroke-linejoin="round" stroke-width="2"
                                   className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                  <path
                                      d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z">
                                  </path>
                              </svg>
                              <h2 className="title-font font-medium text-3xl text-white">۷۴</h2>
                              <p className="leading-relaxed text-white">تیکت ها</p>
                          </div>
                      </div>
                      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                          <div className="bg-red-500 px-4 py-6 rounded-lg">
                              <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                   stroke-linejoin="round" stroke-width="2"
                                   className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                              </svg>
                              <h2 className="title-font font-medium text-3xl text-white">۸۵</h2>
                              <p className="leading-relaxed text-white">وظیفه ها</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>





          <div className=" lg:w-3/4 w-full mx-20 text-center">

              <div className=" inset-x-0 bottom-0 w-full border-s-4 border-red-600  p-4">
                  <div className="container mx-auto">
                      <div className="bg-white p-4 rounded shadow-lg">
                          <button className="close absolute top-2 right-4 text-xl" id="closeAlert">×</button>
                          <p className="text-black">
                              سلام و درود بر همراهان عزیز پشتیبان وب<br/>
                              توجه داشته باشید، درخواست خود را برای دپارتمان پشتیبانی سایت و طراحی سایت و یا دپارتمان سئو
                              تیکت فرمائید. همکاران ما در اسرع وقت درخواست ها رو بررسی کرده و به آن پاسخ خواهند داد. در صورت
                              اشتباه در دپارتمان انتخابی، ممکن است پاسخگویی به تیکت تا چند روز طول بکشد.<br/>
                              با تشکر پشتیبان وب
                          </p>
                      </div>
                  </div>
              </div>


          </div>
      </div>
    // <main className='flex min-h-screen flex-row justify-center items-center bg-gray-200'>
    //  صفحه اصلی
    // </main>
  )
}
