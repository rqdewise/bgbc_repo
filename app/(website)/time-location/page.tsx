import { PageHeader } from "@/components/page-header"
import Container from "@/components/container"
import { GoogleMap } from "@/components/googlemap"
import { Clock, MapPin, Calendar, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Times & Location – Bordergate Baptist Church",
  description: "Service times and location for Bordergate Baptist Church in Macau SAR China.",
}

const schedules = [
  {
    day: "Sunday",
    services: [
      { time: "10:30 AM", name: "Morning Worship Service", note: "Nursery & Junior Church available (ages 4 – 4th grade). Youth class at 11:30 AM." },
      { time: "2:00 PM",  name: "Adult Sunday School",     note: "In-depth Bible study for adults." },
      { time: "4:00 PM",  name: "Afternoon Worship Service", note: "" },
    ],
  },
  {
    day: "Wednesday",
    services: [
      { time: "9:00 PM", name: "Prayer Meeting", note: "Mid-week gathering for prayer and encouragement." },
    ],
  },
  {
    day: "Friday",
    services: [
      { time: "9:00 PM", name: "Prayer Vigil", note: "Extended time of intercessory prayer." },
    ],
  },
  {
    day: "Tuesday (Online)",
    services: [
      { time: "Every Evening", name: "Online Bible Study", note: "Message us on Facebook to join the Zoom Bible study." },
    ],
  },
]

export default function TimeLocationPage() {
  return (
    <>
      <PageHeader
        image="/images/herobanner.jpg"
        title="Times & Location"
        description="We would love to have you worship with us"
      />

      <Container className="py-16">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Service Schedule */}
          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-sky-500 rounded-full p-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-slate-800">Service Schedule</h2>
                <p className="text-slate-500 mt-1">All are welcome to join us in worship</p>
              </div>
            </div>

            <div className="space-y-8">
              {schedules.map((group) => (
                <div key={group.day} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="bg-slate-800 px-6 py-4">
                    <h3 className="text-lg font-bold text-white tracking-wide uppercase flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-400" /> {group.day}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {group.services.map((s) => (
                      <div key={s.name} className="flex items-start gap-6 px-6 py-5">
                        <span className="flex-shrink-0 text-sky-500 font-bold text-base min-w-[110px]">
                          {s.time}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800">{s.name}</p>
                          {s.note && <p className="text-slate-500 text-sm mt-1">{s.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Location */}
          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-sky-500 rounded-full p-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-slate-800">Find Us</h2>
                <p className="text-slate-500 mt-1">Bordergate Baptist Church, Macau SAR China</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <MapPin className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Address</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    No. 12 Rua do S. Jose,<br />
                    Edificio Hang Wan R/C,<br />
                    Macau SAR China
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <Phone className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Phone</p>
                  <a href="tel:+85328782305" className="text-slate-600 text-sm hover:text-sky-500 transition-colors">
                    +853 2878 2305
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <Mail className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800 mb-1">Email</p>
                  <a href="mailto:bdgate@macau.ctm.net" className="text-slate-600 text-sm hover:text-sky-500 transition-colors">
                    bdgate@macau.ctm.net
                  </a>
                </div>
              </div>
            </div>

            <GoogleMap churchname="Bordergate Baptist Church" />
          </section>

          {/* Plan Your Visit CTA */}
          <section className="bg-sky-500 rounded-2xl px-8 py-12 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Planning Your First Visit?</h3>
            <p className="text-sky-100 text-lg mb-6 max-w-xl mx-auto">
              We are a friendly church and we would love to meet you. Come as you are — our doors
              are always open. Feel free to contact us if you have any questions before you visit.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-sky-600 font-bold px-8 py-3 rounded-lg hover:bg-sky-50 transition-colors shadow-md"
            >
              Get In Touch
            </a>
          </section>

        </div>
      </Container>
    </>
  )
}
