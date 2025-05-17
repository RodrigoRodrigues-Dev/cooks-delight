import styled from 'styled-components';
import { ParagraphStyled } from '../../../components/common/Paragraph/styles';

export const AboutUsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  border: 1px solid rgba(38, 37, 34, 24%);
  border-radius: 24px;
  padding: 16px;

  @media (max-width: 1420px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const TextWrapper = styled.div`
  grid-row: 1 / 2;
  padding: 50px 0 6px 24px;

  @media (max-width: 1420px) {
    padding: 0;
    align-self: center;
    grid-column: 1 / 3;
  }

  @media (max-width: 930px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

export const ParagraphAbout = styled(ParagraphStyled)`
  margin: 16px 0;
`;

export const Image1 = styled.div`
  background-image: url('https://cooks-delight-images.vercel.app/About%20Us/Salmon%20Image.jpg');
  border-radius: 24px;
  background-repeat: no-repeat;
  background-position: 0;
  background-size: 100% auto;
  width: 316px;
  height: 100%;
  justify-self: end;
  align-self: flex-end;

  @media (max-width: 1420px) {
    display: none;
  }

  @media (max-width: 930px) {
    display: block;
    grid-column: auto;
    grid-row: auto;
    width: 100%;
  }
`;

export const Image2 = styled.div`
  background-image: url('https://cooks-delight-images.vercel.app/About%20Us/Chefs%20Image.webp');
  grid-column: 3 / 3;
  grid-row: 1 / 3;
  border-radius: 24px;
  background-repeat: no-repeat;
  background-position: -300px;
  background-size: 260%;
  width: 411px;

  @media (max-width: 1420px) {
    height: 100%;
  }

  @media (max-width: 930px) {
    grid-column: auto;
    grid-row: auto;
    width: 100%;
    background-size: 120%;
    background-position: -100px -50px;
  }

  @media (max-width: 630px) {
    background-size: 170%;
    background-position: -120px -5px;
  }

  @media (max-width: 415px) {
    background-size: 260%;
  }
`;

export const Image3 = styled.div`
  background-image: url('https://cooks-delight-images.vercel.app/About%20Us/Cooking%20Image.webp');
  object-fit: fill;
  grid-column: 1 / 3;
  border-radius: 24px;
  background-repeat: no-repeat;
  background-size: 110%;

  @media (max-width: 1420px) {
    grid-column: 1 / 3;
    background-position: -30px 3%;
    background-size: 130%;
    height: 346px;

    @media (max-width: 1230px) {
      background-size: 155%;
      background-position: -30px 7%;
    }

    @media (max-width: 1130px) {
      background-size: 170%;
      background-position: -30px 7%;
    }

    @media (max-width: 1070px) {
      background-size: 200%;
      background-position: -30px 8%;
    }

    @media (max-width: 995px) {
      background-size: 230%;
      background-position: -30px 7%;
    }

    @media (max-width: 930px) {
      grid-column: auto;
      grid-row: auto;
      width: 100%;
      background-size: 190%;
      background-position: -30px 30%;
    }

    @media (max-width: 590px) {
      background-size: 260%;
    }

    @media (max-width: 460px) {
      background-size: 370%;
    }
  }
`;
