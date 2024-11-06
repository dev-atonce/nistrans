"use client";

import FormUser from "./FormUser";

import { UsersFormProps } from "@/types/usersType";
import { useUsersStore } from "@/store/usersStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditProps {
  id: string;
}
const FormEdit = ({ id }: FormEditProps) => {
  const router = useRouter();
  const { createUser, fetchUserById, updateUser, users } = useUsersStore();
  const [userState, setUserState] = useState<UsersFormProps>({
    username: "",
    email: "",
    password: "",
    role: "",
    id: "",
  });

  const fetchData = async () => {
    await fetchUserById(id);
  };

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
    await updateUser(id, data);
    router.push("/webpanel/user");
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (users?.length > 0) {
      setUserState({
        username: users[0]?.username,
        email: users[0]?.email,
        password: users[0]?.password,
        role: users[0]?.role,
        id: users[0]?.id,
      });
    }
  }, [users]);

  return (
    <>
      <FormUser
        itemState={userState}
        setItemState={handleChange}
        handleSubmit={handleSubmit}
        type="edit"
        setState={setUserState}
        id={id}
      />
    </>
  );
};

export default FormEdit;
