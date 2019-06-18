export default function parseDialogue (dialogue) {
  return dialogue.split('\n\n').filter(Boolean)
}
