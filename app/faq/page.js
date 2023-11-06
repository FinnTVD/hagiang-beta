import IndexFaq from '@/components/faq'
import { GET_META_FAQ } from '@/graphql/faq/queries'
import { GET_DATA_HOME, GET_DATA_ABOUT_US } from '@/graphql/home/queries'
import getData from '@/utils/getData'
import React from 'react'

export async function generateMetadata() {
  const data = await getData(GET_META_FAQ)
  if (!data) return
  const faq = data?.data?.page?.faq
  const featuredImage = data?.data?.page?.featuredImage
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: faq?.meta?.title,
    description: faq?.meta?.description,
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
      title: faq?.meta?.title,
      description: faq?.meta?.description,
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
      title: faq?.meta?.title,
      description: faq?.meta?.description,
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

  return (
    <IndexFaq
      data={data?.data?.page?.homeHG}
      allTourHG={data?.data?.allTourHG}
      dataAboutUs={dataAboutUs?.data?.page?.aboutUs}
    ></IndexFaq>
  )
}

export default page
