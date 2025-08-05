import { Pressable, Text, View } from "react-native"
import { styles } from "./index.styles"
import { ButtonProps } from "./index.types"
import { Feather } from '@expo/vector-icons';

const Button = ({ text, onPress, variant = "default", icon }: ButtonProps) => {
    const isGhostVariant = variant === "ghost";

    const containerStyle = {
        withIcon: styles.containerForIconVariant,
        ghost: styles.containerForGhostVariant,
        default: styles.container
    };

    return(
        <Pressable
            onPress={onPress}
            style={containerStyle[variant]}
        >
            <View style={styles.contentContainer}>
                {icon && 
                    <View style={styles.iconContainer}>
                        <Feather name={icon} size={24} color="white" />
                    </View>
                }
                <Text style={isGhostVariant ? styles.textForGhostVariant : styles.text}> 
                    {text}
                </Text>
            </View>
        </Pressable>
    )
}

export default Button;