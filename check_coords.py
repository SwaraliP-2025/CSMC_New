import json
from pathlib import Path

with Path('public/data/wards.json').open('r', encoding='utf-8') as f:
    wards = json.load(f)

# Coordinates returned by sample search results
points = [
    (75.3236915, 19.8772446),
    (75.3259191, 19.8783378),
    (75.3167262, 19.8724841),
    (75.3104977, 19.8614086),
]


def point_in_ring(point, ring):
    px, py = point
    inside = False
    j = len(ring) - 1
    for i in range(len(ring)):
        xi, yi = ring[i]
        xj, yj = ring[j]
        if ((yi > py) != (yj > py)) and (px < (xj - xi) * (py - yi) / (yj - yi) + xi):
            inside = not inside
        j = i
    return inside


def point_in_polygon(point, coords):
    if not coords:
        return False
    if not point_in_ring(point, coords[0]):
        return False
    for hole in coords[1:]:
        if point_in_ring(point, hole):
            return False
    return True


def point_in_feature(point, feature):
    geom = feature['geometry']
    if geom['type'] == 'Polygon':
        return point_in_polygon(point, geom['coordinates'])
    return any(point_in_polygon(point, poly) for poly in geom['coordinates'])

for pt in points:
    found = False
    for feature in wards['features']:
        if point_in_feature(pt, feature):
            print('POINT', pt, 'INSIDE ward', feature['properties']['ward_name'], 'zone', feature['properties']['zone_name'])
            found = True
            break
    if not found:
        print('POINT', pt, 'OUTSIDE all ward polygons')
