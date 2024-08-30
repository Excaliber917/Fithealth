import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";

export const useUpdateUser = () => {
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useAuthContext();

    const updateUser = async ({ name, username, password, email, gender }) => {
        const success = UseVerifyInputs({ user, name, username, email, gender });
        if (!success) return;

        try {
            setLoading(true);

            // Create the data object
            const data = { name, username, email, gender };

            // Add password to the data object only if it is not empty
            if (password) {
                data.password = password;
            }

            const res = await axios.put(`api/user/updateuser/${user._id}`, data);

            localStorage.setItem("Healthuser", JSON.stringify(res.data));
            toast.success("Updated successfully");
            setUser(res.data);
        } catch (error) {
            toast.error(error.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return { loading, updateUser };
};

function UseVerifyInputs({ user, name, username, email, gender }) {
    if (
        user.name === name &&
        user.username === username &&
        user.email === email &&
        user.gender === gender
    ) {
        return false;
    }
    return true;
}
