import IndexAboutUs from '@/components/about-us'
import getData from '@/utils/getData'
import { GET_DATA_ABOUT_US, GET_DATA_HOME } from '@/graphql/home/queries'

export async function generateMetadata() {
  const data = await getData(GET_DATA_ABOUT_US)
  if (!data) return
  const featuredImage = data?.data?.page?.featuredImage
  const aboutUs = data?.data?.page?.aboutUs
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: aboutUs?.meta?.title,
    description: aboutUs?.meta?.description,
    applicationName: process.env.SITE_NAME,
    keywords: [
      'Cheers Tour',
      'Ha Giang Tour',
      'Ha Giang Loop',
      'Cheers',
      'Cheers Hostel Official Site',
      'Cheers Hostel',
    ],
    openGraph: {
      title: aboutUs?.meta?.title,
      description: aboutUs?.meta?.description,
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
      title: aboutUs?.meta?.title,
      description: aboutUs?.meta?.description,
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
export default async function AboutUs() {
  const data = await getData(GET_DATA_HOME)
  const dataAboutUs = await getData(GET_DATA_ABOUT_US)

  return (
    <IndexAboutUs
      data={data?.data?.page?.homeHG}
      allTourHG={data?.data?.allTourHG}
      dataAboutUs={dataAboutUs?.data?.page?.aboutUs}
    ></IndexAboutUs>
  )
}
