import { IParallax } from "@react-spring/parallax";
import { ReactNode } from "react";

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
  heading: string |null,
  subHeading: string | null,
  direction1: string,
  direction2: string,
  speed1: number,
  speed2: number,
  level1: number,
  level2: number,
  customCss1: string | null,
  customCss2: string | null,
  customCssOuter:string | null,
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
  page?:  React.MutableRefObject<IParallax > | null
  parallaxEffect:boolean,
  target?:React.RefObject<HTMLDivElement> | null,
  customCss:string | null
}

export interface IFeatureCardsProp {
 absolutePosition:boolean
}
