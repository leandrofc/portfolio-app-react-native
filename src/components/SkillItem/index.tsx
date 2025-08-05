import { View, Text } from "react-native";
import { SkillItemProps } from "./index.types";
import { Feather } from '@expo/vector-icons';
import { styles } from "./index.styles";

const SkillItem = ({ skillName, level } : SkillItemProps) => {
    const MAX = 5;

    const filledStars = Array.from({ length: level }).map((_, i) => (
        <Feather name="star" size={24} color="#EDDF45" key={`filledStar-${i}`} />
    ));

    const emptyStars = Array.from({ length: MAX - level }).map((_, i) => (
        <Feather name="star" size={24} color="#414244" key={`emptyStar-${i}`} />
    ));

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {skillName}
            </Text>

            <View style={styles.starsContainer}>
                {[...filledStars, ...emptyStars]}
            </View>
        </View>
    )
}

export default SkillItem;