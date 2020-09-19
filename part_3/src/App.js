import React, { Component } from 'react';
import './App.css';
import SeedSelector from './components/SeedSelector';
import Compatible from './components/Compatible';

const data = {
  "gardens": {
    "harvest": {
      "pods": 6,
      "wattage": 60,
      "grow_height": 24
    },
    "sprout": {
      "pods": 3,
      "wattage": 40,
      "grow_height": 18
    },
    "bounty": {
      "pods": 9,
      "wattage": 60,
      "grow_height": 36
    },
  },
  "seed_kits": {
    "gourmet_herbs": {
      "pods": [3, 6, 9],
      "min_grow_height": 16,
      "min_wattage": 20,
    },
    "cherry_tomatoes": {
      "pods": [6, 9],
      "min_grow_height": 24,
      "min_wattage": 40
    },
    "salad_greens": {
      "pods": [3, 6],
      "min_grow_height": 14,
      "min_wattage": 20
    },
  }
}

function findCompatible(seed_kit) {
  let compatible = [];
  let seedType = data.seed_kits[seed_kit]
  for (const garden in data.gardens) {
    let currentGarden = data.gardens[garden];
    if (currentGarden.pods >= Math.min(...seedType.pods) && currentGarden.grow_height >= seedType.min_grow_height && currentGarden.wattage >= seedType.min_wattage) {
      compatible.push(garden);
    }
  }
  return compatible;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      selected: null,
      compatible: [],
    }
  }
  
  handleSelect = (kit) => {
    if (this.state.selected === kit) {
      this.setState({selected: null, compatible: []});
    } else {
      this.setState({selected: kit});
      let comp = findCompatible(kit);
      this.setState({selected: kit, compatible: comp})
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>AeroGrow Code Challenge</h2>
          <h3>- Part 3 -</h3>
        </header>
        <main className="App-main">
          <h1>WHAT WOULD YOU LIKE TO GROW?</h1>
          <SeedSelector
            data={this.state.data}
            selected={this.state.selected}
            handleSelect={this.handleSelect}
          />
          {this.state.selected ? 
            <div>
              <h1>RECOMMENDED GARDENS</h1>
              <Compatible
                data={this.state.data}
                selected={this.state.selected}
                handleSelect={this.handleSelect}
                compatible={this.state.compatible}
              />
            </div>
            : null
          }
        </main>
      </div>
    );
  }
}

export default App;
