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
        img: citizen
    },
    {
        faTitle: 'خبرنگار',
        img: reporter
    },
    {
        faTitle:'مشارکت کننده',
        img:participation
    },
    {
        faTitle:'توسعه دهنده',
        img:developer
    }
    ,
    {
        faTitle:'بازرس',
        img:inspector
    },

    {
        faTitle:'تاجر',
        img:bussiness
    },


    {
        faTitle:'وکیل',
        img:lawyer
    },

    {
        faTitle:'شورای شهر',
        img:cityCouncil
    },

    {
        faTitle:'شهردار',
        img:mayor
    },


    {
        faTitle:'استاندار',
        img:governer
    },

    {
        faTitle:'وزیر',
        img:miniester
    },

]