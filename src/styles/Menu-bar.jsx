import { styled } from "styled-components";

export const Menubar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 50%;

    @media (max-width: 565px){
        display: none;
    }
    .a{
	color: #00001b;
}

    h3{
        cursor: pointer;
    }
    h3:hover{
            border-bottom: solid 2px black;
    }
`