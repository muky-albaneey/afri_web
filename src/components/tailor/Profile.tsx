// app/page.jsx
export default function TailorProfile() {
    const galleryItems = [
      { title: "Armless Wedding Gown", price: 100 },
      { title: "Casual Jean", price: 100 },
      { title: "Marque Uniform", price: 100 },
      { title: "Brown Cardigan", price: 100 },
      { title: "Ankara", price: 100 },
      { title: "Senator Wear", price: 100 },
      { title: "Brown Cardigan", price: 100 },
      { title: "Green Ankara", price: 100 },
      { title: "Native Designer Caps", price: 100 },
    ];
  
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gray-50">
        {/* Profile Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image Placeholder */}
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Profile Image</span>
            </div>
  
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">David Ojo</h1>
              <p className="text-gray-600 mb-2">
                Location: No 23, Suite 10, Gwartinpa Plaza, Abuja
              </p>
              <p className="text-gray-600 mb-4">
                15 years in weaving, tailoring and handcraft artifact
              </p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                  Custom Suites
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                  Cardigans
                </div>
                <div className="bg-blue-100 px-3 py-1 rounded-full text-sm">
                  Wedding Dresses
                </div>
              </div>
  
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
                <span className="text-gray-600">5.0</span>
              </div>
  
              <div className="flex flex-wrap gap-4 text-sm">
                <p className="text-gray-600">Expert Level</p>
                <p className="text-gray-600">$75/hour</p>
              </div>
              <button className="bg-amber-800 p-2 rounded-lg text-white font-bold">contact me</button>

            </div>

          </div>
        </section>
  
        {/* Gallery Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Radiant fabrics, with neat stitches of multi hemming for casual wear
                </p>
                <p className="text-lg font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </section>
  
        {/* Download App CTA */}
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          Download App
        </div>
      </main>
    );
  }