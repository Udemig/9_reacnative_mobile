import { StyleSheet } from 'react-native'
import {
    Avatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar"

const ProfileIcon = ({ name, src, size }) => {
    return (
        <Avatar size={size}>
            <AvatarFallbackText>{name}</AvatarFallbackText>
            <AvatarImage
                source={{
                    uri: src,
                }}
            />
            <AvatarBadge />
        </Avatar>
    )
}

export default ProfileIcon;

const styles = StyleSheet.create({})