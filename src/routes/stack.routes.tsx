import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

import MainScreen from "../screens/Main";
import SkillsScreen from "../screens/Skills";
import { StackParamList } from "./index.types";

export function StackRoutes() {
    return (
        <Navigator initialRouteName="Main">
            <Screen
                name="Main"
                component={MainScreen}
                options={{
                    headerShown: false
                }}
            />
            <Screen
                name="Skills"
                component={SkillsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}