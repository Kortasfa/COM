export const exportSlidesToJson = (slidesData: React.JSX.Element[]) => {
  const jsonString = JSON.stringify(slidesData, null, 2)

  const blob = new Blob([jsonString], { type: 'application/json' })

  const a = document.createElement('a')
  const url = window.URL.createObjectURL(blob)
  a.href = url
  a.download = 'slides.json'

  document.body.appendChild(a)
  a.click()

  document.body.removeChild(a)

  window.URL.revokeObjectURL(url)
}
