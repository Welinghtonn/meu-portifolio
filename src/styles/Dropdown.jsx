import { styled } from "styled-components";

export const DropDown = styled.div`
    padding: 12px;

    color: white;
    background-color: #00001b;

    a{
        color: #fff;
    }

    &:hover{
        a{
            color: #00001b;
        }
        background-color: #fff;
    }

    @media (min-width: 565px) {
	display: none;
}

`