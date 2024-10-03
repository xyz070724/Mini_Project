import React from 'react';

const Footer = () => {
    return (
        <footer className="text-black py-8 mt-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="footer__content">
                    <a href="/" className="flex hover:text-[#51b37d] items-center text-lg font-bold mb-4">
                        <i className="ri-leaf-line mr-2 "></i> वनज्ञानसेतु
                    </a>
                    {/* Uncomment if you want to add a map
          <div className="footer__map mb-4">
            <iframe className="w-full h-32" src="https://www.bing.com/maps?osid=bf88bc19-7989-4270-b6c8-bd83aeb5a426&cp=22.320347~73.167575&lvl=14.5&pi=0&v=2&sV=2&form=S00027"></iframe>
          </div>
          */}
                </div>
                <div className="footer__content hover:text-[#51b37d]">
                    <h3 className="footer__title text-lg font-semibold mb-2">Our Address</h3>
                    <span className="footer__data">
                        <span className="footer__information">85CH+4QH,</span>
                        <span className="footer__information">Officers Railway Colony,</span>
                        <span className="footer__information">Pratapgunj,</span>
                        <span className="footer__information">Vadodara,</span>
                        <span className="footer__information">Gujarat 390002</span>
                    </span>
                </div>
                <div className="footer__content hover:text-[#51b37d]">
                    <h3 className="footer__title text-lg font-semibold mb-2">Contact Us</h3>
                    <span className="footer__data">
                        <span className="footer__information">
                            Phone: 0265-2791891 <br />
                            Email: info@msubaroda.ac.in
                        </span>
                        <div className="footer__social mt-4 hover:text-[#51b37d]">
                            <a href="#" target="_blank" className="footer__social-link mr-4">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="#" target="_blank" className="footer__social-link mr-4">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="#" target="_blank" className="footer__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>
                        </div>
                    </span>
                </div>
                <div className="footer__content hover:text-[#51b37d]">
                    <h3 className="footer__title text-lg font-semibold mb-2">Open Hours</h3>
                    <span className="footer__data">
                        <span className="footer__information">
                            MONDAY-SATURDAY <br />
                            08:00 AM to 05:00 PM
                        </span>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
