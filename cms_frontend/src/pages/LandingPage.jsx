

import LandingPageBody from '../components/LandingPageBody';
import LandingPageFooter from '../components/LandingPageFooter';
import LandingPageNav from '../components/LandingPageNav'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <LandingPageNav/>
        <LandingPageBody/>
        <LandingPageFooter/>
    </div>
  )
}

export default LandingPage;