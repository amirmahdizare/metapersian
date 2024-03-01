import { MenuItemType } from "@/app/_types";
import participation from '@/app/_images/menuImages/participation.png'
import reporter from '@/app/_images/menuImages/reporter.png'
import citizen from '@/app/_images/menuImages/citizen-baguette.png'
import developer from '@/app/_images/menuImages/developer-baguette.png'
import inspector from '@/app/_images/menuImages/citizen-baguette.png'
import bussiness from '@/app/_images/menuImages/businessman-baguette.png'
import lawyer from '@/app/_images/menuImages/lawyer-baguette.png'
import cityCouncil from '@/app/_images/menuImages/city-council-baguette.png'
import mayor from '@/app/_images/menuImages/the-mayor-baguette.png'
import governer from '@/app/_images/menuImages/governor-baguette.png'
import miniester from '@/app/_images/menuImages/minister-baguette.png'

export const routes: Array<MenuItemType> = [
    {
        faTitle: 'شهروند',
        route:'citizen',
        img: citizen
    },
    {
        faTitle: 'خبرنگار',
        img: reporter,
        route:'reporter'
    },
    {
        faTitle:'مشارکت کننده',
        img:participation,
        route:'participation'
    },
    {
        faTitle:'توسعه دهنده',
        img:developer,
        route:'developer'
    }
    ,
    {
        faTitle:'بازرس',
        img:inspector,
        route:'inspector'
    },

    {
        faTitle:'تاجر',
        img:bussiness,
        route:'bussiness'
    },


    {
        faTitle:'وکیل',
        img:lawyer,
        route:'lawyer'
    },

    {
        faTitle:'شورای شهر',
        img:cityCouncil,
        route:'citycouncil'
    },

    {
        faTitle:'شهردار',
        img:mayor,
        route:'mayor'
    },


    {
        faTitle:'استاندار',
        img:governer,
        route:'governer'
    },

    {
        faTitle:'وزیر',
        img:miniester,
        route:'miniester'
    },

]