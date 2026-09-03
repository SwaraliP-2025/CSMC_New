const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
async function test(address) {
  const viewbox = [74.95, 19.6, 75.7, 20.05].join(',');
  const urls = [
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=5&countrycodes=in&viewbox=${viewbox}&bounded=1`,
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address + ', Chhatrapati Sambhajinagar, Maharashtra, India')}&format=json&limit=5&countrycodes=in&viewbox=${viewbox}&bounded=1`,
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address + ', Aurangabad, Maharashtra, India')}&format=json&limit=5&countrycodes=in&viewbox=${viewbox}&bounded=1`,
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=5&countrycodes=in`,
  ];
  for (const url of urls) {
    const resp = await fetch(url, { headers: { 'Accept-Language': 'en' } });
    const data = await resp.json();
    console.log('URL:', url);
    console.log('RESULTS:', data.slice(0, 3).map((r) => ({ display_name: r.display_name, lat: r.lat, lon: r.lon, class: r.class, type: r.type })));
    if (Array.isArray(data) && data.length) break;
  }
}
(async () => {
  await test('samarth nagar');
  await test('nirala bazar road');
})();
