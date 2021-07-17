import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import TrashIcon from "@atlaskit/icon/glyph/trash";

const ButtonStyled = styled(Button)`
  margin: 5px;
  width: 440px;
  text-align: left;

  &,
  &:hover {
    ${(p) =>
      p.isCompleted &&
      css`
        text-decoration: line-through;
        background-color: #cc99cc;
        span{
          color: black;
        }
      `}
  }

  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: inline-block;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }

  .delete-icon {
    display: inline-block;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

export default function Todo({ todo, onCheckBtnClick, onDeleteBtnClick }) {
  return (
    <ButtonStyled
      isCompleted={todo.isCompleted}
      shouldFitContainer
      iconAfter={
        <>
          {!todo.isCompleted && (
          <span className='check-icon' onClick={() => onCheckBtnClick(todo.id)}>
            <CheckIcon primaryColor='#4fff4f' />
          </span>
          )}
          <span className='delete-icon' onClick={() => onDeleteBtnClick(todo.id)}>
            <TrashIcon primaryColor='#ff0033'/>
          </span>
        </>
      }
    >
      {todo.name}
    </ButtonStyled>
  );
}
