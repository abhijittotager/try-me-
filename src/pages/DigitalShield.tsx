import React from 'react';

export function DigitalShield() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://raw.githubusercontent.com/yourusername/your-repo/main/assets/combating-cyber-violence.png"
            alt="Digital Shield Against Cyber Violence"
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />
          
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">Digital Shield Against Cyber Violence</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              This powerful image represents our commitment to combating cyber violence against women. It depicts a woman standing strong against digital harassment, symbolized by the aggressive emoji and threatening messages on the phone screen. The "STOP" message and the raised hand gesture emphasize the importance of setting boundaries and taking a stand against online abuse.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Key Elements</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>The skull icon represents the serious and potentially dangerous nature of cyber threats</li>
              <li>The woman's closed eyes and calm expression show resilience in the face of harassment</li>
              <li>The raised hand symbolizes setting boundaries and saying "no" to digital abuse</li>
              <li>The purple background creates a sense of unity and purpose in the fight against cyber violence</li>
            </ul>

            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Message</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This image serves as a powerful reminder that cyber violence is real and affects countless women daily. However, it also emphasizes that through awareness, support, and proper tools, we can create a safer digital space for everyone. The illustration encourages victims to stand up against abuse and reminds them that they're not alone in this fight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}