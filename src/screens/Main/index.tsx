import { View, Linking } from "react-native"
import { StatusBar } from 'expo-status-bar';
import Header from "../../components/Header"
import { styles } from "./index.styles"
import ButtonsList from "../../components/ButtonsList";
import { ButtonsListProps } from "../../components/ButtonsList/index.types";
import { ButtonProps } from "../../components/Button/index.types";
import Button from "../../components/Button";
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from "./index.types";

const MainScreen = () => {
    const navigation = useNavigation<NavigationProps>();

    const links = [
        {
            text: "Linkedin",
            icon: "linkedin",
            onPress: () => Linking.openURL("https://www.linkedin.com/in/leandro-fonseca-frontend/"),
            variant: "withIcon"
        },
        {
            text: "Github",
            icon: "github",
            onPress: () => Linking.openURL("https://github.com/leandrofc"),
            variant: "withIcon"
        },
        {
            text: "Email",
            icon: "mail",
            onPress: () => Linking.openURL("mailto:leandromkt@outlook.com"),
            variant: "withIcon"
        }
    ] as ButtonProps[];
    
    return (
        <View style={styles.container}>
            <Header title="Leandro Fonseca" />

            <ButtonsList buttons={links} />

            <Button
                text="See skills"
                variant="ghost"
                onPress={() => navigation.navigate("Skills")}
            />

            <StatusBar style="light" />
        </View>
    )
}

export default MainScreen