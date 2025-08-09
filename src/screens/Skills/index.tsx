import { Linking, Pressable, View } from "react-native"
import Header from "../../components/Header";
import Button from "../../components/Button";
import { SkillItemProps } from "../../components/SkillItem/index.types";
import { styles } from "./index.styles";
import { StatusBar } from "expo-status-bar";
import SkillsList from "../../components/SkillsList";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "./index.types";

const SkillsScreen = () => {
    const skills = [
        {
            skillName: "React",
            level: 5,
        },
        {
            skillName: "Node",
            level: 3,
        },
        {
            skillName: "CSS",
            level: 5,
        },
        {
            skillName: "HTML",
            level: 5,
        },
        {
            skillName: "JavaScript",
            level: 5,
        },
        {
            skillName: "TypeScript",
            level: 5,
        },
    ] as SkillItemProps[];

    const navigation = useNavigation<NavigationProps>();

    
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
                <Feather name={"chevron-left"} size={24} color="white" />
            </Pressable>

            <Header title="My skills" />

            <SkillsList skills={skills} />

            <Button
                text="Talk to me"
                onPress={() => Linking.openURL("mailto:leandromkt@outlook.com")}
            />

            <StatusBar style="light" />
        </View>
    )
}

export default SkillsScreen