// import React, { useEffect, useState } from 'react'
// import { Slide } from '../Slide/Slide'
// import { TextBlock } from '../Block/TextBlock/TextBlock'
// import { GraphicObject } from '../Block/GraphicObject/GraphicObject'
// import { ImageBlock } from '../Block/ImageBlock/ImageBlock'
// import slideData from './slides.json'
//
// interface SlideData {
//   id: number
//   background: string
//   objects: JSX.Element[]
// }
//
// const SlidesDatas = () => {
//   const slides = slideData
//   const generateSlide = (slide: SlideData, index: number, array: SlideData[]) => {
//     const { id, background, objects } = slide;
//
//     const slideObjects = objects.map((object, objIndex) => {
//       const { type, id, coordinatesX, coordinatesY, ...props } = object.props;
//
//       switch (type) {
//         case 'TextBlock':
//           return (
//               <TextBlock
//                   key={objIndex}
//                   type={type}
//                   id={id}
//                   coordinatesX={coordinatesX}
//                   coordinatesY={coordinatesY}
//                   {...props}
//               />
//           );
//         case 'GraphicObject':
//           return (
//               <GraphicObject
//                   key={objIndex}
//                   type={type}
//                   id={id}
//                   coordinatesX={coordinatesX}
//                   coordinatesY={coordinatesY}
//                   {...props}
//               />
//           );
//         case 'ImageBlock':
//           return (
//               <ImageBlock
//                   key={objIndex}
//                   type={type}
//                   id={id}
//                   coordinatesX={coordinatesX}
//                   coordinatesY={coordinatesY}
//                   {...props}
//               />
//           );
//         default:
//           return null;
//       }
//     });
//
//     return <Slide key={id} id={id} background={background} objects={slideObjects} />;
//   };
//
//   return slides.map(generateSlide);
//
// }
//
// export { SlidesDatas }
