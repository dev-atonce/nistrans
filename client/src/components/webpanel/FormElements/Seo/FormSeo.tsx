import { SeoProps } from "@/types/seoType";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUsersStore } from "@/store/usersStore";

interface FormSeoProps {
  itemState: SeoProps;
  setItemState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const FormSeo = ({ itemState, setItemState, handleSubmit }: FormSeoProps) => {
  const router = useRouter();
  const { role } = useUsersStore();
  useEffect(() => {
    const allow = role === "super";

    !allow && router.push("/webpanel");
  }, []);
  return (
    <div className="grid grid-cols-2 gap-9">
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Seo Form:{" "}
              <span className="font-semibold text-lg uppercase">
                {itemState?.page}
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6.5">
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="seoTitleTH"
                value={itemState?.seoTitleTH}
                onChange={setItemState}
                placeholder="Enter Seo Title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Description
              </label>
              <textarea
                rows={7}
                type="text"
                name="seoDescriptionTH"
                value={itemState.seoDescriptionTH}
                // @ts-ignore
                onChange={setItemState}
                placeholder="Enter Seo Description"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Keyword
              </label>
              <textarea
                rows={7}
                type="text"
                name="seoKeywordTH"
                value={itemState.seoKeywordTH}
                // @ts-ignore
                onChange={setItemState}
                placeholder="Enter Seo Keyword"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="col-span-2">
              <button
                onClick={handleSubmit}
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSeo;
