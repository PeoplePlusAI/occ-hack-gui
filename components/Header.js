import Head from 'next/head'

export default function Header({title = null}) {
  return (
    <Head>
      <title>{title == null ? "OCC - Open Cloud Compute" : title}</title>
      <link rel="icon" href="/HeadIcon.avif" />

      {/* These tags are for SEO,  Open Graph (OG) Metadata, Twitter Metadata */}

      {/* <meta content="OCC - Open Cloud Compute" name="title" />
      <meta content="abdulrcs, abdulrcs website" name="keywords" />
      <meta content="Open Cloud Compute" name="description"/>

      <meta content="website" property="og:type" />
      <meta content="https://abdulrahman.id" property="og:url" />
      <meta content="Abdul Rahman - Software Engineer" property="og:title" />
      <meta
        content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
        property="og:description"
      />
      <meta
        content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
        property="og:image"
      />

      <meta content="summary_large_image" property="twitter:card" />
      <meta content="https://abdulrahman.id/" property="twitter:url" />
      <meta
        content="Abdul Rahman - Software Engineer"
        property="twitter:title"
      />
      <meta
        content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
        property="twitter:description"
      />
      <meta
        content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
        property="twitter:image"
      /> */}
    </Head>
  )
}
