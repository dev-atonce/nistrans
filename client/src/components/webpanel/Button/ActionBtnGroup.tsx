import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

interface ActionBtnGroupProps {
  itemId: string;
  link: string;
  deleteItem?: (id: string) => void;
  nextLink?: boolean | undefined;
}

const ActionBtnGroup = ({
  itemId,
  link,
  deleteItem,
  nextLink,
}: ActionBtnGroupProps) => {
  return (
    <div className="flex items-center gap-1">
      {nextLink ? (
        <Link
          className="hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border p-2 rounded-full"
          href={link}
        >
          <BiEdit size={18} />
        </Link>
      ) : (
        <a
          className="hover:text-white hover:bg-yellow-400 text-yellow-400 border-yellow-400 border p-2 rounded-full"
          href={link}
        >
          <BiEdit size={18} />
        </a>
      )}
      {deleteItem && (
        <button
          onClick={() => deleteItem(itemId)}
          className="hover:text-white hover:bg-red text-red border-red border p-2 rounded-full"
        >
          <RiDeleteBinLine size={18} />
        </button>
      )}
    </div>
  );
};

export default ActionBtnGroup;
