export default function ContactPage() {
  return (
    <div>
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img src="/assets/gallery/slider2.jpg" alt="Contact Banner" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-sm text-white/90">Home / Contact</div>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Contact Us</h1>
          <div className="mt-3">
            <img src="/assets/shape/section-title-line.png" alt="section-line" className="h-2 w-auto" />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li><a className="hover:text-pink-600" href="tel:+9779819090115">+977 981 9090 115</a></li>
            <li><a className="hover:text-pink-600" href="https://drpriyankasclinic.com/cdn-cgi/l/email-protection">Email</a></li>
            <li>Birtamode, Jhapa, Nepal</li>
          </ul>
          <div className="mt-6">
            <a href="/services" className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full">Our Services</a>
          </div>
        </div>
        <div>
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Clinic Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.457930062184!2d87.972!3d26.646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e583f7f3bb2f0f%3A0x0000000000000000!2sBirtamode%2C%20Jhapa%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
