import React from 'react';
import WidgetMaterial from './WidgetMaterial';
import './Widget.css';

const Widget = () => {
    return (
        <div className="widget_container_main">
            <div className="widget_header">
                <h5>Spaces to follow</h5>
            </div>
            <div className="widget_content">
                <WidgetMaterial/>
            </div>
        </div>
    )
}

export default Widget;