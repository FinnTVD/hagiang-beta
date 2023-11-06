import IndexHomePage from '@/components/homepage'
import { GET_DATA_HOME, GET_META_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
export async function generateMetadata() {
  const data = await getData(GET_META_HOME)
  if (!data) return
  const featuredImage = data?.data?.page?.featuredImage
  const homeHG = data?.data?.page?.homeHG
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: homeHG?.meta?.metaTitle,
    description: homeHG?.meta?.metaDescription,
    applicationName: process.env.SITE_NAME,
    keywords: [
      'Cheers Tour',
      'Ha Giang Tour',
      'Ha Giang Loop',
      'Cheers',
      'Cheers Hostel Official Site',
      'Cheers Hostel',
    ],
    authors: [
      {
        name: 'okhub',
        url: 'https://okhub.vn/',
      },
    ],
    creator: 'FinnTVD',
    openGraph: {
      title: homeHG?.meta?.metaTitle,
      description: homeHG?.meta?.metaDescription,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '/images/bg-header.jpg',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: homeHG?.meta?.metaTitle,
      description: homeHG?.meta?.metaDescription,
      creator: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '/images/bg-header.jpg',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
    },
  }
}
export default async function page() {
  const data = await getData(GET_DATA_HOME)
  return (
    <IndexHomePage
      data={data?.data?.page?.homeHG}
      allTourHG={data?.data?.allTourHG}
    />
  )
}
