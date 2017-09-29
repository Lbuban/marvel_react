import { connect } from 'react-redux'
import { getCharacters } from '../actions/Character'
import CharacterList from '../components/characterlist/CharacterList'

//fake middleman that renders what gets passes to CharacterList.
const mapStateToProps = state => {
  return {
    characters: state.characters //this represents characters that comes back from the UI
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderCharacters: () => {
      dispatch(getCharacters())
    }
  }
}

const Characters = connect( //run the function and connect the mapStateToProps and mapDispatchToProps to the CharacterList component.
  mapStateToProps,
  mapDispatchToProps
)(CharacterList) 

export default Characters