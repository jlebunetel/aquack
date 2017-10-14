import React, { Component } from 'react';
import ol from "openlayers";

export default class Carte extends Component {

  componentDidMount() {
    let styleDefault = new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#008CBA',
          width: 0
        }),
        fill: new ol.style.Fill({
          color: '#008CBA'
        })
      });

    let base = new ol.layer.Tile({ 
        name: 'base',
        opacity: 1,
        source: new ol.source.XYZ({ 
          url:'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
          attributions: "<h6>Océan Hackathon 2017, Brest : Projet Aquaculture Marine</h6>",
        })
    });

    let map = new ol.Map({
      target: this.refs.map,
      layers: [base],
      controls: ol.control.defaults().extend([
        new ol.control.ScaleLine()
      ]),
      view: new ol.View({
        center: ol.proj.fromLonLat([-1, 49]),
        zoom: 6,
        minZoom: 5,
        maxZoom: 9
      })
    });
 
  }

  render() {
    let style = {
      height: '350px'
    };

    return (
      <div>
        <section className="panel-map">
          <div className="map" ref="map" style={style}>
            <div className="olTool" ref="olTool"></div>
          </div>
        </section>
      </div>
    );
  }

}