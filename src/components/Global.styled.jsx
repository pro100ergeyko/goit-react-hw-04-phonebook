import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px auto;
  width: 375px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  box-shadow: -5px -5px 5px #e6dc13, 5px 5px 5px #385fe6;
`;

export const PhoneBookTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const ContactTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
