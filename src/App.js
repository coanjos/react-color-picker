import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

export default class App extends Component {
  
  findPalette(id) {
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <PaletteList palettes={seedColors}/>}/>
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )} 
            />
          )}
        />
      </Switch>

      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}