"use client"
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function widgetServices() {
  return (
    <section id="services" className="text-gray-950 py-20 gap-7">
      <div className="container mx-auto ">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-6/12 px-7 md:px-4 mr-auto">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-sky-500 text-white">
                <Image 
                  src="/images/herobanner.jpg"
                  alt='bgbc congregation'
                  width={500}
                  height={500}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-32 -top-32"
                  >
                    <polygon
                    points="-30,95 583,95 583,65"
                    className="text-sky-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  At Bordergate, you will find a warm and friendly atmosphere, uplifting music, and helpful Bible teaching and preaching
                  </p>
                  </blockquote>
                  <div className="flex items-start mb-10 pl-8 text-base font-light transition-all delay-150">
                    <Link 
                        href="/time-location"
                        className="group border-2 border-white/90 p-2 rounded-sm hover:bg-sky-600"
                    >
                        Learn More 
                      <ArrowRight className="group-hover:ml-4 ml-2 inline-block"/>
                    </Link>
                  </div>
              </div>
          </div>
					<div className="w-full md:w-5/12 px-4 flex flex-col">
						<div className="text-md my-4  text-gray-950">
							<h3 className="text-xl text-gray-950 mt-2">
								Sunday Worship Services
							</h3>
							<p className="text-gray-950">
								<strong className="text-sky-500">10:30am</strong> Sunday Morning Worship. This service offers nursery facilities and Junior Church for those aged 4 through 4th grade. Youth class starts at 11:30 am.
							</p>
							<p className="text-gray-950">
								<strong className="text-sky-500">4:00pm</strong> Sunday Afternoon Worship Service.
							</p>
						</div>

						<div className="text-md my-4 text-gray-950">
							<h3 className="text-xl text-gray-950 mt-2">
									Weekdays Services
							</h3>
							<h5 className="text-gray-950 py-1">Wednesday Prayer Meeting :</h5>
							<p className="text-gray-950">
									<strong className="text-sky-500">9:00pm</strong> Sunday Morning Worship. This service offers nursery facilities and Junior Church for those aged 4 through 4th grade. Youth class starts at 11:30 am.
							</p>
							<h5 className="text-gray-950 py-1">Wednesday Prayer Vigil :</h5>
							<p className="text-gray-950">
									<strong className="text-sky-500">9:00pm </strong> Sunday Afternoon Worship Service.
							</p>
						</div>

						<div className="text-md my-4  text-gray-950">
							<h3 className="text-xl  text-gray-950 mt-2">
									Adult Sunday School
							</h3>
							<p className="text-gray-950">
									<strong className="text-sky-500">2:00pm</strong> 
							</p>
						</div>

						<div className="text-md my-4  text-gray-950">
							<h3 className="text-xl mt-2 text-gray-950">
									Online Bible Study
							</h3>
							<p className="text-gray-950">
								<strong className="text-sky-500">Every Evening Tuesday</strong> Message us to join our online bible study
							</p>
						</div>
					</div>
        </div>
      </div>
    </section>
  )
}