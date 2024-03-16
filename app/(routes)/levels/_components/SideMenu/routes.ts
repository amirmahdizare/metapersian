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
import judge from '@images/menuImages/judge-baguette.png'
import legister from '@images/menuImages/legislator-baguette.png'

export const routes: Array<MenuItemType> = [
    {
        faTitle: 'صفحه نخست',
        route:'/',
        img: home,
        id:0
    },
    {
        faTitle: 'شهروند',
        route:'citizen',
        img: citizen,
        id:1
    },
    {
        faTitle: 'خبرنگار',
        img: reporter,
        route:'reporter',
        id:2
    },
    {
        faTitle:'مشارکت کننده',
        img:participation,
        route:'participation',
        id:3
    },
    {
        faTitle:'توسعه دهنده',
        img:developer,
        route:'developer',
        id:4
    }
    ,
    {
        faTitle:'بازرس',
        img:inspector,
        route:'inspector',
        id:5
    },

    {
        faTitle:'تاجر',
        img:bussiness,
        route:'bussiness',
        id:6
    },


    {
        faTitle:'وکیل',
        img:lawyer,
        route:'lawyer',
        id:7
    },

    {
        faTitle:'شورای شهر',
        img:cityCouncil,
        route:'citycouncil',
        id:8
    },

    {
        faTitle:'شهردار',
        img:mayor,
        route:'mayor',
        id:9
    },


    {
        faTitle:'استاندار',
        img:governer,
        route:'governer',
        id:10
    },

    {
        faTitle:'وزیر',
        img:miniester,
        route:'miniester',
        id:11
    },

    {
        faTitle:'قاضی',
        img:judge,
        route:'judge',
        id:12
    },

    {
        faTitle:'وزیر',
        img:legister,
        route:'legister',
        id:13
    },

]