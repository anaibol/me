import React from 'react'
import Layout from 'components/Layout'

import { render, fireEvent } from 'react-testing-library'

test('Click on arrow down scrolls down', () => {
  const { getByAltText } = render(
    <Layout />,
  )

  fireEvent.click(getByAltText('Scroll to Main'))
})
