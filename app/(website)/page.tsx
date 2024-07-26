import WidgetServices from "@/components/widgetServices"
import WidgetHeroBanner from "@/components/WidgetHeroBanner"
import { InfoTabs } from "@/components/info-tabs";
import WidgetContact from "@/components/WidgetContact"
import WidgetPastorBanner from "@/components/widgetPastorBanner"

export default function Home() {
  return (
      <>
        <WidgetHeroBanner />
        <WidgetServices />
        <InfoTabs />
        <WidgetPastorBanner />
        <WidgetContact />
      </>
  )
}
