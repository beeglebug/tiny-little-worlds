import { Scene } from 'three/src/scenes/Scene'
import { Fog } from 'three/src/scenes/Fog'
import { Color } from 'three/src/math/Color'
import { AmbientLight } from 'three/src/lights/AmbientLight'

export default function createScene () {

  const scene = new Scene()
  scene.background = new Color('#000000')
  scene.fog = new Fog(scene.background, 0, 80)

  const light = new AmbientLight(new Color('#ffffff'))
  scene.add(light)

  return scene
}
