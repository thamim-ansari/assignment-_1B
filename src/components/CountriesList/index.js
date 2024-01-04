import {CountriesItem, CountryName, VisitButton} from './styleComponents'

const CountriesList = props => {
  const {countriesDetails, onChangeVisit} = props
  const {id, name, isVisited} = countriesDetails

  const onClickVisit = () => {
    onChangeVisit(id)
  }

  return (
    <CountriesItem>
      <CountryName>{name}</CountryName>
      <VisitButton
        type="button"
        isVisited={isVisited}
        onClick={onClickVisit}
        disabled={isVisited === true}
      >
        {isVisited ? 'Visited' : 'Visit'}
      </VisitButton>
    </CountriesItem>
  )
}

export default CountriesList
