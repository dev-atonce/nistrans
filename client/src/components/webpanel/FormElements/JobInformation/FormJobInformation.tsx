import { JobInformationProps } from "../../../../types/jobInformationType";

interface FormJobServiceProps {
    itemState: Omit<JobInformationProps, "id" | "createdAt" | "updatedAt">;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: () => void;
}

const FormJobService = ({ itemState, setItemState, handleSubmit }: FormJobServiceProps) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Job Information Form
                </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6.5">

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
