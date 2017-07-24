






// map1 variable
var map1;
// map2 variable
var map2;
// aDive variable
var aDiv1;
// aDive variable
var aDiv2;
// map1 center
var centerlatlng1 = L.latLng(38.75408327579141, -98.24729919433595);
//map2 center
var centerlatlng2 = L.latLng(38.47939467327645, -100.01953125000001);
// marker variable
var marker;
// icon variable
var myIcon = L.icon({
    iconUrl: 'img/mymarker_evstation1.png',
    iconSize: [26, 37],
    iconAnchor: [13, 37],
    popupAnchor: [0, -37],
});
// map1 max bounds
var southWest = L.latLng(19.973348786110613, -157.93945312500003),
    northEast = L.latLng(53.64463782485651, -38.58398437500001),
    bounds = L.latLngBounds(southWest, northEast);
    
    
    $(function (){
        
        
        "use strict";
        
        $('.aToolTip').tooltip();
		$('.aPopOver').popover();
        
        // MapBox Base Layers for mymap1
        var aLayerOne1 = L.tileLayer('https://api.tiles.mapbox.com/v4/{map_id}/{z}/{x}/{y}.png?access_token={accessToken}', {
						attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ? <a href="http://mapbox.com">Mapbox</a>',
						maxZoom: 18,
						map_id: 'mapbox.light',
						accessToken: 'pk.eyJ1Ijoic2Jvcm91c2giLCJhIjoiX1hBS2VPOCJ9.lWv8ETmRvUcWGBQVcAMJ3g'
		});
        
        
        var aLayerTwo1 = L.tileLayer('https://api.tiles.mapbox.com/v4/{map_id}/{z}/{x}/{y}.png?access_token={accessToken}', {
						attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ? <a href="http://mapbox.com">Mapbox</a>',
						maxZoom: 18,
						map_id: 'mapbox.satellite',
						accessToken: 'pk.eyJ1Ijoic2Jvcm91c2giLCJhIjoiX1hBS2VPOCJ9.lWv8ETmRvUcWGBQVcAMJ3g'
		});
        
//        // MapBox Base Layers for mymap2
//        var aLayerOne2 = L.tileLayer('https://api.tiles.mapbox.com/v4/{map_id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//						attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ? <a href="http://mapbox.com">Mapbox</a>',
//						maxZoom: 18,
//						map_id: 'mapbox.streets',
//						accessToken: 'pk.eyJ1Ijoic2Jvcm91c2giLCJhIjoiX1hBS2VPOCJ9.lWv8ETmRvUcWGBQVcAMJ3g'
//		});
//        
//        
//        var aLayerTwo2 = L.tileLayer('https://api.tiles.mapbox.com/v4/{map_id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//						attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ? <a href="http://mapbox.com">Mapbox</a>',
//						maxZoom: 18,
//						map_id: 'mapbox.light',
//						accessToken: 'pk.eyJ1Ijoic2Jvcm91c2giLCJhIjoiX1hBS2VPOCJ9.lWv8ETmRvUcWGBQVcAMJ3g'
//		});
        
         //stations overlay
        var aLayerThree = L.featureGroup();
        
         //routes overlay
        var aLayerFour = L.featureGroup();
        
        // creating geojson
        var aLayerFive = L.geoJson(aGeoJson , {
                                                style : function (feature) {
                                                                                    return { stroke: true , color: '#ffffff', weight : 2, opacity: 1.5 , dashArray: "15,10,5,10", fillColor : feature.properties.Color , fillOpacity : 0.6 };
                                                                                   },
                                                onEachFeature : function (feature, layer ) {
                                                                                           
                                                                                           
                                                                                           layer.on('mouseover', function(){
                                                                                            
                                                                                                                            layer.setStyle({stroke: false , fillOpacity : 1});
                                                                                                                            layer.bindPopup("<b>"+ feature.properties.NAME +"</b>");

                                                                                                                            }); // End of mouse over
                                                                                           layer.on('mouseout', function(){
		
                                                                                                                            layer.setStyle({stroke: true,  fillOpacity: 0.6});
                                                                                                                                
                                                                                                                            }); // End of mouse out
                                                                                            layer.on('click', function(e){
                                    
                                                                                                                          map1.flyTo([e.latlng.lat, e.latlng.lng],6);
            
                                                                                                                        }); // end of click
                                                                                           } // end of oneachfeature                                 
            
            
                                                  }); // end of options of geoJson
                                                            
        
        // creating map using Leaftlet API
        map1 = L.map('myMap1', {
				center: centerlatlng1,
				zoom:	4,
				maxBounds: bounds,
				layers: [aLayerTwo1,aLayerFive,aLayerThree,aLayerFour]
		});
        
        // creating map using Leaflet API
//        map2 = L.map('myMap2', {
//				center: centerlatlng2,
//				zoom:	3.5,
//				//maxBounds: bounds,
//				layers: [aLayerOne2]
//		});
        
        //zoomin to csun
        //map.flyTo([34.2426,-118.5281], 15);
        //map1.on('click', function(e){
        //                            
        //                            map2.flyTo([e.latlng.lat, e.latlng.lng],8);
        //    
        //                            });
        
        
        // adding scale control to your map using Leaftlet API
        L.control.scale().addTo(map1);
        //L.control.scale().addTo(map2);
        
        
        //adding a layer control
        
        //adding base layer
		var baseLayers1 = {
			"Light Grey" : aLayerOne1,
			"Imagery": aLayerTwo1
		};
        
//        var baseLayers2 = {
//			"Streets" : aLayerOne2,
//			"Light Grey": aLayerTwo2
//		};
        
        //adding overlay
       var overLayers = {
		  "Stations" : aLayerThree,
          "Nearest Stations"   : aLayerFour,
          "US States" : aLayerFive
		};
        
        
        L.control.layers(baseLayers1,overLayers).addTo(map1);
        //L.control.layers(baseLayers2).addTo(map2);
        
                
        //getting stations for each state
        $("#aStation").on('click ', function(){
                        
                       $("#aLocation").removeClass("active");
                       $("#aStation").addClass("active");
                       map1.setView(centerlatlng1, 4);
                      // getting value from dropdown list
                      var State = $('#iconList1').val();
                      var evNetwork = $('#iconList2').val();
                      var evChargingLevel = $('#iconList3').val();
                      var evConnectorType = $('#iconList4').val();
                          
                       $.ajax({
                        
                                dataType: "json",
                                url: "https://api.data.gov/nrel/alt-fuel-stations/v1.json",
                                data:{ api_key: "W9OQxgwXinLbWrplqWUFHb3K4y5Tql7mDG82KOm4" ,
                                       fuel_type : "ELEC",
                                       access : "public",
                                       ev_network : evNetwork,
                                       ev_charging_level : evChargingLevel,
                                       ev_connector_type :evConnectorType,
                                       state : State,
                                       }, // end of data options
                                success: function(resultData){
                                    
                                    console.info(resultData);
                                    aDiv1.innerHTML = "Total Stations:" + "<br>" + resultData.total_results;
                                    
                                    // grabbing data from fuel stations array
                                    var aStationArray = resultData.fuel_stations;
                                    
                                        // returning the number of desired stations
                                        console.info(resultData.total_results);
                                        // returning the location of stations and adding marker to them
                                        for (var i = 0; i < aStationArray.length; i++) {
                                            var aMarker = L.marker([aStationArray[i].latitude, aStationArray[i].longitude], {icon: myIcon});
                                            aLayerThree.addLayer(aMarker);
                                                 // aLayerThree.addLayer ( L.marker([aStationArray[i].latitude, aStationArray[i].longitude], {icon: myIcon})
                                                                        //.bindPopup( "<strong>"+ aStationArray[i].station_name +"</strong>"  + "<br>" + aStationArray[i].street_address + "<br>" + aStationArray[i].city + "," + aStationArray[i].state + aStationArray[i].zip + "<br>" +aStationArray[i].station_phone + "<br>"));
                                                                       
                                                                        //onclick = (function() {
                                                                        //                        return function() {
                                                                        //                  
                                                                        //                                           aDiv1.innerHTML = "station name:" + aStationArray[i].station_name;
                                                                        //                                          };
                                                                        //                        })();
                                                                          
                                
                                         }// end of loop
                                         

                                         
                                         // showing information in custom control including : address, name, and phone number
                                         //marker.on('click', function() {
                                         //                                  console.info("hi");
                                         //                                  //aDiv.innerHTML = "station name:" + aStationArray[i].station_name + "<br>" + aStationArray[i].street_address + "<br>" + aStationArray[i].city + "," + aStationArray[i].state + aStationArray[i].zip + "<br>" +aStationArray[i].station_phone;
                                         //                                   } );
                                   
                                }// esuccs functon 
                        
                        
                        }); // end of AJAX
                                                //// showing information in custom control including : address, name, and phone number
                                                // Marker.on('click', function(i) {
                                                //                           console.info("hi");
                                                //                           aDiv1.innerHTML = "station name:" + aStationArray[i].station_name ;
                                                //                            } );
                       

                       
                       aLayerThree.clearLayers();
                       aLayerFour.clearLayers();
                       //map1.addLayer(aLayerFive);
                       
                });
         
         //// clustering markers
         //var markers = L.markerClusterGroup();
         //                   markers.addLayer(L.marker(getRandomLatLng(map1)));
         //                   map1.addLayer(markers);

         ////getting nearest stations to particular route
         //$("#aRoute").on("click", function(){
         //               
         //              $("#anInfo").removeClass("active");
         //              $("#aRoute").addClass("active");
         //              
         //              $.ajax({
         //               
         //                       dataType: "json",
         //                       url: "https://api.data.gov/nrel/alt-fuel-stations/v1/nearby-route.json",
         //                       data:{ api_key: "W9OQxgwXinLbWrplqWUFHb3K4y5Tql7mDG82KOm4" ,
         //                              route : "LINESTRING(-74.0 40.7, -87.63 41.87, -104.98 39.76)",
         //                              fuel_type : "ELEC",
         //                              distance	 : "5",
         //                              //limit : "5",
         //                              access : "public",
         //                              ev_network : "all",
         //                              ev_charging_level : "all",
         //                              ev_connector_type : "all",
         //                              }, // end of data options
         //                       success: function(resultData){
         //                           
         //                           console.info(resultData);
         //                           
         //                           // grabbing data from fuel stations array
         //                           var aStationArray = resultData.fuel_stations;
         //                           
         //                               // returning the number of desired stations
         //                               console.info(resultData.total_results);
         //                               // returning the location of stations and adding marker to them
         //                               for (var i = 0; i < aStationArray.length; i++) { 
         //                                       L.marker([aStationArray[i].latitude, aStationArray[i].longitude], {icon: myIcon})
         //                                        .bindPopup(aStationArray[i].station_name)
         //                                        .addTo(map);
         //                       
         //                                }// end of loop
         //                                
         //                              
         //                       }// esuccs functon 
         //               
         //               
         //               }); // end of AJAX       
         //       });
         //
          //getting nearest stations to particular location by entering Latitude and Longitude of location 
                 $("#aLocation").on("click", function(){
                       
                       $("#aStation").removeClass("active");
                       $("#aLocation").addClass("active");
                       
                       // getting value from dropdown list
                        var Lat = document.getElementById("lat").value;
                        var Lng = document.getElementById("lng").value;
                        var Rd = document.getElementById("Rd").value;
                       
                       $.ajax({
                        
                                dataType: "json",
                                url: "https://api.data.gov/nrel/alt-fuel-stations/v1/nearest.json",
                                data:{ api_key: "W9OQxgwXinLbWrplqWUFHb3K4y5Tql7mDG82KOm4" ,
                                       fuel_type : "ELEC",
                                       latitude : Lat,
                                       longitude :Lng,
                                       radius	 : Rd,
                                       access : "public",
                                       ev_network : "all",
                                       ev_charging_level : "all",
                                       ev_connector_type : "all",
                                       }, // end of data options
                                success: function(resultData){
                                    
                                    console.info(resultData);
                                    aDiv1.innerHTML = "Total Stations:" + "<br>" + resultData.total_results;
                                    
                                    // grabbing data from fuel stations array
                                    var aStationArray = resultData.fuel_stations;
                                        // returning the number of desired stations
                                        console.info(resultData.total_results);
                                        // returning the location of stations and adding marker to them
                                        for (var i = 0; i < aStationArray.length; i++) { 
                                                aLayerFour.addLayer( L.marker([aStationArray[i].latitude, aStationArray[i].longitude], {icon: myIcon})
                                                 .bindPopup("<b>"+ aStationArray[i].station_name + "</b>" + "<br>" + aStationArray[i].street_address + "<br>" + aStationArray[i].city + "," + aStationArray[i].state + aStationArray[i].zip + "<br>" +aStationArray[i].station_phone));
                                                  map1.setView([Lat,Lng], 13);
                                                 // map1.flyTo([Lat,Lng],6);
                                                  //aLayerFive.clearLayers();
                                                  //map1.addLayer(aLayerFive);
                                         }// end of loop   
                                }// esuccs functon
                                
                                   //// creating on click event for each marker
                                   //              marker.on('click',function(){
                                   //                                      aDiv.innerHTML = "station name:" ; 
                                   //                                      });
                        
                        }); // end of AJAX
                           aLayerThree.clearLayers();
                           aLayerFour.clearLayers();
                });
                 
                   //$("#myInfo").innerHTML( "station name:");
                   
                   
                   
                   
        var aControl1 = L.control({position: 'bottomright'});
			
		// part 2/3 : Should contain code that creates all the neccessary DOM elements for the control
		aControl1.onAdd = function () {
		
				aDiv1 = L.DomUtil.create('div', 'aCustomC'); // create a div with a class "aCustomC"
				aDiv1.innerHTML = ""; // Each HTML element has an innerHTML property that defines both the HTML code and the text that occurs between that element's opening and closing tag.
					
				return aDiv1;
		}; // end function onAdd
			
		// part 3/3 : Add the control to the map
		aControl1.addTo(map1);           
                  
//        // Creating custom control here
//		// part 1/3 : Creates a control with the given position
//		var aControl2 = L.control({position: 'bottomright'});
//			
//		// part 2/3 : Should contain code that creates all the neccessary DOM elements for the control
//		aControl2.onAdd = function () {
//		
//				aDiv2 = L.DomUtil.create('div', 'aCustomC'); // create a div with a class "aCustomC"
//				aDiv2.innerHTML = "Web-Mapping Techniques"; // Each HTML element has an innerHTML property that defines both the HTML code and the text that occurs between that element's opening and closing tag.
//					
//				return aDiv2;
//		}; // end function onAdd
//			
//		// part 3/3 : Add the control to the map
//		aControl2.addTo(map2);
//        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        }); // end of document ready