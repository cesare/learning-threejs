import * as THREE from "three"

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas")
  if (canvas == null) {
    console.error("canvas missing")
    return
  }

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 1, 10000)
  camera.position.set(0, 0, 1000)

  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  canvas.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(500, 500, 500)
  const material = new THREE.MeshStandardMaterial({
    color: 0x0000ff
  })
  const box = new THREE.Mesh(geometry, material)
  scene.add(box)

  const light = new THREE.DirectionalLight(0xffffff)
  light.intensity = 2;
  light.position.set(1, 1, 1)
  scene.add(light)

  const update = () => {
    requestAnimationFrame(update)

    box.rotation.x += 0.01
    box.rotation.y += 0.01

    renderer.render(scene, camera)
  }
  update()
})
