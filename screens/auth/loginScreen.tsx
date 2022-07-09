import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button, Container } from "../../common/components";
import { TScreenProp } from "../../common/types";
import { useAuth } from "../../providers";

export const LoginScreen = ({ navigation }: TScreenProp) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const { login } = useAuth();

    const handleLogin = () => {
        if (email && password) {
            login(email, password);
        }
    };

    return (
        <Container style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text>Fill in your details to login</Text>
            <View style={styles.textInput}>
                <TextInput style={styles.placeholder} placeholder="Username" value={email} onChangeText={setEmail} />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    style={styles.placeholder}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <Button buttonStyle={styles.loginButton} text="Login" handleOnPress={() => handleLogin()} />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    title: {
        fontFamily: "DMSans-Bold",
        fontSize: 34,
    },
    subheading: {
        fontFamily: "DMSans-Bold",
        fontSize: 16,
    },
    textInput: {
        width: "100%",
        padding: 20,
        backgroundColor: "#F0F0F0",
        borderRadius: 14,
        marginTop: 20,
    },
    placeholder: {
        fontSize: 17,
        fontFamily: "DMSans-Regular",
    },
    loginButton: {
        marginTop: 30,
    },
});
