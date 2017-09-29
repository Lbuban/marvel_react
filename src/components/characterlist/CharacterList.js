import React, { Component } from 'react';
import CharacterCard from '../charactercard/CharacterCard';
import _ from 'lodash';
import { Grid, Row } from 'react-bootstrap';

export class CharacterList extends Component {

  componentDidMount() {
    this.props.renderCharacters();
  }

  render() {

    let characters = "Loading...";

    if(!_.isEmpty(this.props.characters)){

      if(this.props.characters.characters.length){ //if there is a length of characters
        characters = this.props.characters.characters.map( //iterate over the charcters using .map method.
            //as you iterate, build a new CharcterCard, filled out with each character's info.
          (character) => <CharacterCard key={character.id} character={character} />
        );
      }else{
        characters = "No characters found!"
      }
      
    }

    return (
      <Grid>
        <Row>
          {characters}
        </Row>
      </Grid>
    );
  }
}

export default CharacterList;