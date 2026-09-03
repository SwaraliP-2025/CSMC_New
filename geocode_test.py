import json
import urllib.parse
import urllib.request
from pathlib import Path

viewbox = ",".join(["74.95", "19.6", "75.7", "20.05"])

def geocode(query: str):
    q = urllib.parse.quote_plus(query + ", Chhatrapati Sambhajinagar, Maharashtra, India")
    url = f"https://nominatim.openstreetmap.org/search?q={q}&format=json&limit=5&countrycodes=in&viewbox={viewbox}&bounded=1"
    req = urllib.request.Request(url, headers={"User-Agent": "WardMapTest/1.0", "Accept-Language": "en"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

for address in ["samarth nagar", "nirala bazar road", "mavdi road", "shivaji road aurangabad", "cantonment aurangabad"]:
    print(f"\nADDRESS: {address}")
    try:
        results = geocode(address)
    except Exception as err:
        print("GEOCODE ERROR", err)
        continue
    if not results:
        print("No results")
        continue
    for i, r in enumerate(results[:3], start=1):
        print(i, r.get("display_name"), r.get("lat"), r.get("lon"), r.get("class"), r.get("type"))
