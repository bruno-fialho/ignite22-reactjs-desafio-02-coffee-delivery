import styled from 'styled-components'

export const BannerWrapper = styled.div`
  width: 100vw;
  height: 34rem;

  background-image: url('./banner-background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 22rem;
  margin: 0 auto;
  padding: 0 10rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  img {
    width: 42.5%;
    height: auto;

    @media (max-width: 576px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    padding: 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`

export const BannerTextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4.125rem;
`

export const BannerTitleContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;

  color: ${(props) => props.theme['base-title']};
`

export const BannerSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};

  @media (max-width: 768px) {
    display: none;
  }
`

export const BannerInfoContainer = styled.div`
  width: 100%;
  height: 5.25rem;

  display: flex;
  flex-direction: row;
  gap: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
  }
`
