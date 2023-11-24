import { useState, useCallback } from 'react'

const useDraggable = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseDown = useCallback(
    (e: { preventDefault: () => void; clientX: number; clientY: number }) => {
      e.preventDefault() // Prevent default behavior (including text selection)
      setIsDragging(true)
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    },
    [position.x, position.y],
  )

  const onMouseMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      if (!isDragging) return
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      })
    },
    [isDragging, offset.x, offset.y],
  )

  const onMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  return {
    position,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  }
}

export default useDraggable
