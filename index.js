/* global L */
;(function (window) {
  function init (mapid) {
    var minZoom = 1
    var maxZoom = 7
    var img = [
      32768, // original width of image `karta.jpg`
      32768  // original height of image
    ]

    // create the map
    var map = L.map(mapid, {
      minZoom: minZoom,
      maxZoom: maxZoom
    })

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img)

    // set the view on a marker ...
    map.setView(rc.unproject([16384, 16384]), 2)

    // the tile layer containing the image generated with gdal2tiles --leaflet ...
    L.tileLayer('./tiles/{z}/{x}/{y}.jpg', {
      noWrap: true,
      attribution: 'Project by <a href="http://subject.space">Logan Williams</a>.'
    }).addTo(map)
  }
  
  init('map')
}(window))
