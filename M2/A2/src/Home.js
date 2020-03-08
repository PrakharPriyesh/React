import React from "react";
import Card from './Components/Card/Card'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png",
            title: "Prakhar Priyesh",
            description: "Hi my name is prakhar priyesh and I will be joining Red Pandas in the coming days as software engineer Hi my name is prakhar priyesh and I will be joining Red Pandas in the coming days as software engineer"
        }

    }

    render() {
        return (
            <div>
                <Card url={this.state.url} title={this.state.title.substring(0,24)} des={this.state.description.substring(0,205) + ".."}></Card>
            </div>
        )

    }
}