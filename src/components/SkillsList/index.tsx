import { ScrollView, View } from "react-native"
import { SkillsListProps } from "./index.types"
import { styles } from "./index.styles"
import SkillItem from "../SkillItem"

const SkillsList = ({ skills }: SkillsListProps) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                    {
                        skills.map(({skillName, level}) => (
                            <View key={skillName} style={styles.skillItemContainer}>
                                <SkillItem
                                    skillName={skillName}
                                    level={level} 
                                />
                            </View>
                        ))
                    }
            </ScrollView>
        </View>
    )
}

export default SkillsList;