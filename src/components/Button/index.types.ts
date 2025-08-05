export interface ButtonProps {
    text: string,
    variant?: "withIcon" | "ghost" | "default",
    icon?: "linkedin" | "github" | "mail",
    onPress: () => void
}