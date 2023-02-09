import UserService from "@service/UserService";
import {Admin, Record} from "pocketbase";
import {useEffect, useState} from "react";

export const useUserInformation = () => {
    const [user, setUser] = useState<Record | Admin | null>(null);
    const [avatar, setAvatar] = useState<string>("https://rb.gy/g1pwyx");
    const [id, setId] = useState<string>("");
    
    useEffect(() => {
        const user = UserService.getUserInformation();
        if (user) {
            setUser(user);
            setId(user.id);
        }
    }, []);
    
    useEffect(() => {
        if (user) {
            UserService.getAvatar(user, user.avatar).then((response) => {
                setAvatar(response);
            });
        }
    }, [user]);
    
    return {user, id, avatar};
};
