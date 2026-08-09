export default function Map() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[#FF9800] uppercase tracking-widest font-semibold text-sm sm:text-base">
            Our Location
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F4C81]">
            Find Us
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            Serving S. Kota (Srungavarapukota), Vizianagaram District
            and nearby areas in Andhra Pradesh.
          </p>

        </div>

        {/* Google Map */}

        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            title="Srinu Survey Solutions Location"
            src="https://www.google.com/maps?q=S.Kota,Srungavarapukota,Vizianagaram,Andhra%20Pradesh&output=embed"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}