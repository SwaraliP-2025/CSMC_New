const fs = require('fs');
const proj4 = require('proj4');
const wards = JSON.parse(fs.readFileSync('public/data/wards.json','utf8'));
const UTM43N = '+proj=utm +zone=43 +datum=WGS84 +units=m +no_defs +type=crs';
const WGS84 = '+proj=longlat +datum=WGS84 +no_defs +type=crs';
function reprojectCoords(coords) {
  if (typeof coords[0] === 'number') return proj4(UTM43N, WGS84, coords);
  return coords.map(reprojectCoords);
}
function pointInRing(point, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    const intersects = (yi > point.lat) !== (yj > point.lat) && point.lng < ((xj - xi) * (point.lat - yi)) / (yj - yi) + xi;
    if (intersects) inside = !inside;
  }
  return inside;
}
function pointInPolygon(point, coordinates) {
  if (!coordinates.length) return false;
  if (!pointInRing(point, coordinates[0])) return false;
  for (let i = 1; i < coordinates.length; i += 1) {
    if (pointInRing(point, coordinates[i])) return false;
  }
  return true;
}
function isPointInFeature(point, feature) {
  const geom = feature.geometry;
  if (geom.type === 'Polygon') return pointInPolygon(point, geom.coordinates);
  return geom.coordinates.some((polygon) => pointInPolygon(point, polygon));
}
const reprojected = {
  ...wards,
  features: wards.features.map((feature) => ({
    ...feature,
    geometry: {
      ...feature.geometry,
      coordinates: reprojectCoords(feature.geometry.coordinates),
    },
  })),
};
const testPoints = [
  { lat: 19.8768, lng: 75.3430 },
  { lat: 19.8760, lng: 75.3300 },
  { lat: 19.8800, lng: 75.3500 },
];
console.log('Total features', reprojected.features.length);
for (const p of testPoints) {
  let found = false;
  for (const feature of reprojected.features) {
    if (isPointInFeature(p, feature)) {
      console.log('POINT', p, 'FOUND', feature.properties.ward_name, feature.properties.zone_name, feature.properties.ward_no);
      found = true;
      break;
    }
  }
  console.log('POINT', p, 'FOUND?', found);
}
