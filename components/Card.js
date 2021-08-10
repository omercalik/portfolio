import {
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  ScaleFade,
  chakra,
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaPepperHot,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaBootstrap,
  FaDatabase,
  FaVuejs,
  FaNodeJs,
} from 'react-icons/fa'
import { SiNextDotJs, SiTypescript, SiRedux, SiMongodb } from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

import Image from './ChakraNextImage'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) {
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Typescript') {
      values[0] = 'blue'
      values[1] = SiTypescript
    } else if (tag == 'Sass') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'Vue') {
      values[0] = 'green'
      values[1] = FaVuejs
    } else if (tag == 'Node.js') {
      values[0] = 'green'
      values[1] = FaNodeJs
    } else if (tag == 'Redux') {
      values[0] = 'purple'
      values[1] = SiRedux
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    } else if (tag == 'MongoDB') {
      values[0] = 'green'
      values[1] = SiMongodb
    } else if (tag == 'Next') {
      values[0] = 'black'
      values[1] = SiNextDotJs
    } else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="320px"
      maxH="500px"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
    >
      <ScaleFade in={true} transition={{ duration: 1 }}>
        <Image
          width={1250}
          height={600}
          w="auto"
          h="auto"
          src={imageURL}
          transition="0.3s"
          borderRadius="10px 10px 0px 0px"
          alt="project image"
        ></Image>
        <Stack px={4} py={2}>
          <Stack isInline justifyContent="space-between" alignItems="center">
            <Text fontSize="2xl" color="displayColor">
              {title}
            </Text>
            <Stack
              isInline
              justifyContent="flex-end"
              alignItems="center"
              spacing={4}
            >
              {githubLink && (
                <Link
                  href={githubLink}
                  color="white"
                  onClick={() =>
                    handleClick(`githublink_${title.replace('@', '-at-')}`)
                  }
                  isExternal
                >
                  <FaGithub size={23} />
                </Link>
              )}
              {deployLink && (
                <Link
                  href={deployLink}
                  color="white"
                  onClick={() =>
                    handleClick(`deploylink_${title.replace('@', '-at')}`)
                  }
                  isExternal
                >
                  <FaExternalLinkAlt size={20} />
                </Link>
              )}
            </Stack>
          </Stack>
          <Stack isInline>{Tags}</Stack>
          <Divider />
          <Text color="textSecondary" fontSize={['sm', 'md']}>
            {desc}
          </Text>
        </Stack>
      </ScaleFade>
    </Stack>
  )
}
