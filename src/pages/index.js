import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import posed from 'react-pose'

import styled from '@emotion/styled'

// import { colors } from '../config'

const WorkList = styled.div`
  background-color: red;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Section = posed.section({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 },
})

// const P = posed.p({
//   enter: { y: 0, opacity: 1 },
//   exit: { y: 50, opacity: 0 },
// })

const IndexPage = ({ data: { work } }) => {
  console.log(work)
  return (
    <Section>
      <WorkList>
        {work.edges.map(w => (
          <div key={w.node.id}>
            <Title>{w.node.title}</Title>
            <Img fluid={w.node.heroImage.fluid} backgroundColor={'#eeeeee'} />
          </div>
        ))}
      </WorkList>
    </Section>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    work: allContentfulWork {
      edges {
        node {
          id
          title
          slug
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          # body {
          #   childMarkdownRemark {
          #     html
          #     excerpt(pruneLength: 80)
          #   }
          # }
        }
      }
    }
  }
`
