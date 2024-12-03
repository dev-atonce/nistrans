import Contactform from "../organism/ContactForm";
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  return (
    <>
      <div className="grid grid-cols-2 gap-4 w-full py-10">
        <div className="flex flex-col gap-6 text-black col-span-2 lg:col-span-1">
          <div className="border-b border-slate-200 pb-10">
            <p className="font-semibold">
              {t('company-name')}
            </p>
            <span className="text-base text-center md:text-left w-[300px]">
              {t('address')}
            </span>
          </div>
          <div>
            <p className="font-semibold">{t('title')}</p>
            <span>{t('telephone')} : (+66)-2-261-1080～5 or 261-5343～6</span>
          </div>
          <div className="py-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.766643611826!2d100.55763477591714!3d13.73257319773672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f1b877bf42f%3A0xf788e6b9b53e4b3e!2sSiam%20Nistrans%20Co.%2CLtd.%20Head%20Office%20%2F%20Bangkok%20Branch!5e0!3m2!1sen!2sth!4v1733208730590!5m2!1sen!2sth" width="85%" height="250" loading="lazy"></iframe>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 ">
          <h2 className="text-xl  text-black">{t('contact-form')}</h2>
          <Contactform />
        </div>
      </div>
    </>
  );
}
