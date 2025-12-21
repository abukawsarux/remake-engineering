export default function ContactVideo() {
  return (
    <section className="w-full px-8 py-8 md:py-16 ">
      <div className="max-w-[1640px] mx-auto">
        <div>
          {/* Youtube Video framework  */}
          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            <iframe
              className="w-full h-[300px] md:h-[550px] lg:h-[600px]"
              src="https://www.youtube.com/embed/JVhIvwXv_G4?si=0_4MZWqPmEhliHN7"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
