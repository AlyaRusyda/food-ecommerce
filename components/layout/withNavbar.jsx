import Head from 'next/head'
import React from 'react'
import Navbar from '../Navbar'

const withNavbar = (PageComponent) => {
  return function wrappedPage(props) {
    return (
        <>
            <Head>
                <title>JanCook</title>
            </Head>
            <Navbar />
            <PageComponent {...props} />
        </>
    )
  }
}

export default withNavbar