import Contact from "./contact";

import Container from "@/components/container";

export default async function ContactPage() {
  const settings = {
    title: "sample",
    email: "bdgate@macau.ctm.net",
    phone: "+853 2878 2305",
    address: "No. 12 Rua do S. Jose, Edificio Hang Wan R/C,Macau SAR China",
  }
  return (
    <Container>
      <Contact {...settings} />
    </Container>
  );
}
