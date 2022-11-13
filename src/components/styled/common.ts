import { CSSObject, MantineTheme } from "@mantine/core";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({theme}) => theme.palette.secondary.main} ;
`

export const mantinethemeConfig: Partial<MantineTheme> = {
  colors: {
    brand: [ '#E80F88', '#AD1374', '#AD1374', '#AD1374', '#AD1374', '#980F5A', '#C50E82', '#C50E82', '#AD1374', '#AD1374' ],
  },
  primaryColor: 'brand',
  primaryShade: 5,
  dir: "ltr",
  focusRing: "auto",
  // defaultRadius: 0,
  loader: "bars",
}