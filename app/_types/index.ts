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

export type pageProps<PT = {}, SP = {}> = {
    params: {
        [Property in keyof PT]: PT[Property];
    },
    searchParams: {
        [Property in keyof SP]: SP[Property];
    }
}

export type LevelPageProps = pageProps<{ params: [string, 'info' | 'gift' | 'permissions' | 'reward' | 'gem'] }>

export interface LevelItemType {
    id: string,
    name: string,
    slug: string,
    image: string,
    background_image: string,
    png_file: string,
    fbx_file: string,
    gif_file: string,
    description: string
}