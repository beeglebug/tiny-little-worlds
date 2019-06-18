export default function parseDialogue (dialogue) {
  return dialogue.split('\n').filter(Boolean)
}
