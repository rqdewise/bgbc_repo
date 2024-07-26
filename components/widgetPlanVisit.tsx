import React from 'react'
import { ArrowRight } from 'lucide-react' 

export default function WidgetPlanVisit() {
  return (
    <section id="plan_visit" className="bg-slate-800 py-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between p-10 text-white">
          <div>
            <h3 className="text-4xl mb-10 bolder">Church Assembly</h3>
            <h4 className="text-2xl">Sundays @ 10:30am</h4>
            <h4 className="text-2xl">Wed & Fri @ 9:00pm</h4>
            <h4 className="text-2xl">Edificio Hang Wan, Macau SAR China</h4>
          </div>
          <div className="mt-10">
            <button className="px-10 py-5 bg-sky-500 text-white hover:bg-sky-600">
            <span className='pr-5 mr-5 border-r-2 '>Plan Your Visit</span> <ArrowRight className=" inline-block"/>  
            </button>
          </div>
        </div>
    </section>
  )
}
