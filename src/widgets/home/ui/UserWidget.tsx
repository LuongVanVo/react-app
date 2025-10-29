import type { ApiError } from "@/features/auth/login/api/type";
import type { User } from "@/features/home/api/type";
import { useUser } from "@/features/home/model/useUser";
import { useState } from "react";
import { Button } from "@/shared/ui/button/button";

export function UserWidget() {
    const [users, setUsers] = useState<User[]>([]);
    const { getAllUsers } = useUser();
    const handleGetAllUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        } catch (err) {
            const apiError = err as ApiError;
            alert(apiError.message);
            setUsers([]);
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center items-center ">
               <Button onClick={ handleGetAllUsers } className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer">Get All Users</Button>
            </div>
            <div className="flex justify-center items-center">
                <h1>Users</h1>
            </div>
            <div className="flex justify-center items-center">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={ user.id }>
                                <td>{ user.id }</td>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}