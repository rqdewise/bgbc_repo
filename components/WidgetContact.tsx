import React from 'react'
import { MapPin, Mail} from 'lucide-react'

export default function WidgetContact() {
  return (
    <section className="relative inline-blockw-full text-slate-200 py-20 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-800">
        <section className="container mx-auto pb-20 relative">

            <h3 className="text-4xl font-semibold mb-20 text-center pt-10">
                CONTACT
            </h3>
            <section className="container grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div id="contact-summary" className="px-4">
                    <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full px-4 p-4">
 
                        <div className="text-center w-full shadow-sm p-4 rounded-md text-slate-700 bg-slate-300">
                            <MapPin className="inline-block text-center my-5" size={44} />
                            <h3 className="text-2xl">Our Location</h3>
                            <p>No. 12 Rua do S. Jose, Edificio Hang Wan R/C, Macau SAR China</p>
                        </div>
                        <div className="flex flex-row gap-5 mt-5">
                        <div className="text-center w-1/2 shadow-sm p-4 rounded-md text-slate-700 bg-slate-300">
                            <Mail className="inline-block  my-5" size={44} />
                            <h3 className="text-2xl">Email Us</h3>
                            <p>bdgate@macau.ctm.net</p>
                        </div>
                        <div className="text-center w-1/2 shadow-sm p-4 rounded-md text-slate-700 bg-slate-300">
                            <Mail className="inline-block  my-5" size={44} />
                            <h3 className="text-2xl">Call Us</h3>
                            <p>+853 2878 2305</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div id="contact-form" className="px-4 lg:pt-0 bg-slate-800 text-slate-200 ">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="text-slate-700 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200">
                            <div className="flex-auto p-5 lg:p-10">
                                <h4 className="text-2xl font-semibold">
                                    Need A Prayer?
                                </h4>
                                <p className="leading-relaxed mt-1 mb-4">
                                    Complete this form and we will get back to you in 24
                                    hours.
                                </p>
                                <div className="relative w-full mb-3 mt-8">
                                <label
                                    className="block uppercase text-xs font-bold mb-2"
                                    htmlFor="full-name"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                                <textarea
                                    
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                    placeholder="Type a message..."
                                />
                            </div>
                            <div className="text-center mt-6">
                            <button
                                className="bg-sky-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </section>         
        </section>   
</section>
  )
}
