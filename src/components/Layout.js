import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Nav from './Nav'
import ContactForm from './ContactForm'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

{
  /* <script type="text/javascript">
  window.ondevicemotion = function(event) {

			    var accelerationX = event.accelerationIncludingGravity.x;
  accelerationX = Math.round(accelerationX);

			    if (accelerationX<7 && accelerationX>-6) {
    $('.wrapper').css({ "background-position-x": -3000 - 500 * accelerationX });
  }
}
		</script> */
}

const pulse = keyframes`
  0 % {
    background-color: #ED6A5A;
  }

  25 % {
    background-color: #F4F1BB
  }

  50 % {
    background-color: #9BC1BC
  }

  75 % {
    background-color: #5CA4A9
  }

  to {
    background-color: #E6EBE0
  }
`

const bounce = keyframes`
  0%,
  10%,
  25%,
  40%,
  50% {
      transform: translateY(0);
  }

  20% {
      transform: translateY(-10px);
  }

  30% {
      transform: translateY(-5px);
  }
`

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* scroll-snap-type: y mandatory;
  scroll-behavior: smooth; */
  overflow-y: scroll;
  display: block;

  /* > * {
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
    display: block;
  } */
`

const Main = styled.main`
  padding-bottom: 100px;
`

const Header = styled.header`
  /* margin-bottom: -100px; */
  /* min-width: 100vw; */
  height: 100vh;
  /* animation: ${pulse} 12s infinite alternate; */
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: #ccc;
  /* background-attachment: fixed; */
  /* background-image: url(${require('../images/topography.svg')}); */
  /* transform: translatez(0);
  will-change: background-color; */
  /* transform: rotateZ(360deg); */
`

const HeaderContainer = styled.div`
  animation: ${fadeInDown} 0.6s both;
  animation-delay: 0.2s;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  animation: ${pulse} 12s infinite alternate;
  background-image: url('https://placeimg.com/1920/1080/nature/grayscale');
  /* background-attachment: fixed; */
`

const FooterTwo = styled.footer`
  /* position: sticky; */
  background-color: rgba(100, 100, 200, 0.9);
  bottom: 0;
  width: 100%;
  height: 35px;
`

const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 2rem;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1``

const Description = styled.h2`
  font-weight: normal;
  text-align: center;
`

const ArrowDown = styled(require('../icons/arrow-down.svg'))`
  animation: ${bounce} 4s 2s infinite;
  margin-top: auto;
  position: absolute;
  bottom: 17.5%;
  fill: #ccc;
`

const Layout = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header>
          <HeaderContainer>
            <Title>{'Hi, I\'m (Juan) Anibal'}</Title>
            <Description>{'Full Stack Web, UI/UX & Javascript Developer.'}</Description>
            <Description><i>{'I build web & mobile apps.'}</i></Description>
            <a alt="Scroll to Main" href="#main"><ArrowDown /></a>
          </HeaderContainer>
        </Header>
        <Nav />
        <Main id="main" />
        <Footer>
          <FooterContainer>
            <h1>a ndaskj dkjas dkas d</h1>
            <ContactForm />
          </FooterContainer>
        </Footer>
        <FooterTwo>
          <nav>asd</nav>
        </FooterTwo>
        <FooterTwo>
          <nav>asd</nav>
        </FooterTwo>
      </Container>
    )}
  />
)

export default Layout
