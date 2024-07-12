// components/GoogleMap.js

const GoogleMap = () => {
    return (
      <div data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4633847817868!2d76.00261257588534!3d11.003817754956547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b4b00f6e86e9%3A0xef030aad10c7c46b!2sSmart%20Trade%20City!5e0!3m2!1sen!2sin!4v1710829224755!5m2!1sen!2sin"
          width="2500"
          height="450"
          style={{ border:0 }}
        //   allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pt-[3rem]"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  