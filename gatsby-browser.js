import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import Layout from 'components/Layout'

import 'base.css'

const Transition = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
})

export const onInitialClientRender = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}


export const replaceComponentRenderer = ({ props }) => {
  const { component } = props.pageResources

  return (
    <Layout>
      <PoseGroup>
        <Transition key={props.location.key}>
          {React.createElement(component, props)}
        </Transition>
      </PoseGroup>
    </Layout>
  )
}
