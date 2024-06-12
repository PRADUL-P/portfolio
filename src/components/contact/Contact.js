import SocialIcons from "./socialIcons";
import ContactInfo from "./ContactInfo";
import Message from "./message";

const Contact = () => {
  return (
    <div className="container mx-auto py-8 px-4" id="contact">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Social Profiles</h2>

              <SocialIcons />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>

              <ContactInfo />
            </div>
          </div>
        </div>

        <Message />
      </div>
    </div>
  );
};

export default Contact;
