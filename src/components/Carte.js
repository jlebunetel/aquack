import React, { Component } from 'react';
import ol from "openlayers";
import carroyage from './carr.js';

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
        source: new ol.source.TileWMS({
            url: 'http://services.data.shom.fr/wbu1tn9qmq9n6by8ijsy69sk/wms/r',
            params: {'LAYERS': 'RASTER_MARINE_3857_WMSR', 'TILED': true},
            serverType: 'geoserver'
        })
    });
    let vectorSource = new ol.source.Vector({
    	features: (new ol.format.GeoJSON()).readFeatures(carroyage)
    });
    
    let styles = {
    	0: new ol.style.Style({
    		stroke: new ol.style.Stroke({
    			width: 0
    		}),
    		fill: new ol.style.Fill({
    			color: "#FF0000"
    		})
    	}),
    	1: new ol.style.Style({
    		stroke: new ol.style.Stroke({
    			width: 0
    		}),
    		fill: new ol.style.Fill({
    			color: "#FFFF00"
    		})
    	}),
    	2: new ol.style.Style({
    		stroke: new ol.style.Stroke({
    			width: 0
    		}),
    		fill: new ol.style.Fill({
    			color: "#00FF00"
    		})
    	})
    };
    
    let styleFunction = function(feature){
    	let exclusion = feature.get("Z_M") * feature.get("z_vase");
    	let base = feature.get("")
    	let total = 0;
    	if(exclusion == 0) {
    		total = 0;
    	}
    	else {
    		total = 2;
    	}
    	return styles[total];
    }
    let carr = new ol.layer.Vector({
    	name: 'carr',
    	opacity: 0.5,
    	source: vectorSource,
    	style: styleFunction
    });

    let map = new ol.Map({
      target: this.refs.map,
      layers: [base, carr],
      controls: ol.control.defaults().extend([
        new ol.control.ScaleLine()
      ]),
      view: new ol.View({
        center: ol.proj.fromLonLat([-4.9, 48.45]),
        zoom: 10.5,
        minZoom: 9,
        maxZoom: 18
      })
    });
 
  }

  render() {
    let style = {
      height: '500px'
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