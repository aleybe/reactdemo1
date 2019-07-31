import React, { ReactComponent } from "react";

import {getBeer} from "../API/beerAPI";

class Beer extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            error: null, 
            isLoaded: false,
            item: {},          
        };
    };

    componentDidMount() {
        getBeer().then(data =>  {
            let niceData = JSON.parse(data)[0];

            this.setState({
                isLoaded: true,
                item: {
                    name: niceData.name,
                    description: niceData.description,
                    date: niceData.data
                }
            });
        }).catch(err => {
            console.log("Error ", err)
            this.setState({
                isLoaded: true,
                error: err
            })
        });
    }

    render() {

        let beerObject = (
            <div>
                <h1>{this.state.item.name}</h1>
                <p>{this.state.item.description}</p>
                <br></br>
                <p>{this.state.item.date}</p>
            </div>
        );

        const { error, isLoaded, item } = this.state;

        if (error) {
            return <div>Error : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log("Beer made with ", item);
            return ( <div>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <br></br>
                <p>{item.date}</p>
            </div>);
        }
    };
}


export default Beer;