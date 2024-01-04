import {
  VisitedCountriesItem,
  CountriesImage,
  CountriesAndRemoveContainer,
  CountriesName,
  RemoveButton,
} from './styledComponents'

const VisitedCountriesList = props => {
  const {visitedCountriesDetails, onChangeVisit} = props
  const {id, name, imageUrl} = visitedCountriesDetails
  const onClickRemove = () => {
    onChangeVisit(id)
  }
  return (
    <VisitedCountriesItem>
      <CountriesImage src={imageUrl} alt="thumbnail" />
      <CountriesAndRemoveContainer>
        <CountriesName>{name}</CountriesName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </CountriesAndRemoveContainer>
    </VisitedCountriesItem>
  )
}

export default VisitedCountriesList
