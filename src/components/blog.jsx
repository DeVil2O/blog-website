import React from "react";

const Blog = () => {
    const headings = [
        { id: "introduction", title: "Introduction" },
        { id: "methods-used", title: "Methods Used" },
        { id: "peer-discovery", title: "Peer Discovery" },
        { id: "sybil-resistance", title: "Sybil Attack Resistance" },
        { id: "randomized-selection", title: "Randomized Node Selection" },
        { id: "network-monitoring", title: "Network Monitoring" },
        { id: "secure-protocols", title: "Secure Communication Protocols" },
        { id: "conclusion", title: "Conclusion" },
      ];
  return (
    <div className="h-full min-h-screen flex flex-col items-center bg-white bg-grid font-primary">
      <div className="text-[3.5rem] w-full flex justify-center text-center mt-7">
        <div className="flex flex-col items-center py-10">
          {/* Image Section */}
          <div className="w-[50rem] flex justify-center">
            <img
              src="https://voidzero.dev/covers/pledge.jpg"
              alt="Blog Header"
              className="w-full h-4/5 rounded-lg"
            />
          </div>

          <p className="text-gray-500 text-sm font-secondary">
            February 3, 2025
          </p>

          <h1 className="text-5xl font-bold mt-6 text-center">
            How does an eclipse attack work?
          </h1>

          {/* Author Section */}
          <div className="flex items-center mt-6">
            <img
              src="https://avatars.githubusercontent.com/u/38765776?v=4"
              alt="Author"
              className="h-10 w-10 rounded-full mr-5"
            />
            <p className="text-gray-800 text-[15px] font-semibold">
              Chirag Garg
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-center">
        <div className="w-[65%] mx-auto">
          <h2 id="introduction" className="text-3xl font-Inter font-semibold my-4 mt-16">
            Introduction
          </h2>
          <p className="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
            An eclipse attack is a type of cyberattack in which the attacker
            seizes control of the communication channels between a victim node
            and its surrounding nodes. By positioning themselves between the
            victim and the rest of the network, the attacker effectively
            "eclipses" the victim. The attacker can then manipulate and filter
            the victim's network traffic, enabling various malicious activities.
            Peer-to-peer networks and blockchain-based systems are particularly
            vulnerable to this threat. The attacker can isolate the victim,
            preventing it from sending or receiving accurate information, and
            may use this opportunity to launch further attacks. Defending
            against eclipse attacks requires secure communication protocols and
            proper node authentication.
          </p>

          <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />
          <h2 id="methods-used" className="text-3xl font-Inter font-semibold my-4">
            Methods Used
          </h2>
          <ul className="list-disc pl-6 text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter marker:text-black">
            <li>Peer Discovery</li>
            <li>Sybil Attack Resistance</li>
            <li>Randomized Node Selection</li>
            <li>Network Monitoring</li>
            <li>Secure Communication Protocols</li>
          </ul>
          <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />

          <section class="methods-list">
            <h2 id="peer-discovery" className="text-3xl font-Inter font-semibold my-4">
              Peer Discovery
            </h2>
            <p className="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
              The peer discovery strategy aims to mitigate eclipse attacks by
              implementing decentralized mechanisms that allow nodes to discover
              and connect with a diverse range of peers. Relying on a small
              group of malicious nodes is risky, but ensuring that nodes connect
              to a variety of network participants reduces this risk. By
              diversifying connections, the likelihood of an attacker
              successfully isolating the victim and manipulating its network
              traffic decreases.
            </p>

            <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />

            <h2 id="sybil-resistance" className="text-3xl font-Inter font-semibold my-4">
              Sybil Attack Resistance
            </h2>
            <p className="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
              Sybil attack resistance mechanisms are designed to prevent an
              attacker from creating multiple nodes and gaining significant
              control over the network. By requiring nodes to prove their stake
              or computational power using mechanisms like Proof-of-Work (PoW)
              or Proof-of-Stake (PoS), attackers are hindered from establishing
              a large number of malicious nodes. This minimizes the risk of
              isolating and controlling victim nodes during an eclipse attack.
            </p>

            <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />

            <h2 id="randomized-selection" className="text-3xl font-Inter font-semibold my-4">
              Randomized Node Selection
            </h2>
            <p className="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
              Randomized node selection involves a victim node choosing
              communication peers randomly instead of relying on a fixed group
              of predetermined nodes. This method reduces the chance of an
              attacker controlling the victim’s routing path and prevents the
              isolation necessary for a successful eclipse attack. Randomized
              selection ensures a variety of communication partners, making it
              more challenging for attackers to intercept and manipulate
              traffic.
            </p>

            <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />

            <h2 id="network-monitoring" className="text-3xl font-Inter font-semibold my-4">
              Network Monitoring
            </h2>
            <p className="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
              Network monitoring involves observing and analyzing network
              activity to detect and prevent eclipse attacks. Administrators can
              identify signs of an attack, such as one node dominating
              communication or unusual traffic concentrations. Real-time
              monitoring tools, such as intrusion detection systems, help detect
              attacks early and allow the implementation of appropriate
              countermeasures.
            </p>
            <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />

            <h2 id="secure-protocols" className="text-3xl font-Inter font-semibold my-4">
              Secure Communication Protocols
            </h2>
            <p className="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-4 font-Inter">
              Secure communication protocols protect the privacy, integrity, and
              authenticity of communication channels within the network. By
              using encryption and authentication, attackers attempting to
              intercept and modify messages are thwarted. Encrypted data is
              indecipherable to attackers, while authentication verifies that
              nodes are trustworthy, reducing the risk of malicious
              intervention.
            </p>
          </section>
          <hr className="border border-t-[1px] border-[#e5e7eb] my-8" />

          <section>
            <h2 id="conclusion" className="text-3xl font-Inter font-semibold my-4">
              Conclusion
            </h2>
            <p className="text-[#5f5e5e] text-[15.25px] my-5 leading-7 mb-16 font-Inter">
              An eclipse attack is a serious cyberthreat where an attacker
              disrupts communication channels between a victim node and its
              surrounding nodes. By strategically positioning themselves,
              attackers can isolate and manipulate the victim’s network traffic.
              To defend against this, blockchain networks must implement
              strategies like secure communication protocols, peer discovery,
              Sybil attack resistance, randomized node selection, and network
              monitoring. These strategies collectively enhance security and
              mitigate the risk of eclipse attacks, safeguarding the integrity
              of the network.
            </p>
          </section>
        </div>
        <div className="w-1/4 px-6 sticky top-0 hidden lg:block mt-16">
  <div className="bg-gray-100 p-4 rounded-md shadow-sm">
    <h3 className="text-2xl font-Inter font-semibold mb-4">Table of Contents</h3>
    <ul className="space-y-2">
      {headings.map((heading) => (
        <li key={heading.id} className="relative group mb-4">
          <a href={`#${heading.id}`} className="text-sm flex items-center">
            <p className="inline-block relative">
              {heading.title}
              <span className="absolute bottom-0 left-0 h-[1.5px] bg-black w-0 group-hover:w-full transition-all duration-600"></span>
            </p>
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>

      </div>
      
    </div>
  );
};

export default Blog;
