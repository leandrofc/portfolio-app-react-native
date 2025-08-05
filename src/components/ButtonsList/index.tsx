import { View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import Header from "../../components/Header"
import { styles } from "./index.styles"
import { ButtonsListProps } from "./index.types";
import Button from "../Button";

const ButtonsList = ({ buttons }: ButtonsListProps) => {
    return (
        <View style={styles.container}>
            {
                buttons.map(({text, onPress, icon, variant}) => (
                    <Button
                        key={text}
                        text={text}
                        icon={icon}
                        variant={variant}
                        onPress={onPress}
                    />
                ))
            }
        </View>
    )
}

export default ButtonsList