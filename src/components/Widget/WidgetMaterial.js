import React from 'react';
import './Widget.css';
import CodingDojo from '../../imgs/dojo.png';
import Kicks from '../../imgs/kicks.png';
import Bitcoin from '../../imgs/bitcoin.png';
import Space from '../../imgs/space.png';
import Stonks from '../../imgs/stonks.jpg';

const WidgetMaterial = () => {
    return (
        <div className="widget_container">
            <div className="widget_material">
                <img src={CodingDojo} alt="Coding Dojo" />
                <div className="widget_title">
                    <h5>Learn to Code</h5>
                    <p>A thorough and effective coding bootcamp</p>
                </div>
            </div>
            <div className="widget_material">
                <img src={Kicks} alt="hype shoes" />
                <div className="widget_title">
                    <h5>Kicks niche</h5>
                    <p>A space for all heat on feet ranging from retros to the most modern hype</p>
                </div>
            </div>
            <div className="widget_material">
                <img src={Bitcoin} alt="bitcoin" />
                <div className="widget_title">
                    <h5>Crypto Corner</h5>
                    <p>Dedicated to the due diligence and movements of crypto currencies, especially Bitcoin</p>
                </div>
            </div>
            <div className="widget_material">
                <img src={Space} alt="space" />
                <div className="widget_title">
                    <h5>Space: The final frontier</h5>
                    <p>All things involving the vastly unknown contents of our galaxy anx those beyond</p>
                </div>
            </div>
            <div className="widget_material">
                <img src={Stonks} alt="stonks" />
                <div className="widget_title">
                    <h5>Stonks, ETFs, Index Funds</h5>
                    <p>Information on trading for new investors and due diligence on hot stocks</p>
                </div>
            </div>
        </div>
    )
}

export default WidgetMaterial;