import { styled } from "styled-components";

export const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

.Lado-azul{
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 50%;
	height: 100vh;

	font-size: 60px;

	color: #efeaff;
	background-color: #00001b;
}

.Lado-white{
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 50%;
	height: 100vh;

	font-size: 60px;

	color: #00001b;
	background-color: #efeaff;
}

`