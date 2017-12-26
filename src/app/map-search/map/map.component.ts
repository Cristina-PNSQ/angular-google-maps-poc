import { Component, OnInit , ViewChildren, NgZone} from '@angular/core';
import { LatLng, LatLngLiteral, PolyMouseEvent , AgmMarker , AgmInfoWindow} from '@agm/core';
import { PolygonManager} from '@agm/core';

import { Suburb } from '../../shared/models/suburb';
import { SuburbsService } from '../../shared/services/suburbs.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  zoom: number = 14;
  suburbs: Suburb[];
  selectedSuburb : Suburb;

  latitude :number;
  longitude :number;
  marker: AgmMarker;

  infoWindowLat:number;
  infoWindowLong:number;
  infoWindowIsOpen:boolean=false;
  infoWindowText:string;

  @ViewChildren("infoWindow") map;


  constructor(private suburbsService: SuburbsService, 
    private ngZone: NgZone) { 
  }

  ngOnInit() {
   
  }

  mapReady($event)
  {
    console.log('map ready');
  }

  onSuburbSelected(suburb){
    this.selectedSuburb = suburb;
    this.latitude = suburb.lat;
    this.longitude = suburb.lng;

    if(this.map!=null && this.map.lastOpen != null) 
    {
      this.map.lastOpen.close();
    }
  }

  markerClick(clickEvent, infoWindow) {
     this.infoWindowText = clickEvent.feature.getProperty('description');
     var position = clickEvent.feature.getGeometry();
     this.infoWindowLat=position.b.lat();
     this.infoWindowLong=position.b.lng();
     this.infoWindowIsOpen=true;
     infoWindow.open();
     this.map.lastOpen=infoWindow;
  }

  styleFunc(feature) {
      return ({
        clickable: true,
        label: feature.getProperty('label'),
        glyph: feature.getProperty('id') ,
        icon: feature.getProperty('icon')
     });
    }

    

    geoJsonObject: Object = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [  
              151.2055194,
              -33.8379982
            ]
          },
          "properties": {          
            "id":"1",
            "icon":{
              url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|ADDE63',
              },
              "description":"description 1"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [  
              151.206498,
              -33.8227708
            ]
          },
          "properties": {          
            "id":"2",
            "label": "L",
            "description":"description 2"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [  
              151.1768691,
              -33.8278162
            ]
          },
          "properties": {          
            "id":"3",
            "label": "L",
            "description":"description 3"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [  
              151.2095243,
              -33.8111782
            ]
          },
          "properties": {          
            "id":"4",
            "icon":{
              "url": 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|ADDE63'
              },
              "description":"description 4"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [  
              151.2112436,
              -33.8003322
            ]
          },
          "properties": {          
            "id":"4",
            "icon":{
              "url": 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|ADDE63'
              },
              "description":"description Onicaaaaaaa"
          }
        }
      ]
    };

  paths: Array<LatLngLiteral> = 
  [{"lat":-33.8436557,"lng":151.2107132},
  {"lat":-33.8431612,"lng":151.2103914},
  {"lat":-33.8429117,"lng":151.2102036},
  {"lat":-33.842524,"lng":151.2098281},
  {"lat":-33.842181,"lng":151.2094526},
  {"lat":-33.8419805,"lng":151.2091361},
  {"lat":-33.8419047,"lng":151.2088893},
  {"lat":-33.8418245,"lng":151.2082671},
  {"lat":-33.8416508,"lng":151.2082993},
  {"lat":-33.8415572,"lng":151.2077521},
  {"lat":-33.8414592,"lng":151.2077735},
  {"lat":-33.8414369,"lng":151.2075858},
  {"lat":-33.8413834,"lng":151.2075965},
  {"lat":-33.8412097,"lng":151.2064378},
  {"lat":-33.8427691,"lng":151.2061052},
  {"lat":-33.8426844,"lng":151.2054186},
  {"lat":-33.8426443,"lng":151.2052147},
  {"lat":-33.8425641,"lng":151.2051182},{"lat":-33.842524,"lng":151.2050431},{"lat":-33.8424617,"lng":151.2049197},
  {"lat":-33.8424193,"lng":151.2048124},{"lat":-33.8420763,"lng":151.2049519},{"lat":-33.841976,"lng":151.2045629},
  {"lat":-33.842299,"lng":151.2044744},{"lat":-33.8417243,"lng":151.2028329},{"lat":-33.8410849,"lng":151.2031709},
  {"lat":-33.8407641,"lng":151.2021677},{"lat":-33.8409668,"lng":151.2020738},{"lat":-33.8404299,"lng":151.2005504},
  {"lat":-33.8398262,"lng":151.2007166},{"lat":-33.8399777,"lng":151.2014596},{"lat":-33.8399264,"lng":151.2014717},
  {"lat":-33.839932,"lng":151.2014945},{"lat":-33.8398462,"lng":151.2015159},{"lat":-33.8398407,"lng":151.2014824},
  {"lat":-33.8397705,"lng":151.2014999},{"lat":-33.8397638,"lng":151.2014703},{"lat":-33.8396836,"lng":151.2014945},
  {"lat":-33.8396903,"lng":151.2015267},{"lat":-33.8393004,"lng":151.2016313},{"lat":-33.839287,"lng":151.201524},
  {"lat":-33.8391823,"lng":151.2015428},{"lat":-33.8392024,"lng":151.2016527},{"lat":-33.838935,"lng":151.2017252},
  {"lat":-33.8389016,"lng":151.2014918},{"lat":-33.8388014,"lng":151.2015133},{"lat":-33.8388392,"lng":151.2017842},
  {"lat":-33.838739,"lng":151.201811},{"lat":-33.8386967,"lng":151.2015428},{"lat":-33.8385608,"lng":151.2015776},
  {"lat":-33.8385986,"lng":151.2018271},{"lat":-33.8385051,"lng":151.2018459},{"lat":-33.8384605,"lng":151.2015964},
  {"lat":-33.8379503,"lng":151.2014516},{"lat":-33.8377364,"lng":151.2019585},{"lat":-33.8375359,"lng":151.2018915},
  {"lat":-33.8371906,"lng":151.2022536},{"lat":-33.8370658,"lng":151.2033184},{"lat":-33.8359073,"lng":151.2031119},
  {"lat":-33.835836,"lng":151.2035061},{"lat":-33.8353904,"lng":151.2033613},{"lat":-33.8354907,"lng":151.2025888},
  {"lat":-33.8345817,"lng":151.2023635},{"lat":-33.8343789,"lng":151.2033774},{"lat":-33.8339111,"lng":151.2032513},
  {"lat":-33.8336237,"lng":151.2046997},{"lat":-33.8334209,"lng":151.2046193},{"lat":-33.8329664,"lng":151.2044181},
  {"lat":-33.8323158,"lng":151.2041123},{"lat":-33.8324874,"lng":151.2035866},{"lat":-33.831458,"lng":151.2027471},
  {"lat":-33.8311505,"lng":151.2033184},{"lat":-33.831008,"lng":151.2037046},{"lat":-33.8303819,"lng":151.2034257},
  {"lat":-33.830344,"lng":151.2035517},{"lat":-33.8304576,"lng":151.2036108},{"lat":-33.8305022,"lng":151.2043323},
  {"lat":-33.8306403,"lng":151.2053944},{"lat":-33.8302749,"lng":151.2054695},{"lat":-33.8303574,"lng":151.2060408},
  {"lat":-33.8305,"lng":151.2060167},{"lat":-33.8305512,"lng":151.2063842},{"lat":-33.8301479,"lng":151.2064727},
  {"lat":-33.8301613,"lng":151.2065853},{"lat":-33.8290094,"lng":151.2068455},{"lat":-33.8289759,"lng":151.2066443},
  {"lat":-33.8285816,"lng":151.2067328},{"lat":-33.8287442,"lng":151.2078433},{"lat":-33.8289158,"lng":151.2089457},
  {"lat":-33.8284991,"lng":151.2090476},{"lat":-33.8285593,"lng":151.209584},{"lat":-33.8284612,"lng":151.2096028},
  {"lat":-33.8285214,"lng":151.2100025},{"lat":-33.8280691,"lng":151.2100963},{"lat":-33.8281315,"lng":151.2105496},
  {"lat":-33.8287509,"lng":151.2104236},{"lat":-33.8289225,"lng":151.2115072},{"lat":-33.8287932,"lng":151.2115313},
  {"lat":-33.8289358,"lng":151.2123896},{"lat":-33.8291118,"lng":151.2123467},{"lat":-33.8291497,"lng":151.2126042},
  {"lat":-33.8290272,"lng":151.2126337},{"lat":-33.8290539,"lng":151.2127812},{"lat":-33.8289514,"lng":151.2128027},
  {"lat":-33.8289871,"lng":151.213087},{"lat":-33.8295642,"lng":151.2129717},{"lat":-33.8298783,"lng":151.2148653}
  ,{"lat":-33.8302125,"lng":151.2147097},{"lat":-33.8308587,"lng":151.2142859},{"lat":-33.8316385,"lng":151.2136422},
  {"lat":-33.8323515,"lng":151.2130092},{"lat":-33.8331268,"lng":151.2125908},{"lat":-33.8338309,"lng":151.2122689},
  {"lat":-33.8348023,"lng":151.2118612},{"lat":-33.8356845,"lng":151.2116145},{"lat":-33.8367183,"lng":151.2114857},
  {"lat":-33.8382511,"lng":151.2113999},{"lat":-33.838612,"lng":151.211416},{"lat":-33.8387368,"lng":151.2123655},
  {"lat":-33.8383781,"lng":151.2124299},{"lat":-33.838416,"lng":151.2127973},{"lat":-33.8387189,"lng":151.2127517},{"lat":-33.8388081,"lng":151.2133123},{"lat":-33.838485,"lng":151.213374},{"lat":-33.8389061,"lng":151.2138353},{"lat":-33.8390487,"lng":151.213956},{"lat":-33.839414,"lng":151.2140392},{"lat":-33.8397571,"lng":151.2141143},{"lat":-33.8399844,"lng":151.2142752},{"lat":-33.8404656,"lng":151.2147366},{"lat":-33.8408042,"lng":151.2149458},{"lat":-33.8411317,"lng":151.2149753},{"lat":-33.8410626,"lng":151.2152086},{"lat":-33.8415149,"lng":151.2154983},{"lat":-33.8414102,"lng":151.2156485},{"lat":-33.8415795,"lng":151.2158953},{"lat":-33.8418357,"lng":151.2162359},{"lat":-33.8420429,"lng":151.216488},{"lat":-33.8421097,"lng":151.216649},{"lat":-33.8421854,"lng":151.2167858},{"lat":-33.8424038,"lng":151.2169842},{"lat":-33.8423815,"lng":151.2170298},{"lat":-33.8432458,"lng":151.2178157},{"lat":-33.8435666,"lng":151.2180518},{"lat":-33.8437315,"lng":151.2181591},{"lat":-33.8438785,"lng":151.218143},{"lat":-33.8440389,"lng":151.2182878},{"lat":-33.8445647,"lng":151.2185453},{"lat":-33.8447741,"lng":151.2186043},{"lat":-33.8450258,"lng":151.2186499},{"lat":-33.845175,"lng":151.2184916},{"lat":-33.8451149,"lng":151.2173356},{"lat":-33.8450926,"lng":151.2166919},{"lat":-33.8447518,"lng":151.2169118},{"lat":-33.8445201,"lng":151.2163915},{"lat":-33.8443686,"lng":151.2162574},{"lat":-33.8442906,"lng":151.2161313},{"lat":-33.8440968,"lng":151.2157182},{"lat":-33.8440211,"lng":151.2157746},{"lat":-33.8437337,"lng":151.2151711},{"lat":-33.8436669,"lng":151.2150933},{"lat":-33.8434597,"lng":151.2144469},{"lat":-33.843335,"lng":151.2145354},{"lat":-33.8432102,"lng":151.2142564},{"lat":-33.8433082,"lng":151.2141518},{"lat":-33.8428783,"lng":151.2136234},{"lat":-33.8433817,"lng":151.2128429},{"lat":-33.8432213,"lng":151.2125371},{"lat":-33.8427223,"lng":151.2127973},{"lat":-33.8425753,"lng":151.2125023},{"lat":-33.8424416,"lng":151.2121777},{"lat":-33.8423191,"lng":151.211424},{"lat":-33.8425374,"lng":151.2113355},{"lat":-33.8428738,"lng":151.2113838},
  {"lat":-33.8434307,"lng":151.2115581},{"lat":-33.8436402,"lng":151.2116466}];
  //"bounds":{"left":151.2005504,"bottom":-33.845175,"right":151.2186499,"top":-33.8280691,"centerLatLng":null}
}
