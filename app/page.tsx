import WidgetServices from "@/components/widgetServices"
import WidgetHeroBanner from "@/components/widgetHeroBanner"
import WidgetContact from "@/components/widgetContact"
import WidgetPastorBanner from "@/components/widgetPastorBanner"
import { InfoTabs } from "@/components/info-tabs"

export default function Home() {
  return (
      <>
        <WidgetHeroBanner />
        <WidgetServices />
        <InfoTabs/>
        <WidgetPastorBanner />
        <WidgetContact />
      </>
  )
}
