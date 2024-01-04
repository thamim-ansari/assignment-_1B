import styled from 'styled-components'

export const CountriesItem = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
`
export const CountryName = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 14px;
`
export const VisitButton = styled.button`
  background-color: ${props => (props.isVisited ? 'transparent' : '#3b82f6')};
  color: ${props => (props.isVisited ? '#94a3b8' : '#ffffff')};
  font-family: 'Roboto';
  font-size: ${props => (props.isVisited ? '16' : '14')}px;
  padding: 8px ${props => (props.isVisited ? '16' : '24')}px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`
