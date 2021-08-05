import React, { Component } from 'react'
import "./Portfolio.css"
import "./Plnnr.css"

class Plnnr extends Component {

    render() {
        return (
            <div className="portfolio">
                <h3>KEY FEATURES</h3>
                <div className="portfolioSecs">
                    <div className="plnnrSection">
                        <div id="dbIcons" className="portContentWrap">
                            <i class="fas fa-database" id="db"></i>
                            <i class="fas fa-arrows-alt-h" id="arrow"></i>
                            <i class="fas fa-tv" id="pc"></i>
                        </div>
                        <div className="pLabel">Real-time Data</div>
                    </div>
                    <div className="plnnrSection">
                        <div id="editIcons" className="portContentWrap">
                            <i class="fas fa-edit" id="edit"></i>
                            <i class="fas fa-history" id="clock"></i>
                        </div>
                        <div className="pLabel">Renders Changes<br />Instantly</div>
                    </div>
                    <div className="plnnrSection">
                        <div id="uiIcon" className="portContentWrap"><i class="far fa-address-card"></i></div>
                        <div className="pLabel"> Intuitive UI for<br />Database Updates</div>
                    </div>
                </div>

            </div>


        )
    }
}

export default Plnnr;