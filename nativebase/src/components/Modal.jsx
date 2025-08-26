import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogBody,
    AlertDialogBackdrop,
} from "@/components/ui/alert-dialog"
import { Button, ButtonText } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { Textarea, TextareaInput } from "@/components/ui/textarea"
import React from "react"

const Modal = ({ text = "Open", question, body, yes, no }) => {
    const [showAlertDialog, setShowAlertDialog] = React.useState(false)
    const handleClose = () => setShowAlertDialog(false)
    return (
        <>
            <Button onPress={() => setShowAlertDialog(true)}>
                <ButtonText>{text}</ButtonText>
            </Button>
            <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
                <AlertDialogBackdrop />

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <Heading className="text-typography-950 font-semibold" size="md">
                            {question}
                        </Heading>
                    </AlertDialogHeader>
                    <AlertDialogBody className="mt-3 mb-4">
                        <Text size="sm">
                            {body}
                        </Text>
                        <Textarea
                            size="md"
                            isReadOnly={false}
                            isInvalid={false}
                            isDisabled={false}
                            className=" w-full my-4"
                        >
                            <TextareaInput placeholder="İsteğinizle beraber bir mesaj gönderin..." />
                        </Textarea>
                    </AlertDialogBody>
                    <AlertDialogFooter className="">
                        <Button
                            variant="outline"
                            action="secondary"
                            onPress={handleClose}
                            size="sm"
                        >
                            <ButtonText>{no}</ButtonText>
                        </Button>
                        <Button size="sm" onPress={handleClose}>
                            <ButtonText>{yes}</ButtonText>
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default Modal