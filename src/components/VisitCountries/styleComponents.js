import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
export const ResponsiveContainer = styled.div`
  width: 80%;
`
export const AppHeading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 400;
`
export const CountriesListContainer = styled.ul`
  padding-left: 0px;
  background-color: #1f1f2f;
  border: 1px solid #334155;
  border-radius: 12px;
  height: 40vh;
  overflow-y: auto;
`
export const VisitedCountriesListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const NoCountriesContainer = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoCountriesText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 18px;
`
