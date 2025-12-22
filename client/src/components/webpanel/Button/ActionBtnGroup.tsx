import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Popconfirm } from "antd";

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
        <Popconfirm
          title="Delete item"
          description="Are you sure you want to delete this item?"
          onConfirm={() => deleteItem(itemId)}
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
        >
        <button
          className="hover:text-white hover:bg-red text-red border-red border p-2 rounded-full"
        >
          <RiDeleteBinLine size={18} />
        </button>
        </Popconfirm>
      )}
    </div>
  );
};

export default ActionBtnGroup;
