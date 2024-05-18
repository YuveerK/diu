import React from "react";
import logo from "../assets/community_1.jpg";
import community_2 from "../assets/community_2.jpg";
import community_3 from "../assets/community_3.jpg";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-8">
        About
        <span className="bg-gradient-to-r from-[#9a6680] to-[#641937] text-transparent bg-clip-text">
          {" "}
          Edwin Maine & DIU
        </span>
      </h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Company History</h2>
        <p className="text-md text-gray-400">
          Founded in 2017, our company brings together a wealth of experience in
          police detective work, logistics, corporate investigation, and risk
          management. Our diverse expertise, spanning 7 to 11 years among our
          team, positions us as a premier one-stop-shop for a wide range of
          investigative and risk management services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Biography: Edwin Maine</h2>
        <p className="text-md text-gray-400">
          Edwin Maine, an ex-police officer from the Sandton Fraud Detective
          Unit, boasts extensive experience in fraud investigation. His journey
          in law enforcement began with police basic training, further enhanced
          by specialized investigation courses. Edwin’s notable achievements
          include uncovering fraud in the Jozi Housing project and successfully
          leading investigations for high-profile clients like Bridgestone SA.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Ownership</h2>
        <p className="text-md text-gray-400">
          Our firm proudly stands as 100% black owned and 30% black woman owned,
          led by a team comprising youthful vigor alongside experienced
          professionals from policing and logistics.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Vision & Mission</h2>
        <p className="text-md text-gray-400">
          <strong>Vision:</strong> To be a dependable, ethical forensic and risk
          management company of the future.
        </p>
        <p className="text-md text-gray-400">
          <strong>Mission:</strong> To serve our clients with dedication and
          zeal in all aspects.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Values & Motto</h2>
        <p className="text-md text-gray-400">
          We uphold the values of Ethics, Integrity, Professionalism,
          Responsibility, and Expedition.
        </p>
        <p className="text-md text-gray-400">
          <strong>Motto:</strong> "Going the Extra Mile, Providing an
          Investigation and Service with High Integrity."
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Services Rendered</h2>
        <p className="text-md text-gray-600 mb-4">
          Our services include, but are not limited to:
        </p>
        <ul className="list-disc list-inside">
          <li>Investigative Auditing & Forensic Auditing</li>
          <li>Corporate Investigations & Due Diligence</li>
          <li>Tracing and Surveillance</li>
          <li>Support to Law Firms & Court Case Preparation</li>
          <li>Security Investigation, Risk Analysis, and Implementation</li>
          <li>CCTV, Audio Installation, and Electronic Surveillance</li>
          <li>Confidentiality and Conflict of Interest Management</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Value Proposition</h2>
        <p className="text-md text-gray-400">
          As an emerging black business in investigation and forensic services,
          we boast a young and dynamic team backed by a strong legal framework.
          Our partnerships with law firms and commitment to client education on
          emerging fraud trends further cement our position as a versatile and
          reliable choice in the field.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Community Work</h2>

        <div className="w-full items-center flex">
          <img
            src={logo}
            alt=""
            srcset=""
            className="hidden w-[30%] h-[30%]  rounded-md mr-8 md:block"
          />

          <div>
            <p className="text-md text-gray-400">
              {" "}
              As a dedicated member of our community, I am deeply committed to
              fostering positive change and resilience through ongoing volunteer
              efforts and local initiatives. Over the past several years, I have
              been instrumental in organizing and leading numerous community
              projects that focus on environmental sustainability, food
              security, and support for vulnerable populations. My commitment to
              environmental stewardship is demonstrated through my coordination
              of monthly community clean-up events along our local riverbanks
              and parks. These initiatives have not only contributed to the
              aesthetic enhancement of our natural landscapes but have also
              educated the community about the importance of environmental
              responsibility.
            </p>
          </div>
        </div>
        <div className="w-full items-center flex my-8">
          <div>
            <p className="text-md text-gray-400">
              {" "}
              We have successfully removed tons of waste and recyclables,
              reducing the local ecological footprint and promoting
              sustainability. In addressing food insecurity, I have partnered
              with the Community Food Bank to spearhead quarterly food drives
              that have substantially increased the availability of nutritious
              food for underserved families. These drives have collectively
              gathered over 10,000 pounds of food annually, ensuring that
              hundreds of families have access to essential nutritional
              resources. My role extends beyond organizing as I also participate
              in the sorting and distribution processes, ensuring that the aid
              reaches those in need efficiently and respectfully.
            </p>
          </div>
          <img
            src={community_2}
            alt=""
            srcset=""
            className="hidden w-[50%] h-[50%]  rounded-md mr-8 md:block"
          />
        </div>

        <div className="w-full items-center flex">
          <img
            src={community_3}
            alt=""
            srcset=""
            className="hidden w-[30%] h-[30%]  rounded-md mr-8 md:block"
          />

          <div>
            <p className="text-md text-gray-400">
              {" "}
              At the Downtown Shelter, I serve as a volunteer coordinator, where
              I oversee the scheduling and activities of volunteers who assist
              in meal preparation and distribution for homeless individuals.
              This involvement has not only provided me with insights into the
              challenges faced by these individuals but has also allowed me to
              contribute directly to improving their daily lives through support
              and resource provision. Moreover, I have facilitated workshops and
              seminars aimed at empowering residents with skills in financial
              literacy, health education, and job readiness, reflecting my
              commitment to holistic community development. These workshops
              serve as a platform for individuals to gain valuable skills that
              enhance their employability and overall quality of life. My
              passion for community service is driven by a belief in the
              transformative power of collective action. By continuing to engage
              in these vital activities, I am eager to explore further avenues
              for impact and to inspire others in our community to join in these
              efforts, ensuring a brighter and more sustainable future for all.
            </p>
          </div>
        </div>
        <p className="text-md text-gray-400"></p>
      </section>
    </div>
  );
};

export default About;
