"use client";

import FormUser from "./FormUser";

import { UsersFormProps, UsersProps } from "@/types/usersType";
import { useUsersStore } from "@/store/usersStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormAdd = () => {
  const router = useRouter();
  const { createUser } = useUsersStore();
  // @ts-ignore
  const [userState, setUserState] = useState<UsersFormProps>({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { name, value, files } = event.target;
    if (name === "image" && files && files[0]) {
      setUserState((prevState) => ({
        ...prevState,
        image: files[0],
      }));
    } else {
      setUserState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (data: any) => {
    await createUser(data);
    router.push("/webpanel/user");
  };

  return (
    <>
      <FormUser
        itemState={userState}
        setItemState={handleChange}
        handleSubmit={handleSubmit}
        type="create"
      />
    </>
  );
};

export default FormAdd;
