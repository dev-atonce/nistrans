import BlogSection from "@/components/website/organism/BlogSection";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Blog({ home, limit, lng }: any) {
  const t = useTranslations('blog-section');
  return (
    <div className="border-slate-200">
      {home && (
        <div className="pb-20 flex justify-center items-center flex-col text-blue-950 gap-3">
          <h2 className="text-3xl">{t('blog')}</h2>
          <div className="h-1 w-20 bg-orange-400"></div>
        </div>
      )}
      <div className="py-6">
        <BlogSection home={home} limit={limit} lng={lng} />
        {home && (
          <div className="flex justify-center pt-10">
            <Link
              href={`news-activity`}
              className="  rounded-md border border-orange-400 px-4 py-2 flex items-center bg-white text-orange-400 hover:text-white hover:bg-orange-400 transition-all duration-500"
            >
              {t('more')}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
