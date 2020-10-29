import React from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  flexbox,
  color,
  typography,
  border,
} from 'styled-system'
import { FiCircle, FiCheckCircle } from 'react-icons/fi'

const LabelStyled = styled('label')`
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${border}

  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;

  .checkmark {
    position: absolute;
    right: 17px;
    top: 15px;
    height: 30px;
    width: 30px;
  }

  .checkmark .checked {
    display: none;
  }

  .checkmark .normal {
    color: ${(props) => props.theme.colors.gray};
  }

  input:checked ~ .checkmark .normal {
    display: none;
  }

  input:checked ~ .checkmark .checked {
    display: block;
    color: ${(props) => props.theme.colors.white};
  }

  input:checked {
    background: ${(props) => props.theme.colors.blue};
    border-color: ${(props) => props.theme.colors.blue};
  }

  p {
    position: absolute;
    height: 60px;
    left: 17px;
    top: 17px;
    color: #888;
  }

  input:checked ~ p {
    color: ${(props) => props.theme.colors.white};
  }
`

const InputStyled = styled('input')`
  display: flex;
  justify-content: center;
  align-items: center;
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${border}
`

const InputElement = ({ title, type, ...props }) => {
  return (
    <InputStyled
      type={type}
      bg="white"
      borderRadius="12px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray"
      color="black"
      height="60px"
      minWidth="100%"
      fontSize="sm"
      placeholder={title}
      p="sm"
      {...props}
    />
  )
}

const Input = ({ title, name, type, ...props }) => {
  if (type === 'checkbox' || type === 'radio') {
    return (
      <LabelStyled className="checkbox" {...props}>
        <InputElement name={name} title={title} type={type} />
        <p>{title}</p>
        <span className="checkmark">
          <FiCircle className="normal" size={30} />
          <FiCheckCircle className="checked" size={30} />
        </span>
      </LabelStyled>
    )
  }

  return <InputElement title={title} name={name} type={type} {...props} />
}

export default Input
