import { PageHeader } from "@/components/page-header"
import Container from "@/components/container"
import { ArticleHeading } from "@/components/aritcle-heading"
import { Target, Eye, BookOpen, Heart, Users } from "lucide-react"

export const metadata = {
  title: "Mission & Vision – Bordergate Baptist Church",
  description: "Learn about the mission, vision, and core values of Bordergate Baptist Church in Macau SAR China.",
}

const values = [
  {
    icon: <BookOpen className="w-8 h-8 text-sky-500" />,
    title: "Bible-Centered Preaching",
    description:
      "We preach and teach the King James Bible as the inspired, inerrant, and preserved Word of God. Every sermon, lesson, and ministry activity is grounded in Scripture.",
  },
  {
    icon: <Heart className="w-8 h-8 text-sky-500" />,
    title: "Gospel-Driven Outreach",
    description:
      "We are passionate about sharing the good news of salvation through Jesus Christ to everyone in Macau and beyond. Every soul matters to God, and therefore to us.",
  },
  {
    icon: <Users className="w-8 h-8 text-sky-500" />,
    title: "Community & Fellowship",
    description:
      "We believe the local church is God's primary instrument for discipleship. We are committed to building a warm, welcoming community where believers grow together in Christ.",
  },
]

export default function MissionVisionPage() {
  return (
    <>
      <PageHeader
        image="/images/herobanner.jpg"
        title="Mission & Vision"
        description="Preaching the Gospel · Teaching the Word · Contending for the Faith"
      />

      <Container className="py-16">
        {/* Mission */}
        <section className="mb-20">
          <ArticleHeading
            title="Our Mission"
            description="Why We Exist"
            Icon={<Target className="w-full h-full" />}
          />
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <blockquote className="text-2xl font-light text-slate-600 italic leading-relaxed border-l-4 border-sky-500 pl-6 text-left">
              "Go ye therefore, and teach all nations, baptizing them in the Name of the Father,
              and of the Son, and of the Holy Ghost. Teaching them to observe all things
              whatsoever I have commanded you; and lo, I am with you alway, even unto the end
              of the world. Amen."
            </blockquote>
            <p className="mt-4 text-right text-slate-500 font-semibold">— Matthew 28:19-20 (KJV)</p>
            <p className="mt-10 text-lg text-slate-700 leading-relaxed">
              Bordergate Baptist Church exists to reach as many people as we can with the Gospel of
              Jesus Christ. We are called to preach the Word, make disciples, and build up believers
              in their most holy faith. We will have no organization or ministry that does not have
              for its end the salvation of souls.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-20 bg-slate-800 rounded-2xl px-8 py-14 text-white">
          <ArticleHeading
            title="Our Vision"
            description="Where We Are Going"
            Icon={<Eye className="w-full h-full" />}
          />
          <div className="max-w-3xl mx-auto mt-8 space-y-6 text-lg text-gray-300 leading-relaxed text-center">
            <p>
              We envision Bordergate Baptist Church as a thriving, Spirit-led congregation that impacts
              Macau and the surrounding nations through faithful Bible preaching, fervent prayer,
              and sacrificial service.
            </p>
            <p>
              Our vision includes the establishment of a Chinese Ministry, a Christian radio program,
              and expanded mission works in other foreign lands — all for the glory of God and the
              advancement of His Kingdom.
            </p>
            <p className="text-sky-400 font-semibold text-xl">
              "The best days of Bordergate Baptist Church are ahead of us."
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-center text-slate-800 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-sky-50 rounded-full p-3">{v.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  )
}
