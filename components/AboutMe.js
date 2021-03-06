import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
              <chakra.span
                onMouseOver={() => handleHover(`about_${text}`)}
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent bg="secondary" borderColor="button1" color="white">
              <PopoverArrow bg="textSecondary" />
              <PopoverBody fontSize="sm" color="textPrimary">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontSize="2xl">About Me</Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Ömer Berkan Çalık, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br />I studied Computer Engineering at Eskisehir Osmangazi
              University between 2015-2021. I worked at{' '}
              <MoreInfo
                text="Ziraat Bank"
                content={
                  <Image
                    w={306}
                    h={102}
                    src="https://i.imgur.com/ipFrRMZ.png"
                    alt="linkedin"
                  />
                }
              />{' '}
              and{' '}
              <MoreInfo
                text="May Cyber Technology"
                content={
                  <Image
                    w={306}
                    h={102}
                    src="https://i.imgur.com/4FMzc0Q.png"
                    alt="linkedin"
                  />
                }
              />{' '}
              as intern. After that i worked as Fullstack Web Developer for 4
              months at
              <MoreInfo
                text="Mobiversite"
                content={<a>https://www.mobiversite.com/</a>}
              />
              .Right now I am working at a startup as Lead Developer.
              <br />I do programming in various languages and technologies
              mainly MongoDB, PostgreSQL, Nest.js, Express.js, React.js,
              Node.js,Next.js and building mobile applications with Flutter.
              <br />
              <br />
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
              <Image
                src="https://i.imgur.com/YE8cso5.png"
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                alt="illustration"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
