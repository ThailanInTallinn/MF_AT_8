import {
  CardContainer,
  IconsContainer,
  InfoContainer,
  Name,
  ProfilePic,
  SmallerInfo,
  TableContainer,
  TableHead,
  TableData,
  TextContainer,
} from "../styledcomponents";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Card() {
  return (
    <CardContainer>
      <InfoContainer>
        <ProfilePic src="https://a.pinatafarm.com/800x450/34164cea84/mike-wazowski-4d795f2a9e2984d3986f7ffe8e2892f4-meme.jpeg" />
        <TextContainer>
          <Name>Mike Wazowski</Name>
          <SmallerInfo>07/12/1984</SmallerInfo>
          <SmallerInfo>Sustos</SmallerInfo>
          <SmallerInfo>Assistente</SmallerInfo>
        </TextContainer>
        <IconsContainer>
          <FaPhoneAlt></FaPhoneAlt>
          <IoMdMail></IoMdMail>
          <IoLocationSharp></IoLocationSharp>
        </IconsContainer>
      </InfoContainer>
      <TableContainer>
        <tr>
          <TableHead>Estado</TableHead>
          <TableHead>Tarefas</TableHead>
        </tr>
        <tr>
          <TableData>Tarefa 1</TableData>
          <TableData>
            <input type="checkbox" />
          </TableData>
        </tr>
        <tr>
          <TableData>Tarefa 2</TableData>
          <TableData>
            <input type="checkbox" />
          </TableData>
        </tr>
        <tr>
          <TableData>Tarefa 3</TableData>
          <TableData>
            <input type="checkbox" />
          </TableData>
        </tr>
      </TableContainer>
    </CardContainer>
  );
}
