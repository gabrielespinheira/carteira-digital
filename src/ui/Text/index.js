import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography } from 'styled-system'

const TextElement = styled('p')(space, layout, color, typography)

const Text = ({ children, ...props }) => {
  return (
    <TextElement fontSize="sm" color="black" fontWeight={300} {...props}>
      {children}
    </TextElement>
  )
}

export default Text
