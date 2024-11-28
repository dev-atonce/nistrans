"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Contactform({}) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data: any) => {
    const contactData = { ...data };
    console.log(contactData);

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/page/contact-forms`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(contactData),
    //   }
    // );

    // if (!response.ok) {
    //   Swal.fire({
    //     position: "top",
    //     toast: true,
    //     icon: "error",
    //     title: "มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง",
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    // } else {
    //   Swal.fire({
    //     position: "top",
    //     toast: true,
    //     icon: "success",
    //     title: "ส่งข้อมูลเรียบร้อย",
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    // }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="flex flex-col gap-4">
      <form
        className="grid grid-cols-2 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-2">
          <div className=""></div>
        </div>

        <div className="col-span-2 md:col-span-1">
          <input
            {...register("contactName", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"ชื่อผู้ติดต่อ"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.contactName?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("companyName", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"ชื่อบริษัท"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.companyName?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("department", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"หน่วยงานในสังกัด"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.department?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("email", { required: true, maxLength: 100 })}
            type="email"
            placeholder={"อีเมลล์"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />

          {errors?.email?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-2">
          <input
            {...register("telephone", { pattern: /[\d+]/g, required: true })}
            type="text"
            placeholder={"เบอร์โทรศัพท์"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.telephone?.type === "pattern" && (
            <p className="text-xs text-red text-end">ตัวเลขเท่านั้น</p>
          )}
          {errors?.telephone?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-2 grid grid-cols-4 py-4 text-slate-300 ">
          <div className="text-slate-400 flex flex-col items-start">
            หัวข้อสอบถาม <div></div>
            {errors?.topic?.type === "required" && (
              <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
            )}
          </div>

          <div className="col-span-4 md:col-span-1 lg:col-span-4 2xl:col-span-1">
            <div className="flex items-center gap-2">
              <input
                {...register("topic", {
                  pattern: /[\d+]/g,
                  required: true,
                })}
                type="checkbox"
                className=""
                value={"การขนส่ง"}
              />

              <label htmlFor="" className="text-base">
                การขนส่ง
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                {...register("topic", {
                  pattern: /[\d+]/g,
                  required: true,
                })}
                type="checkbox"
                className=""
                value={"Haco Lab"}
              />

              <label htmlFor="" className="text-base">
                Haco Lab
              </label>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 lg:col-span-4 2xl:col-span-1">
            <div className="flex items-center gap-2">
              <input
                {...register("topic", {
                  pattern: /[\d+]/g,
                  required: true,
                })}
                type="checkbox"
                className=""
                value={"คลังสินค้าและการจัดเก็บ"}
              />

              <label htmlFor="" className="text-base">
                คลังสินค้าและการจัดเก็บ
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                {...register("topic", {
                  pattern: /[\d+]/g,
                  required: true,
                })}
                type="checkbox"
                className=""
                value={"ข่าวรับสมัครบุคคลากร"}
              />

              <label htmlFor="" className="text-base">
                ข่าวรับสมัครบุคคลากร
              </label>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 lg:col-span-4 2xl:col-span-1">
            <div className="flex items-center gap-2">
              <input
                {...register("topic", {
                  pattern: /[\d+]/g,
                  required: true,
                })}
                type="checkbox"
                className=""
                value={"งานขนย้าย"}
              />

              <label htmlFor="" className="text-base">
                งานขนย้าย
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                {...register("topic", {
                  pattern: /[\d+]/g,
                  required: true,
                })}
                type="checkbox"
                placeholder={"เบอร์โทรศัพท์"}
                className=""
                value={"อื่นๆ"}
              />

              <label htmlFor="" className="text-base">
                อื่นๆ
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <textarea
            {...register("detail", { required: true })}
            rows={5}
            placeholder={"รายละเอียด"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.detail?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="flex justify-start gap-4 col-span-2 ">
          <button
            type="submit"
            className="uppercase px-12 hover:text-white border py-2 bg-white text-orange-600 rounded-xl  border-orange-600 hover:bg-orange-600 transition-all "
          >
            ส่ง
          </button>
        </div>
      </form>
    </div>
  );
}
