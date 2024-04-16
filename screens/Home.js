import { Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Home = () => {

    const { userInfo } = useContext(AuthContext);

    return (<>
        <Text>Your info:</Text>
        <Text>Name: {userInfo.name}</Text>
        <Text>Email: {userInfo.email}</Text>
        <Text>Phone: {userInfo.phone_number || 'non-existent'}</Text>
    </>
    );
};

export { Home };