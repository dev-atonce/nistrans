import LawContent from "./LawContent";
import { useTranslations } from "next-intl";

export default function Modal({id,action,law,title,closeModal}:any)
{
    const m = useTranslations('modal')
    return (<>
        {/* <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" id={id} role="dialog"> */}
        <div className="modal overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 transition-all duration-1000 ease-in-out" id={id} role="dialog">
            <div className="absolute bg-gray-900 w-full h-screen opacity-80 z-50"></div>
            <div className="relative flex justify-center items-center p-4  h-screen max-h-full z-99">
                <div className="relative bg-white bg-[rgb(255,255,255)]/85 rounded-lg shadow md:w-6/12">
                    <div className="p-4 md:p-5 space-y-4">
                        <div className="border-double border-4 border-black p-2 overflow-hidden">
                            <div className="grid grid-col-1 my-6">
                                <div className="col-span-1">
                                    <div className="text-orange-600 text-2xl text-center">{title}</div>
                                </div>
                            </div>
                            {action=='law'&& <LawContent law={law}/> }
                            <div className="flex justify-center gap-2 my-6">    	
                                <button type="button" id="contactClose" className="bg-orange-500 text-white p-1 min-w-50" onClick={closeModal}>{m("close")}</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        </>
    )
}