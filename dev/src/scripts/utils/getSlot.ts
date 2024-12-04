export const getSlot = <T extends Element>(
  parentClass: T,
  name: string
): HTMLSlotElement | null => {
  const slotElement = parentClass.querySelector(`slot[name="${name}"]`)
  const nameIsSlot = parentClass.querySelector(`[slot="${name}"]`)
  if (slotElement) {
    return slotElement as HTMLSlotElement
  } else if (nameIsSlot) {
    return nameIsSlot as HTMLSlotElement
  } else {
    return null
  }
}
