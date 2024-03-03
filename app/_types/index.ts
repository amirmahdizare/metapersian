import { StaticImageData } from "next/image";

export interface MenuItemType {
    faTitle: string,
    img: StaticImageData,
    route: string
}

export interface FooterSymbolType {
    img: StaticImageData,
    link: string
}

export interface FeatureType {
    img: StaticImageData,
    title: string,
    description: string
}

export interface FooterLogoType {
    img: StaticImageData,
    link: string
}