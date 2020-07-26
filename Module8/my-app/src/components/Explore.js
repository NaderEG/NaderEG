import React, {Component} from 'react'
import Colors from "./Colors"
import Services from "./Services"

class Explore extends Component {
    state = {
        colors: [
            {id: 1, content: 'Balboa Mist'},
            {id: 2, content: 'Tapestry Beige'},
            {id: 3, content: 'Revere Pewter'},
            {id: 4, content: 'Fine Grain Dunn'},
            {id: 5, content: 'Grant Beige'},
            {id: 6, content: 'Summer Shower'},
            {id: 7, content: 'Sea Salt'},
            {id: 8, content: 'Silver Marlin'},
            {id: 9, content: 'Silvermist'},
            {id: 10, content: 'Pleasent Valley'},
            {id: 11, content: 'Peppercorn'},
            {id: 12, content: 'Wedgewood Gray'},
            {id: 13, content: 'Van Courtland Blue'},
            {id: 14, content: 'Berkshire Beige'},
            {id: 15, content: 'River Reflections'},
            {id: 16, content: 'Metropolis'}
        ],
        services: [
            {id:17, content: 'Minimalist Bathroom'},
            {id:18, content: 'Minimalist Kitchen'},
            {id:19, content: 'Minimalist Master Bedroom'},
            {id:20, content: 'Classic Bathroom'},
            {id:21, content: 'Classic Kitchen'},
            {id:22, content: 'Classic Master Bedroom'}
            
        ]
    }
    render() {
        return(
            <div className="row">
                <h1 className="center">Explore</h1>
                <div className="column">
                    
                    <Colors colors={this.state.colors} />
                </div>
                <div className="column">
                    <Services services={this.state.services} />
                </div>
            </div>

        )
    }
}

export default Explore