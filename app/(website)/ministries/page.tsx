import { PageHeader } from "@/components/page-header"
import Container from "@/components/container"
import { BookOpen, Users, Baby, Heart, Globe, Monitor } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Ministries – Bordergate Baptist Church",
  description: "Explore the ministries and fellowship groups at Bordergate Baptist Church in Macau SAR China.",
}

const ministries = [
  {
    icon: <BookOpen className="w-8 h-8 text-sky-500" />,
    title: "Adult Sunday School",
    schedule: "Sundays at 2:00 PM",
    description:
      "Our Adult Sunday School provides in-depth Bible study for men and women. We work through books of the Bible systematically, applying God's Word to everyday life. All are welcome — from new believers to long-time Christians.",
    tag: "Weekly",
  },
  {
    icon: <Baby className="w-8 h-8 text-sky-500" />,
    title: "Children's Sunday School",
    schedule: "Sundays during Morning Worship",
    description:
      "We are committed to raising the next generation in the nurture and admonition of the Lord. Our Children's Sunday School uses age-appropriate Bible lessons, stories, and activities to help children understand and love God's Word.",
    tag: "Weekly",
  },
  {
    icon: <Heart className="w-8 h-8 text-sky-500" />,
    title: "Ladies Fellowship",
    schedule: "Monthly",
    description:
      "The Ladies Fellowship of BGBC is a place where women of all ages gather to encourage one another in the Lord. Through Bible study, prayer, and fellowship, the ladies of BGBC grow together in faith and service.",
    tag: "Monthly",
  },
  {
    icon: <Users className="w-8 h-8 text-sky-500" />,
    title: "Training Men for Ministry",
    schedule: "Ongoing",
    description:
      "We believe God calls men to lead in the home and in the church. Our men's discipleship program trains and equips men through Scripture, mentorship, and hands-on ministry experience to serve God faithfully.",
    tag: "Ongoing",
  },
  {
    icon: <Monitor className="w-8 h-8 text-sky-500" />,
    title: "Online Bible Study",
    schedule: "Every Tuesday Evening",
    description:
      "Can't be with us in person? Join our online Bible study every Tuesday evening via Zoom. We open the Scriptures together, ask questions, and grow in the knowledge of God. Message us on Facebook to receive the link.",
    tag: "Weekly",
  },
  {
    icon: <Globe className="w-8 h-8 text-sky-500" />,
    title: "Missions & Outreach",
    schedule: "Ongoing",
    description:
      "Our mission verse is Matthew 28:19-20. We actively support missionary work and local outreach efforts in Macau and beyond. We believe every Christian is called to be a witness for Christ wherever God has placed them.",
    tag: "Ongoing",
  },
]

const tagColors: Record<string, string> = {
  Weekly:  "bg-sky-100 text-sky-700",
  Monthly: "bg-violet-100 text-violet-700",
  Ongoing: "bg-emerald-100 text-emerald-700",
}

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        image="/images/herobanner.jpg"
        title="Our Ministries"
        description="Serving God together in Macau and beyond"
      />

      <Container className="py-16">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Serving the Lord Together
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Bordergate Baptist Church, we offer a variety of ministries designed to help every
            member of the family grow in Christ, serve their community, and impact the world with
            the Gospel. Find a ministry where you can connect, grow, and serve.
          </p>
        </div>

        {/* Ministry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministries.map((m) => (
            <div
              key={m.title}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="bg-sky-50 rounded-full p-3">{m.icon}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[m.tag]}`}>
                  {m.tag}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{m.title}</h3>
                <p className="text-sky-500 text-sm font-medium mt-1">{m.schedule}</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{m.description}</p>
            </div>
          ))}
        </div>

        {/* Get Involved CTA */}
        <div className="bg-slate-800 rounded-2xl px-8 py-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Get Involved</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
            We would love to have you join one of our ministries. Contact us today to learn more
            about how you can serve and grow with us at Bordergate Baptist Church.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </>
  )
}
