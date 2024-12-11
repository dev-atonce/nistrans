import { useEffect } from "react";

export default function Modal({id,action,title,closeModal,detailModal}:any)
{

    console.log(action);
    
    return (
        <>
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" id={id} role="dialog">
            <div className="absolute bg-gray-900 w-full h-screen opacity-80 z-50"></div>
            <div className="relative flex justify-center items-center p-4 w-screen h-screen max-h-full z-99">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-full">
                    <div className="p-4 md:p-5 space-y-4">
                        <div className="grid grid-col-1">
                            <div className="col-span-1">
                                <div className="text-orange-600 text-2xl text-center">{title}</div>
                            </div>
                        </div>
                        { action=='contact' &&
                            <>
                                <form id="contactForm" role="form" method="post" action="cajax.php" autoComplete="off" noValidate={false}>
                                    <div className="contactRow">
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="col-span-12 md:col-span-4">
                                                <label htmlFor="name">ชื่อผู้ติดต่อ</label>
                                                <input id="name" type="text" name="name" className="form-control" placeholder="" />
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label htmlFor="company">ชื่อบริษัท</label>
                                                <input id="company" type="text" name="companyName" className="form-control" placeholder="" />
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label htmlFor="department">หน่วยงานในสังกัด</label>
                                                <input id="department" type="text" name="department" className="form-control" placeholder="" />
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label htmlFor="email">อีเมล</label>
                                                <input id="email" type="email" name="email" className="form-control" placeholder="" />
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label htmlFor="cEmail">อีเมล (ยืนยัน)</label>
                                                <input id="cEmail" type="email" name="cEmail" className="form-control" placeholder="" />
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label htmlFor="phone">หมายเลขโทรศัพท์</label>
                                                <input id="phone" type="text" name="phone" className="form-control" placeholder="" />
                                            </div>

                                            <div className="col-span-12 md:col-span-4">
                                                <label htmlFor="address">ที่อยู่บริษัท</label>
                                                <textarea id="address" name="address" rows={3} className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="col-span-4">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="subject1" name="subject[]" value="การขนส่ง" />
                                                    <label htmlFor="subject1">การขนส่ง</label>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="subject2" name="subject[]" value="คลังสินค้าและการจัดเก็บ" />
                                                    <label htmlFor="subject2">คลังสินค้าและการจัดเก็บ</label>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="subject3" name="subject[]" value="งานขนย้าย" />
                                                    <label htmlFor="subject3">งานขนย้าย</label>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="subject4" name="subject[]" value="Haco Lab." />
                                                    <label htmlFor="subject4">Haco Lab.</label>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="subject5" name="subject[]" value="ข่าวรับสมัครบุคลากร" />
                                                    <label htmlFor="subject5">ข่าวรับสมัครบุคลากร</label>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="subject6" name="subject[]" value="อื่นๆ" />
                                                    <label htmlFor="subject6">อื่นๆ</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <label htmlFor="content">รายละเอียดสอบถาม</label>
                                            <textarea id="content" name="cContent" rows={8} className="form-control"></textarea>
                                    
                                        </div>
                                        <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                                        <div className="contactPrivacyBox">
                                            <input id="chk" type="checkbox" name="chk" />
                                            <label htmlFor="chk" id="chk-error" className="error error-2" >การคลิกช่องทำเครื่องหมายนี้แสดงว่าฉันยอมรับ</label>
                                            <a href="#privacy-notice">นโยบายความเป็นส่วนตัว</a>
                                        </div>
                                    </div>
                                </form>
                                <div id="thankP" style={{display: 'none'}}>
                                <div className="contactTitle">
                                    <div className="title1">ขอขอบพระคุณที่กรุณาติดต่อสอบถามเข้ามาในครั้งนี้</div>
                                </div>
                                <div className="contactThankText">
                                        จะมีอีเมลยืนยันการตอบกลับอัตโนมัติภายใน 2-3 นาที<br />
                                        เมื่อเราได้รับอีเมลแล้วจะขอติดต่อกลับภายใน 2-3 วันทำการ<br />
                                        หากไม่มีอีเมลตอบกลับอัตโนมัติ หรือไม่มีการติดต่อจากพนักงานของเรา<br />
                                        ขอรบกวนให้ติดต่อมายังที่อยู่ตามที่ระบุด้านล่างนี้อีกครั้ง
                                </div>
                                <div className="contactPhone" >
                                    TEL : (+66)-2-261-1080～5 or 261-5343～6
                                </div>
                                <div className="contactBtnBox">
                                    <button type="button" id="contactClose" className="bg-orange-500 text-white" onClick={closeModal}>CLOSE</button>
                                </div>
                            </div>   
                            </>
                        
                        }
                        {action=='law'&&
                            <>
                            {detailModal}
                            </>
                        }
                        <div className="flex justify-center gap-2">    	
                            <button type="button" id="contactClose" className="bg-orange-500 text-white p-2 min-w-50" onClick={closeModal}>ปิด</button>
                            { action=='contact' && <button type="submit" id="contactSubmit" name="contactSubmit" className="bg-blue-950 text-white p-2">ส่ง</button>}
                        </div>
                    </div>              
                                       
                        </div>

                </div>
            </div>
        </>
    )
}