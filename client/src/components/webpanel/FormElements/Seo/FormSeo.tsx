import { SeoProps } from "@/types/seoType";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUsersStore } from "@/store/usersStore";
import { Tabs } from "antd";

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

  const envLangs = process.env.NEXT_PUBLIC_LANGUAGES;
  // @ts-ignore
  const languages = envLangs.split(",").map((i: any) => i);

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
              <Tabs
                type="card"
                items={languages.map((_v, i) => {
                  const id = String(i + 1);
                  return {
                    label: `${_v.toUpperCase()}`,
                    key: id,
                    children: <input
                      type="text"
                      name={`seoTitle${_v.toUpperCase()}`}
                      // @ts-ignore
                      value={`${itemState[`seoTitle${_v.toUpperCase()}`] ? itemState[`seoTitle${_v.toUpperCase()}`] : ""}`}
                      onChange={setItemState}
                      placeholder={`Enter Seo Title ${_v.toUpperCase()}`}
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />,
                  };
                })}
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Description
              </label>
              <Tabs
                type="card"
                items={languages.map((_v, i) => {
                  const id = String(i + 1);
                  return {
                    label: `${_v.toUpperCase()}`,
                    key: id,
                    children: <textarea
                      rows={7}
                      type="text"
                      name={`seoDescription${_v.toUpperCase()}`}
                      // @ts-ignore
                      value={`${itemState[`seoDescription${_v.toUpperCase()}`] ? itemState[`seoDescription${_v.toUpperCase()}`] : ""}`}
                      // @ts-ignore
                      onChange={setItemState}
                      placeholder={`Enter Seo Description ${_v.toUpperCase()}`}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />,
                  };
                })}
              />
            </div>
            <div className="col-span-2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Keyword
              </label>
              <Tabs
                type="card"
                items={languages.map((_v, i) => {
                  const id = String(i + 1);
                  return {
                    label: `${_v.toUpperCase()}`,
                    key: id,
                    children: <textarea
                      rows={7}
                      type="text"
                      name={`seoKeyword${_v.toUpperCase()}`}
                      // @ts-ignore
                      value={`${itemState[`seoKeyword${_v.toUpperCase()}`] ? itemState[`seoKeyword${_v.toUpperCase()}`] : ""}`}
                      // @ts-ignore
                      onChange={setItemState}
                      placeholder={`Enter Seo Keyword ${_v.toUpperCase()}`}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />,
                  };
                })}
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
