import { useTranslations } from "next-intl"

export default function ContactForm(){
    const t = useTranslations('modal.form')
    return (
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
 
        </>
    )
}