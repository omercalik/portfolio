import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

export default function Index({ projects, articles }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Ömer Berkan Çalık</title>
          <meta
            name="title"
            content="Ömer Berkan Çalık - Full Stack Web Developer"
          />
          <meta
            name="keywords"
            content="omer berkan, omer calik, omer berkan calik, omer calik website"
          />
          <meta
            name="description"
            content="Full Stack Web Developer based in Turkey, studied Computer Engineering at Eskisehir Osmangazi University"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://omerberkancalik.com" />
          <meta
            property="og:title"
            content="Ömer Çalık - Full Stack Web Developer"
          />
          <meta
            property="og:description"
            content="Full Stack Web Developer based in Turkey, studied Computer Engineering at Eskisehir Osmangazi University"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://omerberkancalik.com/" />
          <meta
            property="twitter:title"
            content="Ömer Berkan Çalık - Full Stack Web Developer"
          />
          <meta
            property="twitter:description"
            content="Full Stack Web Developer based in Turkey, studied Computer Engineering at Eskisehir Osmangazi University"
          />
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          <LatestArticle articles={articles} />
          <ContactMe />
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'projects',
    //order: 'fields.order',
  })

  let data2 = await client.getEntries({
    content_type: 'blogPosts',
    limit: 4,
    order: 'sys.createdAt',
  })
  return {
    props: {
      projects: data.items,
      articles: data2.items.reverse(),
    },

    revalidate: 1,
  }
}
