import { AmbientLight, Color, Fog, Scene } from 'three'

export default function createScene () {

  const scene = new Scene()
  scene.background = new Color('#ffffff')
  scene.fog = new Fog(scene.background, 0, 100)

  const light = new AmbientLight(new Color('#ffffff'))
  scene.add(light)

  return scene
}
