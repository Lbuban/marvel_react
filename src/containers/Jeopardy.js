import { connect } from 'react-redux'
import { getQuestion } from '../actions/Jeopardy'
import JeopardyDisplay from '../components/jeopardydisplay/JeopardyDisplay'

//fake middleman that renders what gets passes to CharacterList.
const mapStateToProps = state => {
  return {
    question: state.question //this represents characters that comes back from the UI
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderQuestion: () => {
      dispatch(getQuestion())
    }
  }
}

const Questions = connect( //run the function and connect the mapStateToProps and mapDispatchToProps to the CharacterList component.
  mapStateToProps,
  mapDispatchToProps
)(JeopardyDisplay) 

// console.log(Questions)

export default Questions