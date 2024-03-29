import { FeatureType } from "@/app/_types";
import coin from '@images/vectors/coin.png'
import goal from '@images/vectors/goal.png'
import lamp from '@images/vectors/lamp.png'
import rocket from '@images/vectors/rocket.png'


export const features: Array<FeatureType> = [

    {
        img: coin,
        description: 'لیستی از درآمد های حاصله بر اساس عناوین و مشتریان',
        title: 'درآمد'
    },
    {
        img: goal,
        description: 'سفارشات لیستی از سفارشات ثبت شده با قابلیت جذب توسط دارندگان سطح خبرنگار',
        title: 'سفارشات'
    },

    {
        img: lamp,
        description: 'ثبت انتقادات و پیشنهادات شهروندان در خصوص عملکرد و قابلیت ها',
        title: 'توسعه'
    },

    {
        img: rocket,
        description: 'تصمیمات گرفته شده به منظور بهبود عملکرد سطح خبرنگار',
        title: 'بروزرسانی'
    },

]