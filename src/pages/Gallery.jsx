const files = [
  '1.jpg','2.jpg','3.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg',
  '10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg',
  'slider1.jpg','slider2.jpg','slider3.jpg','slider4.jpg',
]

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-slate-600 mb-6">Home / Photo Gallery</nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Photo Gallery</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {files.map((f)=> (
          <img key={f} src={`/assets/gallery/${f}`} alt={f} className="w-full h-auto rounded-xl border object-cover" />
        ))}
      </div>
    </div>
  )
}
