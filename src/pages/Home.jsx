import React from 'react'
import Main from '../components/Main'
import requests from '../Requests'
import Row from '../components/Row'

function Home() {
  return (
    <div>
        <Main/>
        <Row num="1" title="Popular" uri={requests.popular}/>
        <Row num="2" title="Top Rated" uri={requests.toprated}/>
        <Row num="3" title="upcoming" uri={requests.upcoming}/>
        <Row num="4" title="Trending" uri={requests.trending}/>
    </div>
  )
}

export default Home