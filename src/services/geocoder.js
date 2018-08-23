

export const getLatLngFromAddress = (addr) => {
  const geocoder = new google.maps.Geocoder()
  return new Promise((resolve, reject) => {
    geocoder.geocode({
      address: addr
    }, (results, status) => {
      if (status != 'OK') {
        reject(new Error(`Unable to geoencode addr: ${addr}`))
        return
      }
  
      if (results.length === 0) {
        reject(new Error(`We cant find a lat/lon for this address: ${addr}`))
        return
      }
      resolve(results[0])
    })
  })
}