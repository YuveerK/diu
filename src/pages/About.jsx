import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mb-8">
        About
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
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
    </div>
  );
};

export default About;
