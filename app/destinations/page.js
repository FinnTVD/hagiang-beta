import Destination from '@/components/destinations/Destination'
import { GET_META_DESTINATION, GET_CONTENT_DESTINATIONS } from '@/graphql/destinantion/queries'
import getData from '@/utils/getData'
import React from 'react'
import { GET_DATA_HOME, GET_DATA_ABOUT_US } from '@/graphql/home/queries'

export async function generateMetadata() {
  const data = await getData(GET_META_DESTINATION)
  if (!data) return
  const destination = data?.data?.page?.destination
  const featuredImage = data?.data?.page?.featuredImage
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: destination?.meta?.title,
    description: destination?.meta?.description,
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
      title: destination?.meta?.title,
      description: destination?.meta?.description,
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
      title: destination?.meta?.title,
      description: destination?.meta?.description,
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

async function page() {
  const data = await getData(GET_DATA_HOME)
  const dataAboutUs = await getData(GET_DATA_ABOUT_US)
  const dataDestination = await getData(GET_CONTENT_DESTINATIONS)

  return (
    <div>
      <Destination
        dataHome={data?.data?.page?.homeHG}
        allTourHG={data?.data?.allTourHG}
        dataAboutUs={dataAboutUs?.data?.page?.aboutUs}
        dataDestination={dataDestination?.data?.page?.destination}
      />
    </div>
  )
}

export default page
