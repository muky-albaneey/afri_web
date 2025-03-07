'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
          <div>
            <h3 className="text-white font-semibold mb-3">Need Help?</h3>
            <ul className="space-y-2">
              <li>Chat with us</li>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
            <div className="mt-4 flex justify-center md:justify-start space-x-3">
              <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
              <Image src="/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
              <Image src="/twitter-icon.png" alt="Twitter" width={24} height={24} />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">About Afrigora</h3>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Afrigora careers</li>
              <li>Afrigora News</li>
              <li>Terms and Conditions</li>
              <li>Privacy Notice</li>
              <li>Afrigo Store Credit Terms & Conditions</li>
              <li>Afrigo Payment Information Guidelines</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">Earn with Afrigora</h3>
            <ul className="space-y-2">
              <li>Sell on Afrigora</li>
              <li>Vendor hub</li>
              <li>Become a Sales Consultant</li>
              <li>Join Afrigora’s Tailor</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">Afrigora International</h3>
            <ul className="space-y-2">
              <li>Algeria</li>
              <li>Egypt</li>
              <li>Ghana</li>
              <li>Ivory Coast</li>
              <li>Kenya</li>
              <li>Morocco</li>
              <li>Senegal</li>
              <li>Uganda</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 text-center border-t border-gray-700 pt-4 text-sm">
          <p>2024 Afrigora. All rights reserved.</p>
          <p className="mt-2">Terms of Service Support | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
