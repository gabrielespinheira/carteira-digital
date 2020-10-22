import styled from 'styled-components'
import { space, layout, color, typography, border } from 'styled-system'

const Container = styled('div')`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 414px;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
`

export default Container
