"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function CompanyContactform({ }) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data: any) => {
    const contactData = { ...data };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/v1/formcontact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );

    if (!response.ok) {
      Swal.fire({
        position: "top",
        toast: true,
        icon: "error",
        title: "มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        position: "top",
        toast: true,
        icon: "success",
        title: "ส่งข้อมูลเรียบร้อย",
        showConfirmButton: false,
        timer: 2000,
      });
    }
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
        <div className="col-span-2">
          <input
            {...register("title", { required: true, maxLength: 100 })}
            placeholder={"เรื่อง"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.title?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-2">
          <input
            {...register("company_name", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"ชื่อบริษัท"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.company_name?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-2">
          <input
            {...register("contact_name", { required: true, maxLength: 100 })}
            type="text"
            placeholder={"ชื่อ - สกุล"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.contact_name?.type === "required" && (
            <p className="text-xs text-red text-end">กรุณกรอกข้อมูล.</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("phone", { pattern: /[\d+]/g, required: true })}
            type="text"
            placeholder={"เบอร์โทรศัพท์"}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.phone?.type === "pattern" && (
            <p className="text-xs text-red text-end">ตัวเลขเท่านั้น</p>
          )}
          {errors?.phone?.type === "required" && (
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
        <div className="flex justify-end gap-4 col-span-2 ">
          <button
            type="submit"
            className="uppercase px-12 font-bold py-2 bg-[#E00A0A] rounded-xl  text-white "
          >
            ส่ง
          </button>
        </div>
      </form>
    </div>
  );
}
