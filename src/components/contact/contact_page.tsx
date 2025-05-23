export default function ContactPage() {
  return (
    <div>
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-contact.png')" }}
      />
      <div className="md:ml-24 ml-0">
        <div className="flex flex-col gap-2 text-white text-xl p-10">
          <div className="text-[#F5B719] text-5xl font-bold pb-6">
            Headquarters
          </div>
          <div>Cintana Education</div>
          <div>1130 E. University Dr.</div>
          <div>Suite 101, Building B</div>
          <div>Tempe, AZ 85281</div>
        </div>
        <div className="flex flex-col gap-2 text-white text-xl p-10">
          <div className="text-[#F5B719] text-5xl font-bold pb-6">Contact</div>
          <div>info@cintana.com</div>
        </div>
        <div className="flex flex-col gap-2 text-white text-xl p-10">
          <div className="text-[#F5B719] text-5xl font-bold pb-6">
            Travel information
          </div>
          <div>https://www.cintana.com/travel</div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.277360851005!2d108.23986037518128!3d16.051090584625747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177cb45a6f95%3A0x725f1d670de61449!2sDevPlus!5e0!3m2!1sen!2s!4v1747970237949!5m2!1sen!2s"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full aspect-video"
        ></iframe>
      </div>
    </div>
  );
}
