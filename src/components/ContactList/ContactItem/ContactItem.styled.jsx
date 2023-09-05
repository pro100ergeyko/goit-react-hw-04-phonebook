import styled from '@emotion/styled';

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteContactBtn = styled.button`
  padding: 10px;
  margin: 16px;
  border-radius: 20px;
  font-size: 16px;
  background-color: #cefb04;
  border-color: #0213ff;
  cursor: pointer;

  :hover {
    background-color: #0213ff;
    border-color: #cefb04;
    color: #fff;
  }
`;
