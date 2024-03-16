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

export type LevelSectionKey = 'general-info' | 'gem' | 'gift' | 'licenses' | 'prize'

export interface LeveLInfoType {
    id: number
    score: number
    description: string
    rank: number
    subcategories: number
    persian_font: string
    english_font: string
    file_volume: number
    used_colors: string
    points: number
    lines: number
    has_animation: number
    designer: string
    model_designer: string
    creation_date: string
}

export interface LevelLicenceType {
    id: number
    level_id: number
    create_union: number
    add_memeber_to_union: number
    observation_license: number
    gate_license: number
    lawyer_license: number
    city_counsile_entry: number
    establish_special_residential_property: number
    establish_property_on_surface: number
    judge_entry: number
    upload_image: number
    delete_image: number
    inter_level_general_points: number
    inter_level_special_points: number
    rent_out_satisfaction: number
    access_to_answer_questions_unit: number
    create_challenge_questions: number
    upload_music: number
}

export interface LevelPricesType {
    id: number
    level_id: number
    psc: number
    yellow: number
    blue: number
    red: number
    effect: number
    satisfaction: number
}

export interface LevelGemType {
    id: number
    level_id: number
    name: string
    description: string
    thread: string
    points: number
    volume: string
    color: string
    has_animation: number
    lines: number
    png_file: string
    fbx_file: string
    encryption: number
    designer: string
}