
  var trim = function(number) {
    return number ? number.toFixed(1) : '-'
  }

  var accelerationX = document.getElementById('dm-acceleration-x')
  var accelerationY = document.getElementById('dm-acceleration-y')
  var accelerationZ = document.getElementById('dm-acceleration-z')

  var accelerationGravityX = document.getElementById('dm-acceleration-gravity-x')
  var accelerationGravityY = document.getElementById('dm-acceleration-gravity-y')
  var accelerationGravityZ = document.getElementById('dm-acceleration-gravity-z')

  var rotationRateAlpha = document.getElementById('dm-rotation-rate-alpha')
  var rotationRateBeta = document.getElementById('dm-rotation-rate-beta')
  var rotationRateGamma = document.getElementById('dm-rotation-rate-gamma')

  var orientationAlpha = document.getElementById('do-alpha')
  var orientationBeta = document.getElementById('do-beta')
  var orientationGamma = document.getElementById('do-gamma')
  var orientationCompass = document.getElementById('do-compass-heading')

  window.addEventListener('devicemotion', function(e) {
    accelerationX.textContent = trim(e.acceleration.x)
    accelerationY.textContent = trim(e.acceleration.y)
    accelerationZ.textContent = trim(e.acceleration.z)

    accelerationGravityX.textContent = trim(e.accelerationIncludingGravity.x)
    accelerationGravityY.textContent = trim(e.accelerationIncludingGravity.y)
    accelerationGravityZ.textContent = trim(e.accelerationIncludingGravity.z)

    rotationRateAlpha.textContent = trim(e.rotationRate.alpha)
    rotationRateBeta.textContent = trim(e.rotationRate.beta)
    rotationRateGamma.textContent = trim(e.rotationRate.gamma)
  })

  window.addEventListener('deviceorientation', function(e) {
    orientationAlpha.textContent = trim(e.alpha)
    orientationBeta.textContent = trim(e.beta)
    orientationGamma.textContent = trim(e.gamma)
    orientationCompass.textContent = trim(e.webkitCompassHeading)
  })
