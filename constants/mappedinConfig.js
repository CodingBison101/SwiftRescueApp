// Optimized options for mobile devices
const options = {
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
  venue: 'mappedin-demo-mall',
  perspective: 'Website',
  // Mobile optimizations
  antialias: Platform.OS === 'Android', // Enable only on iOS for performance
  backgroundColor: '#FFFFFF',
  maxHorizontalFov: 120,
  gestureMaxZoom: 3,
  gestureMinZoom: 0.5,
  floorFilterEnabled: true
};