import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 16,
        backgroundColor: '#2A2B2D',
        height: 66,
        alignItems: "center",
        justifyContent: "center"
    },
    containerForIconVariant:{
        width:'100%',
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderRadius: 16,
        backgroundColor: '#2A2B2D',
        height: 66
    },
    containerForGhostVariant:{
        width:'100%',
        paddingVertical: 10,
        paddingHorizontal: 18,
        height: 66,
        alignItems: "center",
        justifyContent: "center"
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 18
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 47,
        width: 47,
        backgroundColor: "#414244",
        borderRadius: 50
    },
    text:{
        fontSize: 24,
        color: '#ffffff'
    },
    textForGhostVariant:{
        fontSize: 24,
        color: '#EDDF45'
    }
});