import { JobInformationProps } from "@/types/jobInformationType";

interface ApplicationFormProps {
    itemState: JobInformationProps;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const AttachedIco = () =>{
    return (<svg className="w-4 h-4 text-green-500 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
    </svg>);
} 

const UploadIcon = () => {
    return (<svg className="dark:text-white mr-1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none">
        <path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21L12 13M12 13L14.5 15.5M12 13L9.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

const CloseIcon = (color:string) => {
    return (<svg className="bg-white text-gray-500 rounded-full" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z"></path>
        <path fill="currentColor" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
    );
}


export default function ApplicationForm({ itemState, setItemState }: ApplicationFormProps) {


    return (
        <>
            <div className="section-1">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-1 lg:col-span-6 ">
                        <div className="lg:w-100 border-2 border-gray-100 rounded-lg p-4">
                            <div className="">
                                <div className="flex items-center justify-center">
                                    <div className="bg-gray-100 bg-gra-100 rounded-full p-2">
                                        <label htmlFor="profile_image" className="flex flex-col items-center border-2 border border-gray-200 p-2 justify-center rounded-full w-40 h-40 bg-white cursor-pointer">
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Profile Image</span></p>
                                            <input title="Profile Image" type="file" name="profile_image" id="profile_image" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-3 pb-4">
                                            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Resume/CV</span></p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">PDF, PNG, or JPG</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" accept="application/pdf, image/jpg, image/png"/>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-2 ">
                <div className="grid grid-row-12 gap-12">
                    <h2 className="uppercase font-bold mt-4 pt-4 mb-6 text-lg underline underline-offset-8">โปรไฟล์</h2>
                </div>
                <div className="p-4 rounded-lg border-2  border-gray-100">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6 lg:col-span-2">
                            <div className="">
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">คำนำหน้า</label>
                                <select title="คำนำหน้า" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        <div className="col-span-12 lg:col-span-4">
                            <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor" />
                                    </svg>
                                </div>
                                <input title="ชื่อ" className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    type="text"
                                    name="firstname"
                                    value={itemState.firstname}
                                    onChange={setItemState}
                                />
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุล</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor" />
                                    </svg>
                                </div>
                                <input title="นามสกุล" className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    type="text"
                                    name="lastname"
                                    value={itemState.lastname}
                                    onChange={setItemState}
                                />
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="nickname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อเล่น</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" fill="currentColor" />
                                    </svg>
                                </div>
                                <input title="ชื่อเล่น" className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    type="text"
                                    name="nickname"
                                    value={itemState.nickname}
                                    onChange={setItemState}
                                />
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อายุ</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="grey" strokeWidth="2" fill="none" />
                                        <line x1="12" y1="12" x2="12" y2="7" stroke="grey" strokeWidth="2" />
                                        <line x1="12" y1="12" x2="16" y2="12" stroke="grey" strokeWidth="2" />
                                    </svg>
                                </div>
                                <input title="อายุ" className="ps-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    type="text"
                                    name="age"
                                    value={itemState.age}
                                    onChange={setItemState}
                                />
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-2">
                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เพศ</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z" />
                                    </svg>
                                </div>
                                <select title="เพศ" className="ps-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        <div className="col-span-6 lg:col-span-3">
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
                        <div className="col-span-6 lg:col-span-3">
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
                        <div className="col-span-12 lg:col-span-6">
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
                        <div className="col-span-6 lg:col-span-3">
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
                        <div className="col-span-6 lg:col-span-3">
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
                        <div className="col-span-12">
                            <label htmlFor="personal_detail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียดส่วนตัว</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex pt-3 ps-3 pointer-events-none">
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h12V4H6zm1 3h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" fill="black" />
                                    </svg>
                                </div>
                                <textarea title="รายละเอียดส่วนตัว" rows={5} className="ps-9 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                    name="personal_detail"
                                    value={itemState.personal_detail}
                                    onChange={setItemState}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3 mb-6">
                <div className="grid grid-row-12 gap-12">
                    <h2 className="uppercase font-bold mt-4 pt-4 mb-6 text-lg underline underline-offset-8">งานที่ต้องการ</h2>
                </div>
                <div className="p-4 rounded-lg border-2  border-gray-100">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-4">
                        <label htmlFor="first" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">สถานที่</label>
                            <select title="ภาษาอังกฤษ" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="jp_skill"
                                value={itemState.jp_skill}
                                onChange={setItemState}
                            >
                                <option>จังหวัด</option>
                            </select>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <label htmlFor="first" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อันดับแรก</label>
                            <input title="อันดับแรก" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="first"
                                value={itemState.first}
                                onChange={setItemState}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <label htmlFor="first" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อันดับที่สอง</label>
                            <input title="อันดับที่สอง" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="second"
                                value={itemState.second}
                                onChange={setItemState}
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <label htmlFor="first" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อันดับที่สาม</label>
                            <input title="อันดับที่สาม" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                type="text"
                                name="third"
                                value={itemState.third}
                                onChange={setItemState}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-4 mb-6">
                <div className="grid grid-row-4 gap-4  mt-4 pt-3 mb-2 border-grey-500">
                    <h2 className="uppercase font-bold text-lg underline underline-offset-8 mt-3 mb-5">ความสามารถด้านภาษา</h2>
                </div>
                <div className="p-4 rounded-lg border-2 border-gray-100">
                    <div className="grid grid-cols-12 gap-4 mt-2">
                        <div className="col-span-12 lg:col-span-6">
                            <label htmlFor="en_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาอังกฤษ</label>
                            <div className="lg:flex">
                                <div className="w-full lg:w-[80%]">
                                    <input placeholder="ภาษาอังกฤษ" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        type="text"
                                        name="en_skill"
                                        value={itemState.en_skill}
                                        onChange={setItemState}
                                    />
                                    
                                </div>
                                <div className="lg:flex lg:w-[20%] items-end">
                                    <label htmlFor="en_file" className="relative cursor-pointer lg:ms-3 mt-2 lg:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-green-500 border-2 border-green-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:border-blue-500 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                        <AttachedIco />แนบไฟล์
                                        <div className="absolute" style={{top:'-8px',right:'-8px'}}><CloseIcon color="currentColor"/></div>
                                        <input type="file" className="hidden" name="en_file" id="en_file" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <label htmlFor="kr_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาเกาหลี</label>
                            <div className="lg:flex">
                                <div className="w-full lg:w-[80%]">
                                    <select title="ภาษาเกาหลี" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name="kr_skill"
                                        value={itemState.kr_skill}
                                        onChange={setItemState}
                                    >
                                        <option>ภาษาเกาหลี</option>
                                    </select>

                                </div>
                                <div className="lg:flex lg:w-[20%] items-end">
                                    <label htmlFor="kr_file" className="cursor-pointer lg:ms-3 mt-2 lg:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-gray-500 border-2 border-gray-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:border-blue-500 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                        <UploadIcon />แนบไฟล์
                                        <input type="file" className="hidden" name="kr_file" id="kr_file" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <label htmlFor="jp_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาญี่ปุ่น</label>
                            <div className="lg:flex">
                                <div className="w-full lg:w-[80%]">
                                    <select title="ภาษาอังกฤษ" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name="jp_skill"
                                        value={itemState.jp_skill}
                                        onChange={setItemState}
                                    >
                                        <option>ภาษาญี่ปุ่น</option>
                                    </select>
                                </div>
                                <div className="lg:flex lg:w-[20%] items-end">
                                    <label htmlFor="first_name" className="cursor-pointer lg:ms-3 mt-2 lg:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-gray-500 border-2 border-gray-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:border-blue-500 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                        <UploadIcon />แนบไฟล์
                                        <input type="file" className="hidden" name="jp_file" id="jp_file" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <label htmlFor="ch_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ภาษาจีน</label>
                            <div className="lg:flex">
                                <div className="w-full lg:w-[80%]">
                                    <select title="ภาษาจีน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name="ch_skill"
                                        value={itemState.ch_skill}
                                        onChange={setItemState}
                                    >
                                        <option>ภาษาจีน</option>
                                    </select>
                                </div>
                                <div className="lg:flex lg:w-[20%] items-end">
                                    
                                    <label htmlFor="ch_file" className="cursor-pointer lg:ms-3 mt-2 lg:mt-0 p-2.5 flex justify-center items-center text-sm text-center font-medium text-gray-500 border-2 border-gray-500 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:border-blue-500 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                        <UploadIcon />แนบไฟล์
                                        <input type="file" className="hidden" name="ch_file" id="ch_file" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <label htmlFor="other_skill" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">อื่น ๆ</label>
                            <textarea placeholder="อื่น ๆ" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                                name="other_skill"
                                value={itemState.other_skill}
                                onChange={setItemState}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-5 mb-6 ">
                <div className="grid grid-row-4 gap-4  mt-4 pt-3 mb-2">
                    <h2 className="uppercase font-bold text-lg underline underline-offset-8 mt-3 mb-5">ประสบการทำงานล่าสุด</h2>
                </div>
                <div className="p-4 rounded-lg border-2 border-gray-100">
                    <div className="grid grid-cols-12 gap-4 mt-2">
                        <div className="col-span-12 lg:col-span-8">
                            <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หน่วยงาน</label>
                            <input title="หน่วยงาน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="company_name"
                                value={itemState.company_name}
                                onChange={setItemState}
                                required
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ปีที่เริ่มทำงาน</label>
                            <input title="ปีที่สื้นสุดทำงาน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="year_start"
                                value={itemState.start}
                                onChange={setItemState}
                                required
                            />
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ปีที่สื้นสุดทำงาน</label>
                            <input title="ปีที่สื้นสุดทำงาน" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                name="end"
                                value={itemState.end}
                                onChange={setItemState}
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-2">
                        
                        <div className="col-span-12">
                            <label htmlFor="detail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รายละเอียด</label>
                            <textarea title="รายละเอียด" rows={9} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="detail"
                                value={itemState.detail}
                                onChange={setItemState}
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}