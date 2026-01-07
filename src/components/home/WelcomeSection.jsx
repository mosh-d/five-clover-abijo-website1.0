import { FaMapMarkerAlt } from "react-icons/fa";

export default function WelcomeSection() {
  return (
    <div
      data-component="Welcome Component"
      className="p-[12rem] max-sm:px-[2rem] flex flex-col gap-[4.8rem] max-sm:gap-[2.4rem]"
    >
      <h2 className="text-6xl font-secondary font-bold">Locate Us</h2>
      <div
        data-component="Google Map"
        className="w-full h-[400px] max-sm:h-[200px] overflow-hidden"
      >
        <iframe
          title="Google Map - 10, Monastery Road, by Novare Mall/ShopRite, Sangotedo, Lagos"
          src="https://www.google.com/maps?q=6.471022,3.635581&z=15&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter:
              "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(0.9)",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex max-sm:flex-col gap-[2rem]">
        <p className="font-secondary text-3xl mx-[1rem] font-bold">
          10, Monastery Road, by Novare Mall/ShopRite, Sangotedo, Lagos
        </p>
        <a
          data-component="Map link"
          href="https://maps.google.com/?q=10+Monastery+Road,+by+Novare+Mall/ShopRite,+Sangotedo,+Lagos,+Nigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 w-fit max-sm:w-full"
        >
          <FaMapMarkerAlt size="1.8rem" />
          <div
            data-component="text"
            className="text-xl border-b border-[color:var(--text-color)]/30 hover:cursor-pointer hover:border-[color:var(--text-color)]"
          >
            View on Google Maps
          </div>
        </a>
      </div>
    </div>
  );
}
