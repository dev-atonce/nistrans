import { JobApplyProps } from "@/types/jobApplyType";

interface ApplicationFormProps {
    itemState: JobApplyProps;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

export default function ApplicationForm({ itemState, setItemState }: ApplicationFormProps) {
    return (
        <>
            <div className="section-1">
                <div className="grid grid-row-12 gap-12">
                    <h2 className="uppercase font-bold">resume / cv</h2>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">Resume / cv</div>
                    <div className="col-span-5">
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-3 pb-4">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, or JPG</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="grid grid-row-12 gap-12">
                    <h2 className="uppercase font-bold mt-4 pt-4 mb-6 border-t-2 border-grey-500">โปรไฟล์</h2>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">
                        <div className="max-w-sm mx-auto">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">คำนำหน้า</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 4h16v2H13v14h-2V6H4V4z" fill="black" />
                                    </svg>
                                </div>
                                <select className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="title"
                                    value={itemState.title}
                                    onChange={setItemState}
                                >
                                    <option>เลือกคำนำหน้า</option>
                                    <option value="นาย">นาย</option>
                                    <option value="นาง">นาง</option>
                                    <option value="นางสาว">นางสาว</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor" />
                                </svg>
                            </div>
                            <input className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="firstname"
                                value={itemState.firstname}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                    <div className="col-span-5">
                        <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุล</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor" />
                                </svg>
                            </div>
                            <input className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="lastname"
                                value={itemState.lastname}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div className="col-span-6">
                        <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อเล่น</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor" />
                                </svg>
                            </div>
                            <input className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="nickname"
                                value={itemState.nickname}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อายุ</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="grey" stroke-width="2" fill="none" />
                                    <line x1="12" y1="12" x2="12" y2="7" stroke="grey" stroke-width="2" />
                                    <line x1="12" y1="12" x2="16" y2="12" stroke="grey" stroke-width="2" />
                                </svg>
                            </div>
                            <input className="ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="age"
                                value={itemState.age}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เพศ</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z" />
                                </svg>
                            </div>
                            <select className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="gender"
                                value={itemState.gender}
                                onChange={setItemState}
                            >
                                <option>เลือกเพศ</option>
                                <option value="m">ชาย</option>
                                <option value="f">หญิง</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div className="col-span-5">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">โทรศัพท์</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                </svg>
                            </div>
                            <input aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" placeholder="02-345-6789"
                                required
                                type="text"
                                name="phone"
                                value={itemState.phone}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                    <div className="col-span-5">
                        <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">โทรศัพท์มือถือ</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"></path>
                                </svg>
                            </div>
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="062-345-6789"
                                required
                                type="text"
                                name="telephone"
                                value={itemState.telephone}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div className="col-span-12">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ที่อยู่ปัจจุบัน</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex pt-3 ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" fill="currentColor" />
                                </svg>
                            </div>
                            <textarea rows={2} id="address" className="ps-9 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                name="address"
                                value={itemState.address}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div className="col-span-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อีเมล</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                                </svg>
                            </div>
                            <input placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-9 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="email"
                                value={itemState.email}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="rate-min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary Rate</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg>
                            </div>
                            <input placeholder="Min" className="ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="rate_min"
                                value={itemState.rate_min}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <label htmlFor="rate_max" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">&nbsp;</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                                </svg>
                            </div>
                            <input placeholder="Max" className="ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="rate_max"
                                value={itemState.rate_max}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div className="col-span-12">
                        <label htmlFor="personal_detail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียดส่วนตัว</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex pt-3 ps-3 pointer-events-none">
                                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm1 3h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="black" />
                                </svg>
                            </div>
                            <textarea rows={5} className="ps-9 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                name="personal_detail"
                                value={itemState.personal_detail}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3 mb-6">
                <div className="grid grid-row-4 gap-4  mt-4 pt-3 mb-2 border-t-2 border-grey-500">
                    <h2 className="uppercase font-bold">ความสามารถด้านภาษา</h2>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div></div>
                    <div className="col-span-4">
                        <label htmlFor="en_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาอังกฤษ</label>
                        <input placeholder="ภาษาอังกฤษ" className="ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            type="text"
                            name="en_skill"
                            value={itemState.en_skill}
                            onChange={setItemState}
                        />
                    </div>
                    <div className="col-span-4">
                        <label htmlFor="kr_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาเกาหลี</label>
                        <select className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="kr_skill"
                            value={itemState.kr_skill}
                            onChange={setItemState}
                        >
                            <option>ภาษาเกาหลี</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div></div>
                    <div className="col-span-4">
                        <label htmlFor="jp_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาอังกฤษ</label>
                        <select className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="jp_skill"
                            value={itemState.jp_skill}
                            onChange={setItemState}
                        >
                            <option>ภาษาญี่ปุ่น</option>
                        </select>
                    </div>
                    <div className="col-span-4">
                        <label htmlFor="other_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อื่นๆ</label>
                        <input placeholder="อื่น ๆ" className="ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            type="text"
                            name="other_skill"
                            value={itemState.other_skill}
                            onChange={setItemState}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div></div>
                    <div className="col-span-4">
                        <label htmlFor="ch_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาจีน</label>
                        <select className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="ch_skill"
                            value={itemState.ch_skill}
                            onChange={setItemState}
                        >
                            <option>ภาษาจีน</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="section-3 mb-6">
                <div className="grid grid-row-4 gap-4  mt-4 pt-3 mb-2 border-t-2 border-grey-500">
                    <h2 className="uppercase font-bold">ประสบการทำงานล่าสุด</h2>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div className="col-span-12">
                        <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หน่วยงาน</label>
                        <input className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="text"
                            name="company_name"
                            value={itemState.company_name}
                            onChange={setItemState}
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-2">
                    <div className="col-span-12">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ปีที่เริ่มทำงาน</label>
                    </div>
                    <div className="col-span-12">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ปีที่สื้นสุดทำงาน</label>
                    </div>
                    <div className="col-span-12">
                        <label htmlFor="detail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียด</label>
                        <textarea rows={3} className="ps-9 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="detail"
                            value={itemState.detail}
                            onChange={setItemState}
                            required
                        />
                    </div>
                </div>
            </div>
        </>
    )
}