import React from 'react'
import { ShieldQuestionIcon, Cross, BookKey } from 'lucide-react'
import Link from 'next/link'


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const tabcontent = [
  { 
    value: "get-saved",
    label:"How To Get Saved?",
    icon:<Cross />,
    content: {
      title:"The Way of Salvation",
      text: "Have you ever heard the Gospel? The real Gospel, that is? Not a gospel of man’s imagination or of some religious institution, but the Gospel according to the Bible! Have you ever heard it? Has anyone ever explained it to you? The word gospel means \“good news.\” It is the good news message that Christ died for our sins according to the scriptures; and that he was buried, and that he rose again the third day according to the scriptures (I Corinthians 15:3-4).",
      link: "/how-to-get-saved",
    },
  },
  { 
    value: "christian",
    label:"Every Christian Should Seek To Answer",
    icon:<ShieldQuestionIcon />,
    content: {
      title:"Lord, What Wilt Thou Have Me To Do? Acts 9:6",
      text: "You have trusted Jesus Christ and you have received ETERNAL LIFE. Now, you are ready to start living a life that PLEASES GOD. You want to be a successful Christian. You must answer these following questions",
      link: "/every-christian-should-seek-to-answer",
    },
  },
  { 
    value: "doctrine",
    label:"Biblical Teachings",
    icon:<BookKey />,
    content: {
      title:"What We Believe",
      text: "We believe that the Holy Bible was written by men supernaturally inspired, and is a perfect treasure of heavenly instruction; that it has God as its Author, salvation for its end, and truth without any mixture of error for its matter; that it reveals the principle by which God will judge us; and therefore is, and shall remain to the end of the world, the only complete and final revelation of the will of God to man, the true center of all Christian union, and the supreme standard by which all human conduct, creeds, and opinions should be tried.s",
      link: "/confession-of-faith",
    },
  },
]

export const InfoTabs = () => {
  return (
    <section className="relative inline-block w-full text-slate-200 py-20 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-800">
      <div className="container md:mx-auto pb-20 relative">
        <h3 className="text-4xl font-semibold mb-8 md:mb-20 text-center pt-10">
          Visitor for the first time? Begin here
        </h3>
        <Tabs defaultValue="get-saved" className="grid md:grid-cols-2 gap-20 min-h-[450px]" >
          <TabsList >
            {tabcontent.map((tab)=>(
              <TabsTrigger key={tab.value} value={tab.value}><div className='flex flex-wrap items-center gap-3'>{tab.icon} <span className=' flex-shrink-1'>{tab.label}</span></div></TabsTrigger>
            ))}
          </TabsList>
            {tabcontent.map((content)=>(
              <TabsContent value={content.value}>
                <Card>
                  <CardHeader>
                    <CardTitle className='flex flex-col items-center justify-center gap-y-2 text-lg'>
                      <span className='text-sky-500 py-4'>{content.icon}</span>
                      {content.content.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>
                      {content.content.text}
                    </p>
                  </CardContent>
                  <CardFooter className='flex items-center justify-center'>
                    <Link 
                      href={content.content.link}
                      className="hover:border-b-2 hover:border-dashed border-slate-600 hover:font-semibold flex gap-x-2"
                    > 
                      Continue Reading
                    </Link>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
        </Tabs>
      </div>
    </section>
  )
}
