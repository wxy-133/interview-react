import React, { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next';

import {
    Link,
    Box,
    LinkBox, LinkOverlay, Heading, Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Button, MenuGroup
} from '@chakra-ui/react'


const index = () => {
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState('en')
    const changeLanguage = () => {
        if (language == 'en') {
            setLanguage('zh')
            i18n.changeLanguage(language)
        } else if(language == 'zh'){
            setLanguage('en')
            i18n.changeLanguage(language)
        }
    }
    return (
        <>
            <header className='header'>
                <Link>{t("nav.home")}</Link>
                <Link>{t('nav.about')}</Link>
                <Link>{t('nav.products')}</Link>
                <Link>{t('nav.products')}</Link>
                <Link>{t('nav.certificate')}</Link>
                <Link>{t('nav.news')}</Link>
                <Button onClick={changeLanguage}>{t("language.english")}</Button>
            </header>
            <main>
                <div className='lists'>

                    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox>
                    <LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox><LinkBox as='article' maxW='sm' p='5' borderWidth='1px' rounded='md'>
                        <Box as='time' dateTime='2023-03-03'>
                        {t('content.word')}
                        </Box>
                        <Heading size='md' my='2'>
                            <LinkOverlay href='#'>
                                {t('content.font')}
                            </LinkOverlay>
                        </Heading>
                        <Text>
                        {t('content.source')}
                        </Text>
                    </LinkBox>
                </div>
            </main>

        </>
    )
}

export default index