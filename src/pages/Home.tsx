import React from 'react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-purple-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 md:mb-6">Fighting Cyber Violence Against Women and Girls</h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                The increasing reach of the internet, the rapid spread of mobile information, and the widespread use of social media, coupled with the existing pandemic of violence against women and girls (VAWG), has led to the emergence of cyber VAWG as a growing global problem with potentially significant economic and societal consequences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-900 mb-8 md:mb-12">Who We Are</h2>
          <div className="space-y-8">
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-700 leading-relaxed">
                The CyVAWG Project (Cyber Violence Against Women and Girls) is a groundbreaking initiative dedicated to addressing and mitigating the impact of online violence targeting women and girls. Funded by Innovate UK and supported by the Department for Science, Innovation and Technology (DSIT) and West Midlands Police, our project operates at the intersection of research, advocacy, and technology.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Led by Dr. Anitha Chinnaswamy at Aston University, CyVAWG brings together a team of experts, researchers, and stakeholders who are committed to raising awareness, conducting in-depth research, and developing practical solutions to protect vulnerable communities from the growing threat of cyber violence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower individuals and institutions by providing resources, policy recommendations, and cutting-edge strategies to combat online harassment, abuse, and exploitation. Through collaboration with law enforcement agencies, policymakers, and the tech industry, we aim to create safer digital spaces for women and girls worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <img 
                src="https://www.aston.ac.uk/sites/default/files/revslider/image/aston-university-logo-purple.png"
                alt="Aston University Logo"
                className="w-full object-contain"
              />
              <img 
                src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/organisation/logo/1996/DSIT_UK_RGB.png"
                alt="Department for Science, Innovation & Technology Logo"
                className="w-full object-contain"
              />
              <img 
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397182848/77e4ef5bf708d7e08246dc14c1f5e992.png"
                alt="Innovate UK Logo"
                className="w-full object-contain"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/West_Midlands_Police_Logo.svg/1200px-West_Midlands_Police_Logo.svg.png"
                alt="West Midlands Police Logo"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}