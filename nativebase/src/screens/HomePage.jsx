import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from '../components/Modal'
import { Box } from '@/components/ui/box'
import { Center } from '@/components/ui/center'
import ProfileIcon from '../components/ProfileIcon'
import { Textarea, TextareaInput } from "@/components/ui/textarea"
import { HStack } from '@/components/ui/hstack'
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge"
import { GlobeIcon } from "@/components/ui/icon"
import { Grid, GridItem } from '@/components/ui/grid'


const HomePage = () => {
    return (
        <Box className='p-8 flex-1' >
            <Box className='flex-[9]'>
                <Box className='flex-1'>
                    <Center>
                        <ProfileIcon
                            name='Furkan Ercan'
                            src={'https://picsum.photos/200'}
                            size={'xl'}
                        />
                    </Center>
                    <Center className='mt-4'>
                        <Text className=' text-2xl'>
                            Furkan Ercan
                        </Text>
                        <Badge size="md" variant="solid" action="muted">
                            <BadgeText>Verified</BadgeText>
                            <BadgeIcon as={GlobeIcon} className="ml-2" />
                        </Badge>
                    </Center>
                    <Center className='mt-10'>
                        <Text className='mb-4 text-xl'>Ortak Arkadaşlar</Text>
                        <HStack space="md" reversed={false}>
                            <ProfileIcon name='Taha Serdar' />
                            <ProfileIcon name='Gülay Kızılgedik' />
                            <ProfileIcon name='Neval Durmaz' />
                            <ProfileIcon name='Öznur' />
                        </HStack>
                    </Center>
                </Box>



                <Center className='my-8'>
                    <Grid
                        className="gap-y-2 gap-x-4 w-full"
                    >
                        <GridItem
                            className="bg-red-800 elevation-lg  p-4 rounded-md text-center border-4 border-white/70 outline-1 outline-black flex-1 flex-row"
                        >
                            <Text className="text-md text-white ">Şikayet Et</Text>
                        </GridItem>
                        <GridItem
                            className="bg-blue-800 elevation-lg  p-4 rounded-md text-center border-4 border-white/70 outline-1 outline-black flex-1 flex-row"
                        >
                            <Text className="text-md text-white ">Takip Et</Text>
                        </GridItem>
                    </Grid>
                </Center>
            </Box>
            <Box className='flex-[1]'>
                <Modal
                    text='Arkadaş Ekle'
                    question='Bu kişiyi arkadaş eklemek istediğinize emin misiniz?'
                    body='Gizliliğiniz açısından tanımadığınız kişileri arkadaş eklemenizi kesinlikle önermeyiz.'
                    yes='Ekle'
                    no='İptal'
                />
            </Box>
        </Box>
    )
}

export default HomePage

const styles = StyleSheet.create({})