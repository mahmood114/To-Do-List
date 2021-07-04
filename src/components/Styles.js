import styled from 'styled-components'
import { MdDeleteForever } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import Modal from "react-modal";

export const MdDeleteForeverStyle = styled(MdDeleteForever)`
color: white;
`;
export const BiTaskStyled = styled(BiTask)`
color: white;
`;

export const ModalStyle = styled(Modal)`
position: center;
margin-left: 400px;
margin-top: 200px;
width: 900px;
max-width: 100%;
height: 500px;
max-height: 100%;
`;
