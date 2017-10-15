import React, { Component } from 'react';
import ol from "openlayers";
import carroyage from './carr.js';

export default class Carte extends Component {

  
  componentDidMount() {
  	
  	let fish = this.props.fish;
  	console.log(fish);
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
    	let exclusion = feature.get("Z_M") * feature.get("z_vase") * feature.get("gran");
    	let base = feature.get("z_vase")*0.5 + feature.get("herb")*2 + feature.get("c_peche")*2;
    	let poisson = feature.get("bathy_pois")*2 + feature.get("cour_pois") + feature.get("hs_pois")*1.5;
    	let moule = feature.get("bathy_moul")*2 + feature.get("cour_moul")*1 + feature.get("hs_moul")*1.5;
    	let algue = feature.get("bathy_algu")*2 + feature.get("cour_algu")*1 + feature.get("hs_algu")*1.5;
    	let add_max = 18;
    	let total = 0;
    	let max = 0;
    	let somme = 0;
    	if(exclusion === 0) {
    		total = 0;
    	}
    	else {
    		if (fish.length === 0) {
    			total = 2;
    		}
   		else {
    			somme = base;
    			for (var i in fish){
    				if (i === "poisson") {
    					somme += poisson;
    				}
    				else if (i === "huitre") {
    					somme += moule;
    				}
    				else if (i === "algue") {
    					somme += algue
    				}
    				max += add_max;
    			}
    			if(somme / max > 0.49) {
    				total = 2;
    			}
    			else {
    				total = 1
    			}
    		}
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
  
  componentDidUpdate() {
  	let fish = this.props.fish;
  	console.log(fish);
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
    	let exclusion = feature.get("Z_M") * feature.get("z_vase") * feature.get("gran");
    	let base = feature.get("z_vase")*0.5 + feature.get("herb")*2 + feature.get("c_peche")*2;
    	let poisson = feature.get("bathy_pois")*2 + feature.get("cour_pois") + feature.get("hs_pois")*1.5;
    	let moule = feature.get("bathy_moul")*2 + feature.get("cour_moul")*1 + feature.get("hs_moul")*1.5;
    	let algue = feature.get("bathy_algu")*2 + feature.get("cour_algu")*1 + feature.get("hs_algu")*1.5;
    	let add_max = 18;
    	let total = 0;
    	let max = 0;
    	let somme = 0;
    	if(exclusion === 0) {
    		total = 0;
    	}
    	else {
    		if (fish.length === 0) {
    			total = 2;
    		}
   		else {
    			somme = base;
    			for (var i in fish){
    				if (i === "poisson") {
    					somme += poisson;
    				}
    				else if (i === "huitre") {
    					somme += moule;
    				}
    				else if (i === "algue") {
    					somme += algue
    				}
    				max += add_max;
    			}
    			if(somme / max > 0.49) {
    				total = 2;
    			}
    			else {
    				total = 1
    			}
    		}
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