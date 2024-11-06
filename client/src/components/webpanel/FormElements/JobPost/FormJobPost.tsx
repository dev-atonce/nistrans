import { JobPostProps } from "../../../../types/jobPostType";
import SelectChSkill from "../../SelectGroup/SelectChSkill";
import SelectJobType from "../../SelectGroup/SelectJobType";
import SelectJpSkill from "../../SelectGroup/SelectJpSkill";
import SelectKrSkill from "../../SelectGroup/SelectKrSkill";
import SelectProvince from "../../SelectGroup/SelectProvince";
import TextEditor from "../../TextEditor/TextEditor";

interface FormJobPostProps {
    itemState: Omit<JobPostProps, "id" | "status" | "createdAt" | "updatedAt" | "job_code">;
    setItemState: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: () => void;
    handleEditorChange: (value: string) => void;
}

const FormJobPost = ({ itemState, setItemState, handleSubmit, handleEditorChange }: FormJobPostProps) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    JobPost Form
                </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6.5">
                <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="mb-1 block text-lg font-medium text-black dark:text-white">
                            <h4>General Information</h4>
                        </div>
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Job Position
                            </label>
                            <input
                                type="text"
                                name="job_position"
                                value={itemState.job_position}
                                onChange={setItemState}
                                placeholder="Enter Job Position"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectJobType
                                itemState={itemState.job_type}
                                setItemState={setItemState}
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Salary
                            </label>
                            <input
                                type="text"
                                name="salary"
                                value={itemState.salary}
                                onChange={setItemState}
                                placeholder="Enter Salary"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={itemState.location}
                                onChange={setItemState}
                                placeholder="Enter Location"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectProvince
                                itemState={itemState.province}
                                setItemState={setItemState}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="mb-1 block text-lg font-medium text-black dark:text-white">
                            <h4>Language Skill</h4>
                        </div>
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                English
                            </label>
                            <input
                                type="text"
                                name="en_skill"
                                value={itemState.en_skill}
                                onChange={setItemState}
                                placeholder="Enter EN Skill"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectJpSkill
                                itemState={itemState.jp_skill}
                                setItemState={setItemState}
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectChSkill
                                itemState={itemState.ch_skill}
                                setItemState={setItemState}
                            />
                        </div>
                        <div className="col-span-1">
                            <SelectKrSkill
                                itemState={itemState.kr_skill}
                                setItemState={setItemState}
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                STAFF
                            </label>
                            <input
                                type="text"
                                name="staff_name"
                                value={itemState.staff_name}
                                onChange={setItemState}
                                placeholder="Enter Staff name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Job Description
                    </label>
                    <TextEditor
                        itemState={itemState.job_description}
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

export default FormJobPost;
