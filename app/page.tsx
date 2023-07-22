import {notFound} from "next/navigation"
import WidgetServices from "@/components/widgetServices"
import WidgetHeroBanner from "@/components/WidgetHeroBanner"
import WidgetPlanVisit from "@/components/WidgetPlanVisit"
import WidgetContact from "@/components/WidgetContact"
import WidgetPastorBanner from "@/components/WidgetPastorBanner"
export default function Home() {
  return (
      <>
        <WidgetHeroBanner />
        <WidgetPlanVisit />
        <WidgetServices />
        <WidgetContact />
        <WidgetPastorBanner />

      </>
  )
}
