import { IoBarbell, IoBicycleSharp } from 'react-icons/io5'
import { FaWeight } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'
import { AiFillSafetyCertificate } from 'react-icons/ai'

export const serviceData = [
    {
        info: 'Premium gym equipment',
        icon: <IoBarbell className='icon'/>
    },
    {
        info: 'Cardio area',
        icon: <IoBicycleSharp className='icon'/>
    },
    {
        info: 'Body weight loss trainings',
        icon: <FaWeight className='icon'/>
    },
    {
        info: 'Large working are',
        icon: <BiArea className='icon'/>
    },
    {
        info: 'Professional trainers',
        icon: <AiFillSafetyCertificate className='icon'/>
    }
]