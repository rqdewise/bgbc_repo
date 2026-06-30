import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import Container from "@/components/container"
import { Quote } from "lucide-react"

export const metadata = {
  title: "From Our Pastor – Bordergate Baptist Church",
  description: "A personal message from Pastor James Enriquez Estenilo of Bordergate Baptist Church, Macau.",
}

export default function FromPastorPage() {
  return (
    <>
      <PageHeader
        image="/images/herobanner.jpg"
        title="From Our Pastor"
        description="A word from Pastor James Enriquez Estenilo"
      />

      <Container className="py-16">
        <section className="max-w-5xl mx-auto">
          {/* Welcome message */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Pastor Image */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <div className="relative">
                <Image
                  src="/images/PtrJames.jpg"
                  alt="Pastor James Enriquez Estenilo"
                  width={320}
                  height={400}
                  className="rounded-2xl shadow-xl object-cover"
                  style={{
                    transform: "scale(1) perspective(1040px) rotateY(-8deg) rotateX(2deg) rotate(1deg)",
                  }}
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-slate-800">Pastor James Enriquez Estenilo</h3>
                <p className="text-sky-500 font-medium mt-1">Senior Pastor</p>
                <p className="text-slate-500 text-sm mt-1">Bordergate Baptist Church</p>
                <p className="text-slate-500 text-sm">Macau SAR China</p>
              </div>
            </div>

            {/* Pastor Message */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-sky-500 rounded-full p-2">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-semibold text-slate-800">Pastor's Welcome</h2>
              </div>

              <div className="prose prose-lg prose-slate max-w-none space-y-5 text-slate-700 leading-relaxed">
                <p>
                  Welcome to Bordergate Baptist Church. As your Pastor, it is my privilege and joy to
                  serve this wonderful congregation in the heart of Macau. Whether you are a longtime
                  member or visiting for the very first time, you are warmly welcome here.
                </p>

                <blockquote className="border-l-4 border-sky-500 pl-6 text-xl italic text-slate-600 my-8">
                  "As Pastor of Bordergate Baptist Church, I invite you to visit any of our services.
                  You will be able to participate in singing some of the wonderful old Hymns that have
                  blessed the hearts of Christians for many years. You will hear Bible-based preaching
                  from the old King James Version of the Bible. Each service makes the wonderful,
                  life-giving truths of the Bible practical and relevant to your life."
                </blockquote>

                <p>
                  Since the year 2000, it has been my great honour to lead this church that was
                  established in 1990. Through the grace and power of the Holy Spirit, Bordergate
                  Baptist Church and its members have withstood the test of time and overcome the
                  many challenges that most Christian churches face today.
                </p>

                <p>
                  We believe in the inspired, inerrant Word of God as preserved in the King James
                  Bible. We believe in the Gospel — that Christ died for our sins, was buried, and
                  rose again the third day. We believe every person needs to be born again by faith
                  in Jesus Christ alone.
                </p>

                <p>
                  Our doors are always open. Come and worship with us, grow in the Word, and find
                  a family that will walk alongside you in faith. We have a church that desires to
                  see people saved and lives changed.
                </p>

                <p className="font-semibold text-slate-800">
                  Until Jesus Comes,
                </p>
                <p className="text-sky-600 font-bold text-lg">
                  Pastor James Enriquez Estenilo
                </p>
              </div>
            </div>
          </div>

          {/* Scripture Banner */}
          <div className="mt-16 bg-sky-500 rounded-2xl px-8 py-10 text-white text-center">
            <p className="text-xl md:text-2xl font-light italic leading-relaxed">
              "Preach the word; be instant in season, out of season; reprove, rebuke, exhort with
              all longsuffering and doctrine."
            </p>
            <p className="mt-4 font-semibold text-sky-100">— 2 Timothy 4:2 (KJV)</p>
          </div>

          {/* Gospel Message */}
          <div className="mt-20 prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              May we share with you some Good News about the Gospel of Jesus Christ?
            </h2>

            {/* Bad News */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-800">But first, the Bad News…</h3>
              <div className="mt-4 space-y-4">
                <blockquote className="border-l-4 border-red-400 pl-5 italic text-slate-600">
                  "…by one man sin entered into the world, and death by sin; and so death passed upon
                  all men, for that all have sinned:" <strong>Romans 5:12</strong>
                </blockquote>
                <blockquote className="border-l-4 border-red-400 pl-5 italic text-slate-600">
                  "For the wages of sin is death…" <strong>Romans 6:23</strong>
                </blockquote>
                <blockquote className="border-l-4 border-red-400 pl-5 italic text-slate-600">
                  "I tell you, Nay: but, except ye repent, ye shall all likewise perish." <strong>Luke 13:3</strong>
                </blockquote>
              </div>
              <p className="mt-4 text-slate-700">
                These Scriptures show the bad news about the evil results and consequences of our sins.
                Every soul is consigned to an eternal, everlasting place of torment. If the Bible's
                message stopped here the news would certainly not be good.
              </p>
            </div>

            {/* Good News */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-sky-600">Now for the Good News!</h3>
              <p className="mt-4 text-slate-700">
                I want to tell you the most wonderful news this world has ever been given. The Bible
                term for "Good News" is the word "gospel." In 1 Corinthians 15:3-4, we find the
                gospel defined:
              </p>
              <p className="mt-4 text-slate-700 font-medium">
                How is His death "Good News"? He died for <em>us</em>!
              </p>
              <div className="mt-4 space-y-4">
                <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600">
                  "But God commendeth his love toward us, in that, while we are yet sinners, Christ
                  died for us." <strong>Romans 5:8</strong>
                </blockquote>
                <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600">
                  "For Christ also hath once suffered for sins, the just for the unjust, that He might
                  bring us to God." <strong>1 Peter 3:18</strong>
                </blockquote>
              </div>
              <p className="mt-4 text-slate-700">
                Jesus Christ, the sinless Son of God, became our sin and bore our penalty that we
                might be forgiven!
              </p>
              <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600 mt-4">
                "For he hath made him to be sin for us, who knew no sin; that we might be made the
                righteousness of God in Him." <strong>2 Corinthians 5:21</strong>
              </blockquote>
              <p className="mt-4 text-slate-700">
                If you took all the good things that ever came your way in this life and were able to
                stack them in a neat little pile, what would these be in view of eternity? You cannot
                take even one of these good things with you beyond the grave. Apart from the new birth
                found in Christ, there is no Good News. Without this new birth you are consigned to
                the lake of burning fire to suffer forever.
              </p>
              <p className="mt-4 text-slate-700">
                My friend, Jesus died for your sins and arose from the grave so that you could be
                saved. Do you want to be saved? God's plan of Salvation is simple.
              </p>
            </div>

            {/* Steps */}
            <div className="mt-10 space-y-10">

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-7">
                <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide mb-3">
                  1. You Must Recognize Your Sins and Their Penalty
                </h4>
                <p className="text-slate-700">
                  To receive the benefits of the Gospel you first acknowledge that you have a need. As
                  a sinner, you need the new birth.
                </p>
                <div className="mt-4 space-y-3">
                  <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600">
                    "…There is none righteous, no not one…For there is no difference…For all have
                    sinned, and come short of the glory of God." <strong>Romans 3:10, 22, 23</strong>
                  </blockquote>
                  <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600">
                    "And it is appointed unto men once to die, but after this the judgment."
                    <strong> Hebrews 9:27</strong>
                  </blockquote>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-7">
                <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide mb-3">
                  2. You Must Realize You Have No Hope Outside of the Gospel of Christ
                </h4>
                <p className="text-slate-700">
                  For God says, "…All our righteousness are as filthy rags…" Isaiah 64:6
                </p>
                <p className="mt-3 text-slate-700">
                  No other person or thing can save.
                </p>
                <div className="mt-4 space-y-3">
                  <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600">
                    "Neither is there salvation in any other: for there is none other name under Heaven
                    given among men whereby we must be saved." <strong>Acts 4:12</strong>
                  </blockquote>
                  <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600">
                    "For the wages of sin is death; but the gift of God is eternal life through Jesus
                    Christ our Lord." <strong>Romans 6:23</strong>
                  </blockquote>
                </div>
                <p className="mt-4 text-slate-700">
                  To escape the penalty for sin, you must believe that only His sacrifice pays for
                  your sins.
                </p>
                <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600 mt-4">
                  "For God so loved the world, that He gave His only begotten Son, that whosoever
                  believeth in Him should not perish, but have everlasting life." <strong>John 3:16</strong>
                </blockquote>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-7">
                <h4 className="text-xl font-bold text-slate-800 uppercase tracking-wide mb-3">
                  3. You Must Repent
                </h4>
                <p className="text-slate-700">The word of God commands us to repent.</p>
                <blockquote className="border-l-4 border-sky-500 pl-5 italic text-slate-600 mt-4">
                  "Repent ye therefore, and be converted, that your sins may be blotted out, when the
                  times of refreshing shall come from the presence of the Lord." <strong>Acts 3:19</strong>
                </blockquote>
                <p className="mt-4 text-slate-700">
                  To repent means to be willing to turn from your sins and turn to the Lord, simply
                  trusting His promises in His Word and for His forgiving mercy. If you are convinced
                  of your sin and desire to turn from it to the Lord, then you are ready to act on the
                  Good News!
                </p>
              </div>

              <div className="bg-sky-500 rounded-xl p-7 text-white">
                <h4 className="text-xl font-bold uppercase tracking-wide mb-3">
                  Will You Come to Him Now?
                </h4>
                <blockquote className="border-l-4 border-white/50 pl-5 italic text-sky-100 mb-4">
                  Jesus said, "…repent ye, and believe the gospel." <strong>Mark 1:15</strong>
                </blockquote>
                <p className="text-sky-100 mb-4">
                  If you are honestly willing to repent, just turn your heart to God in prayer. He
                  alone is able to save you. Won't you call out to the God of Heaven now as the
                  following verses invite you to do?
                </p>
                <div className="space-y-3">
                  <blockquote className="border-l-4 border-white/50 pl-5 italic text-sky-100">
                    "That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in
                    thine heart that God hath raised him from the dead, thou shalt be saved. For with
                    the heart man believeth unto righteousness; and with the mouth confession is made
                    unto salvation." <strong>Romans 10:9-10</strong>
                  </blockquote>
                  <blockquote className="border-l-4 border-white/50 pl-5 italic text-sky-100">
                    "For whosoever shall call upon the name of the Lord shall be saved."
                    <strong> Romans 10:13</strong>
                  </blockquote>
                </div>
                <p className="mt-4 text-sky-100">
                  When you repent, the sins of the past will lose their glamour. Instead, there will
                  be a desire for a new life which honours and pleases the Saviour.
                </p>
              </div>

            </div>

            {/* Closing */}
            <p className="mt-10 text-slate-700">
              My friend, won't you trust what God has said in His Word? I hope you will. Please
              contact us if we can help you further understand God's wonderful Word. We would be
              happy to answer your questions! We have prepared a private Bible Study workbook for
              you, which explain the truths presented above in fuller detail. We would gladly give
              this to you upon request.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3 rounded-lg text-center transition-colors no-underline"
              >
                Contact Us
              </a>
              <a
                href="/how-to-get-saved"
                className="inline-block border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-bold px-8 py-3 rounded-lg text-center transition-colors no-underline"
              >
                How To Get Saved
              </a>
            </div>
          </div>

        </section>
      </Container>
    </>
  )
}
