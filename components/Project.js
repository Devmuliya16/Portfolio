import Link from 'next/link'
import {HiArrowRight} from 'react-icons/hi'
import {BiLinkExternal} from 'react-icons/bi'
import React from 'react'

function Project({ data, id }) {
    return (<>

        <div className="w-full m-2 bg-gray-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="#" className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                <img src={data.image}/>
                            </a>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-lg flex items-center justify-center bg-white/50 dark:bg-slate-900 p-4 rounded shadow dark:shadow-gray-700">
                                <a href={data.Link} target='_blank' className="underline text-lg transition duration-500 font-medium">{data.title}  <BiLinkExternal className='inline-block fill-black dark:fill-white'/></a>
                            </div>
                        </div>
            
            <div className="p-5">
              
                    <h5 className="mb-2 text-2xl font-medium tracking-tight">{data.title}</h5>
                {
                    data.technology.map((tech)=><button className='m-1 p-1 border-[1px]  items-center text-sm rounded-lg '>
                        <img src={tech[0]} width={20} className='inline-block mr-2'/>
                        {tech[1]}</button>)
                }
                <p className="m-2 font-normal text-gray-700 dark:text-gray-400">{data.about}</p>
                <Link href={`/project/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  rounded-lg hover:bg-blue-900">
                    Read more
                    <HiArrowRight className='fill-white'/>
                </Link>
            </div>
        </div>

    </>



    )
}

export default Project