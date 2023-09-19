import { styled } from "styled-components";

export const Footer = styled.footer`
    width: 100%;
	height: 100px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: #ffffff;

    @media screen and (max-width: 840px){
        h1{
            font-size: 20px;
        }
    }
`