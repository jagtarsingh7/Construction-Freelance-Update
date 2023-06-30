import { IParallax } from "@react-spring/parallax";
import { ReactNode } from "react";

export interface IScrollButtonProp {
  to: number,
  page:  React.MutableRefObject<IParallax >
}

export interface IViewDetectAnimationProp {
  direction: string,
  children: ReactNode | ReactNode[],
  styles: string,
  speed: number,
  level: number,
  to:number,
  repeat: boolean,
}

export interface IBannerProp {
  parallaxEffect: boolean,
  heading: string,
  subHeading: string,
  direction1: string,
  direction2: string,
  speed1: number,
  speed2: number,
  level1: number,
  level2: number,
  backgroundImageName:string,
  extraLayer:boolean,
  children: ReactNode | ReactNode[],
}
export interface ICountUp{

 end:number,
 duration:number

}


export interface IMyContext{
  setSubHead:any,
  subHead:any
}

export interface IScrollButtonProp {
  to: number,
  page:  React.MutableRefObject<IParallax >,
  parallaxEffect:boolean,
  target:React.RefObject<HTMLDivElement>
}
