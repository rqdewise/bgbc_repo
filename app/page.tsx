import WidgetServices from "@/components/widgetServices"
import WidgetHeroBanner from "@/components/WidgetHeroBanner"
import WidgetContact from "@/components/WidgetContact"
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
