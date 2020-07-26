import React from 'react'

const Services = ({services}) => {
    const serviceList = (
        services.map(service => {
            return(
                <div className="collection-item" key={service.id}>
                    <span>{service.content}</span>
                </div>
            )
        }))
        return (
            
            <div className="services collections">
                <h4>Services</h4>
                {serviceList}
            </div>
        )
    }
    
export default Services