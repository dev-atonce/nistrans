import { JobServiceProps } from "../../../../types/jobServiceType";
import TextEditor from "../../TextEditor/TextEditor";

interface FormJobServiceProps {
    itemState: Omit<JobServiceProps, "id" | "status" | "createdAt" | "updatedAt">;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: () => void;
    handleEditorChange: (value: string) => void;
}

const FormJobService = ({ itemState, setItemState, handleSubmit, handleEditorChange }: FormJobServiceProps) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Service Form
                </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6.5">
                <div className="col-span-1">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Service Name TH
                    </label>
                    <input
                        type="text"
                        name="service_name_th"
                        value={itemState.service_name_th}
                        onChange={setItemState}
                        placeholder="Enter Service name TH"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div className="col-span-1">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Service Name EN
                    </label>
                    <input
                        type="text"
                        name="service_name_en"
                        value={itemState.service_name_en}
                        onChange={setItemState}
                        placeholder="Enter Service name EN"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>

                <div className="col-span-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Service Detail
                    </label>
                    <TextEditor
                        itemState={itemState.service_detail}
                        handleEditorChange={handleEditorChange}
                    />
                </div>
                <div className="col-span-2">
                    <button
                        onClick={() => handleSubmit()}
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FormJobService;
