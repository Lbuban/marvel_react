import { combineReducers } from 'redux'
import characters from './Characters'
import question from './Jeopardy'

//combining all of our reducers and calling it "marvelApp".
const marvelApp = combineReducers({
    characters,
    question
})

export default marvelApp