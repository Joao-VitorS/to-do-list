import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
   background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`
export const ToDoList = styled.div`   
   background: #FFFFFF;
   border-radius: 5px;
   padding: 30px 20px;

   ul{
      padding: 0;
      margin-top: 50px;
   }
   
`

export const Input = styled.input` 
   height: 40px;
   margin-right: 10px;
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 18px;
   border: 2px solid rgba(209, 211, 212, 0.4);
   border-radius: 5px;
   color: #000000;
   width: 342px;
   margin-right: 38px;
   
`
export const Button = styled.button`
   height: 40px;
   background: #8052EC;
   border-radius: 5px;
   color: #FFFFFF;
   font-weight: 900;
   font-size: 17px;
   line-height: 2px;
   width: 130px;
   cursor: pointer;
   border: none;
   &:hover{
      opacity: 0.8;
   }
   &:active{
      opacity: 0.6;
   }
`
export const ListItems = styled.div`    
   height: 50px;
   background: ${props => props.isFinished ? '#E8FF8B' : ' #E4E4E4'};
   box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 30px;
   padding: 0 10px;
   width: 500px;

   li{
      list-style: none;
   }
   
`
export const Trash = styled(FcEmptyTrash)`
   cursor: pointer;
`
export const Check = styled(FcCheckmark)`
   cursor: pointer;
`
export const Void = styled.h3`
   display: flex;
   justify-content: center;
   color: #383838;

`