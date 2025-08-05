import { View, Text, Image } from "react-native";
import { HeaderProps } from "./index.types";
import { styles } from "./index.styles";
import photo from '../../../assets/leandro-image.png';

const Header = ({ title  } : HeaderProps) => {
    return(
        <View style={styles.container}>
            <Image  source={photo} />

            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

export default Header;