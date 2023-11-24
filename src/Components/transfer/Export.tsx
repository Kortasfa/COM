import { SlideType } from "../Slide/Slide";

export const exportSlidesToJson = (slidesData: React.JSX.Element[]) => {
  // const slidesArray: SlideType[] = slidesData.map((slide, index) => {
  //   const { id, background, objects } = slide.props as { id: number; background: string; objects?: JSX.Element[] }
  //   return {
  //     id,
  //     background,
  //     objects,
  //   }
  // })

  const jsonString = JSON.stringify(slidesData, null, 2);

  const blob = new Blob([jsonString], { type: "application/json" });

  const a = document.createElement("a");
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = "slides.json";

  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);

  window.URL.revokeObjectURL(url);
};
