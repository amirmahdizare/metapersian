import { MenuItemType } from "@types";
import home from '@images/menuImages/home.png'
import participation from '@images/menuImages/participation.png'
import reporter from '@images/menuImages/reporter.png'
import citizen from '@images/menuImages/citizen-baguette.png'
import developer from '@images/menuImages/developer-baguette.png'
import inspector from '@images/menuImages/citizen-baguette.png'
import bussiness from '@images/menuImages/businessman-baguette.png'
import lawyer from '@images/menuImages/lawyer-baguette.png'
import cityCouncil from '@images/menuImages/city-council-baguette.png'
import mayor from '@images/menuImages/the-mayor-baguette.png'
import governer from '@images/menuImages/governor-baguette.png'
import miniester from '@images/menuImages/minister-baguette.png'

export const routes: Array<MenuItemType> = [
    {
        faTitle: 'صفحه نخست',
        route:'home',
        img: home
    },
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