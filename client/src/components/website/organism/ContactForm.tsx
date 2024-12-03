"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useTranslations } from 'next-intl';

export default function Contactform() {
  const t = useTranslations('contact-form');
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

        <div className="col-span-2 md:col-span-1">
          <input
            {...register("contactName", { required: true, maxLength: 100 })}
            type="text"
            placeholder={t('contactName')}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.contactName?.type === "required" && (
            <p className="text-xs text-red text-end">{t('validate.require')}</p>
          )}
          {errors?.contactName?.type === "maxLength" && (
            <p className="text-xs text-red text-end">{t('validate.maxLenght', { maxLenght: 100 })}</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("companyName", { required: true, maxLength: 100 })}
            type="text"
            placeholder={t('companyName')}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.companyName?.type === "required" && (
            <p className="text-xs text-red text-end">{t('validate.require')}</p>
          )}
          {errors?.companyName?.type === "maxLength" && (
            <p className="text-xs text-red text-end">{t('validate.maxLenght', { maxLenght: 100 })}</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("department", { required: true, maxLength: 100 })}
            type="text"
            placeholder={t('department')}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.department?.type === "required" && (
            <p className="text-xs text-red text-end">{t('validate.require')}</p>
          )}
          {errors?.department?.type === "maxLength" && (
            <p className="text-xs text-red text-end">{t('validate.maxLenght', { maxLenght: 100 })}</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-1">
          <input
            {...register("email", { required: true, maxLength: 100 })}
            type="email"
            placeholder={t('email')}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.email?.type === "required" && (
            <p className="text-xs text-red text-end">{t('validate.require')}</p>
          )}
          {errors?.email?.type === "maxLength" && (
            <p className="text-xs text-red text-end">{t('validate.maxLenght', { maxLenght: 100 })}</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-2">
          <input
            {...register("telephone", { pattern: /[\d+]/g, required: true })}
            type="text"
            placeholder={t('telephone')}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.telephone?.type === "pattern" && (
            <p className="text-xs text-red text-end">{t('number')}</p>
          )}
          {errors?.telephone?.type === "required" && (
            <p className="text-xs text-red text-end">{t('validate.require')}</p>
          )}
        </div>
        <div className="col-span-2 md:col-span-2 grid grid-cols-4 py-4 text-slate-500 ">
          <div className="flex flex-col items-start">
            <span className="text-black">{t('title')}</span>
            {errors?.topic?.type === "required" && (
              <p className="text-xs text-red text-end">{t('validate.require')}</p>
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
                {t('option.1')}
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
                {t('option.2')}
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
                {t('option.3')}
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
                {t('option.4')}
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
                {t('option.5')}
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
                {t('option.6')}
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <textarea
            {...register("detail", { required: true })}
            rows={5}
            placeholder={t('detail')}
            className="bg-white w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {errors?.detail?.type === "required" && (
            <p className="text-xs text-red text-end">{t('validate.require')}</p>
          )}
        </div>
        <div className="flex justify-start gap-4 col-span-2 ">
          <button
            type="submit"
            className="uppercase px-12 hover:text-white border py-2 bg-white text-orange-600 rounded-xl  border-orange-600 hover:bg-orange-600 transition-all "
          >
            {t('send')}
          </button>
        </div>
      </form>
    </div>
  );
}
