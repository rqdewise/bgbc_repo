import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Github} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gray-900/90 text-gray-300">
        <div className="container mx-auto pb-10 pt-10">
        <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold pl-4">
                <Image
                    src="/images/bgbc_logo_white_font.png"
                    width={300}
                    height={200}
                    alt="Logo"
                    className=" dark:scale-110 dark:border-stone-400 mb-10"
                />
              </h4>
                <h5 className="text-lg mt-0 mb-2">
                    No. 12 Rua do S. Jose, Edificio Hang Wan R/C,Macau SAR China
                
                    <p>
                        <strong>Phone: </strong>+853 2878 2305
                    </p>
                    <p>
                        <strong>Email: </strong>bdgate@macau.ctm.net
                    </p>
                </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-sky-400 shadow-lg font-normal p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Twitter />
                </button>
                <button
                  className="bg-white text-sky-600 shadow-lg font-normal p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Facebook />
                </button>
                <button
                  className="bg-white text-zinc-800 shadow-lg font-normal p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <Github />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        How to get save
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        Every Christian Should Seek To Answer
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Ministry
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Adult Sunday School 
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Children Sunday School
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Ladies Fellowship
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Training Men on the Ministry
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Online Weekday Bible Study
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* <div className="container mx-auto px-4">
            <div className="grid01">
            <Image
                src="/images/bgbc_logo_white_font.png"
                width={200}
                height={100}
                alt="Logo"
                className=" dark:scale-110 dark:border-stone-400"
              />
                <section className="contact pt-4 text-sm">

                    <div className="address">
                        <p>No. 12 Rua do S. Jose, Edificio Hang Wan R/C,Macau SAR China
                        </p>
                    </div>

                    <div className="contact-number pt-4">
                        <p>
                        <strong>Phone: </strong>+853 2878 2305
                        </p>
                        <p>
                        <strong>Email: </strong>rqdeleon@bordergatebaptist.net
                        </p>
                    </div>

                </section>
            </div>
            <div className="grid02 useful-links">
                    <h4 className="footer-grid-title text-lg font-semibold pb-3"> Useful Links</h4>
                    <ul className="list-none">
                        <li className="pb-4 text-sm">
                            <Link href="/"> About Us</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> How to get save</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> Every Christian Should Seek To Answer</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> Terms Of Service</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> Privacy Policy</Link>
                        </li>

                    </ul>
            </div>
            <div className="grid03">
                <h4 className="footer-grid-title text-lg font-semibold pb-3 "> Our Services</h4>

                <ul className="list-none text-sm">
                        <li className="pb-4">
                            <Link href="/"> Sermon</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> Children Sunday School</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> Men Training In The Ministry</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> Ladies Fellowship</Link>
                        </li>
                        <li className="pb-4">
                            <Link href="/"> Prayer Vigil</Link>
                        </li>

                    </ul>

            </div>
            <div className="grid04">
                <h4 className="footer-grid-title text-lg font-semibold pb-3">Join Our Newsletter</h4>

                <form>
                    <label className="hidden" htmlFor="subscribe">subcribe</label>
                
                    <input type="text" id="subscribe" className="subscribe" alt="enter email" />

                    <p className="text-sm pt-2">Get free devotions, biblical materials, latest news, and event notification conviently in your inbox</p>
                </form>
            </div>
            </div> */}
            <div className="bg-gray-900 w-full py-6 text-center flex flex-row justify-between px-12">
                <span>Copyright &copy; {new Date().getFullYear()}</span>
                <span>Site develop by {" "}
                  <Link
                    href="/"
                  >
                      Ralf Quezar De Leon
                  </Link></span>
            </div>
    </footer>
  )
}
