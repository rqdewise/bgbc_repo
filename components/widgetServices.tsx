"use client"
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, CalendarDays, Monitor } from 'lucide-react'

const serviceGroups = [
  {
    icon: <CalendarDays className="w-5 h-5 text-sky-500" />,
    day: "Sunday",
    items: [
      {
        time: "10:30 AM",
        name: "Morning Worship Service",
        note: "Nursery & Junior Church available (ages 4 – 4th grade). Youth class at 11:30 AM.",
      },
      {
        time: "2:00 PM",
        name: "Adult Sunday School",
        note: "In-depth Bible study for adults.",
      },
      {
        time: "4:00 PM",
        name: "Afternoon Worship Service",
        note: "",
      },
    ],
  },
  {
    icon: <Clock className="w-5 h-5 text-sky-500" />,
    day: "Wednesday",
    items: [
      {
        time: "9:00 PM",
        name: "Prayer Meeting",
        note: "Mid-week gathering for prayer and fellowship.",
      },
    ],
  },
  {
    icon: <Clock className="w-5 h-5 text-sky-500" />,
    day: "Friday",
    items: [
      {
        time: "9:00 PM",
        name: "Prayer Vigil",
        note: "Extended intercessory prayer time.",
      },
    ],
  },
  {
    icon: <Monitor className="w-5 h-5 text-sky-500" />,
    day: "Tuesday (Online)",
    items: [
      {
        time: "Every Evening",
        name: "Online Bible Study",
        note: "Contact us on Facebook.",
      },
    ],
  },
]

export default function WidgetServices() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Image card */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/herobanner.jpg"
                alt="BGBC Congregation in worship"
                width={600}
                height={450}
                className="w-full h-[380px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-0 left-0 right-0 bg-sky-500 px-7 py-6">
                <h4 className="text-xl font-bold text-white">Welcome to Our Services</h4>
                <p className="text-sky-100 text-sm mt-1 leading-relaxed">
                  A warm, friendly atmosphere with uplifting music and faithful Bible preaching.
                </p>
                <Link
                  href="/time-location"
                  className="mt-4 inline-flex items-center gap-2 border-2 border-white/70 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                >
                  Full Schedule <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Service Times</h2>
              <p className="text-slate-500 mt-2">
                All services are held at{" "}
                <span className="font-medium text-slate-700">
                  No. 12 Rua do S. Jose, Macau SAR China
                </span>
              </p>
            </div>

            {serviceGroups.map((group) => (
              <div key={group.day}>
                <div className="flex items-center gap-2 mb-3">
                  {group.icon}
                  <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide">
                    {group.day}
                  </h3>
                </div>
                <div className="space-y-3 pl-1">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100"
                    >
                      <span className="flex-shrink-0 text-sky-500 font-bold text-sm min-w-[100px]">
                        {item.time}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                        {item.note && (
                          <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
