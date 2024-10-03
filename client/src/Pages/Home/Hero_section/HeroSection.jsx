import React from 'react';
import flowerImg from '../../../assets/Images/flowerpot_sec2 img.png';


function HeroSection() {
    return (
        <section class="bg-[#C9E8D7] text-gray-600 body-font">
            <div class="grid grid-cols-2 w-full place-items-center h-[100vh]">
                <div class="">
                    <h1 class="text-[3em] mb-4 text-gray-900">Plants will make <br/> your life better
                    </h1>
                    <p class="mb-9 text-[1.35em] leading-relaxed">Create incredible plant design for your offices <br/> or apartments.
                    Add freshness to your new ideas.</p>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="W-[350px] h-[350px] object-cover object-center hover:w-[400px] hover:h-[400px] rounded" alt="hero" src={flowerImg}/>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
