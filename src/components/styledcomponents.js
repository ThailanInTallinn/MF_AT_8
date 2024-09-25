import styled from "styled-components";

export const CardContainer = styled.div`
  width: 350px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: lightgray;

  @media screen and (max-width: 430px) {
    height: 100%;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  align-items: center;
`;

export const ProfilePic = styled.img`
  height: 50%;
`;

export const Name = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: black;
  margin: 0;
`;

export const SmallerInfo = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: black;
  margin: 0;
`;

export const IconsContainer = styled.div`
  background-color: gray;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.5rem;

  @media screen and (max-width: 430px) {
    flex-grow: 1;
    font-size: 2rem;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  height: 50%;
  color: black;
`;

export const TableHead = styled.th`
  color: black;
  background-color: gray;
`;

export const TableData = styled.td`
  color: black;
  background-color: lightgray;
  text-align: center;
`;
