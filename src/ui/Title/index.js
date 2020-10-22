import React from 'react'
import styled from 'styled-components'
import { space, layout, color, typography } from 'styled-system'

const TitleElement = styled('div')(space, layout, color, typography)

const Title = ({ children, ...props }) => {
  return (
    <TitleElement fontSize="md" color="black" fontWeight={500} {...props}>
      {children}
    </TitleElement>
  )
}

export default Title
