import Link from "next/link";

interface CreateBtnProps {
    link: string;
    text: string;
}

const CreateBtn = ({ link, text }: CreateBtnProps) => {
    return (
        <div className="flex justify-end item-center">
            <div className="flex items-center gap-1 pb-1">
                <Link
                    href={link}
                    className="inline-flex items-center justify-center rounded-md border border-primary px-4 text-center font-medium text-primary hover:bg-primary hover:text-white"
                >
                    {text}
                </Link>
            </div>
        </div>
    );
}

export default CreateBtn;