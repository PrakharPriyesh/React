import React from "react";
import Button from './Button';
import './Buttons.css';


export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                <span style={{margin: "10px", fontSize: "30px"}}>
                    {this.props.value}
                </span>

                <button className="button button3" onClick={() => this.props.click(false)}>
                    <img style={{ width: "15px" }} src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/minus-2-icon-18-256.png"></img>
                </button>

                <button className="button" onClick={() => this.props.click(true)}>
                    <img style={{ width: "10px" }} src="https://lh3.googleusercontent.com/proxy/o7GMO0l0jNUzvgEWRtMsD1ufXzDDlhczj54jSBAH9p-r66N4WAAKGkOoCE-aPVjJAzorzmGUc--HCdcYl52Iqy9dn9QljiJ_ddms6X2mVH7G7XCGOmRRF7o"></img>
                </button>

            </div>
        )
    }
} 