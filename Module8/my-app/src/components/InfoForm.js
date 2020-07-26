import React, {Component} from 'react'

class InfoForm extends Component {
    state = {
        paintMode: true
    }
    
    handleChange(event) {
        
        
        
        
    }

    render(){
        
        return(
            <div className = "container">
                <form>
                    <label>Please select a job type:</label>
                    <select  id="dropDown" className="browser-default" onChange={this.handleChange()}>
                        <option value="paint-job">Paint Job</option>
                        <option value="service">Service</option>
                    </select>
                    
                </form>
            </div> 
        )
    }
}

export default InfoForm