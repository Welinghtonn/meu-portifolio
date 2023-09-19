import { styled } from "styled-components";

export const Container_fundo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    .pai{
        height: 90%;
        width: 90%;

        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }

    .filho{
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;

        gap: 15px;
        width: 100%;
    }

    .aprendendo{
        display: flex;
        justify-content: flex-end;
    }

    h3{
        padding: 5px;

        color: #fff;
        background-color: #00001b;
    }

    .img-pai{
        width: 100%;
        padding-top: 2rem;
        padding-bottom: 2rem;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        border-bottom: #00001b solid 3px;
    }

    .img-p{
        display: flex;
        width: 70vw;
        height: 40vh;

        @media screen and (max-width: 455px){
            height: 27vh;
    }
}

    img{
        width: 100%;
        height: 100%;
        border-radius: 7px;
        background-size: cover;
    }

    .descricao{
        display: flex;
        align-items: center;
        justify-content: center;

    @media screen and (max-width: 800px){
        flex-wrap: wrap;
    }
}

p{
    width: 100%;
    font-size: 25px;

    @media screen and (max-width: 505px){
            font-size: 20px;
    }
}
`