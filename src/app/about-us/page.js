import React from "react";


export default function AboutUs() {
  return (
    <div className="bg-red min-h-screen pb-12">
      {/* Fast Facts */}
      <section className="py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">Fast Facts about KFC Pakistan</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center w-56">
            <span className="text-3xl font-extrabold">1997</span>
            <p className="text-center text-sm mt-2">The first KFC restaurant in Pakistan opened in 1997 and was located in Gulshan-e-Iqbal Karachi.</p>
          </div>
          <div className="flex flex-col items-center w-56">
            <span className="text-3xl font-extrabold">128</span>
            <p className="text-center text-sm mt-2">Today KFC has grown to over 128 restaurants across the country</p>
          </div>
          <div className="flex flex-col items-center w-56">
            <span className="text-3xl font-extrabold">9</span>
            <p className="text-center text-sm mt-2">Giving back to the community, KFC runs 9 restaurants operated by deaf, Hearing With Heart team members</p>
          </div>
          <div className="flex flex-col items-center w-56">
            <span className="text-3xl font-extrabold">9000+</span>
            <p className="text-center text-sm mt-2">Our Finger Lickin’ Chicken is brought to you by the hardwork of a team of 9000+ people across Pakistan</p>
          </div>
        </div>
      </section>

      {/* Mitao Bhook */}
      <section className="max-w-5xl mx-auto my-10 p-8 flex flex-col items-center">
        {/* intentionally left blank */}
      </section>

      {/* Story Timeline */}
      <section className="py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">The Story of World’s Best Chicken</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1890</span>
            <p className="text-center text-sm">Harland Sanders was born</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1930</span>
            <p className="text-center text-sm">Sanders Court & Cafe was opened in front of his gas station in Corbin Kentucky</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1940</span>
            <p className="text-center text-sm">Colonel Sanders develops the Original Recipe from 11 secret herbs and spices</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1952</span>
            <p className="text-center text-sm">The Colonel begins franchising his business travelling from town to town and cooking for restaurant owners</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1957</span>
            <p className="text-center text-sm">Kentucky Fried Chicken is first sold in buckets</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1964</span>
            <p className="text-center text-sm">More than 600 franchised outlets in the USA, Canada and UK</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1974</span>
            <p className="text-center text-sm">KFC first launches in Kuwait</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">1980</span>
            <p className="text-center text-sm">Colonel Sanders passes away at the age of 90. His legacy lives on.</p>
          </div>
          <div className="w-48 flex flex-col items-center">
            <span className="text-2xl font-bold mb-2">Today</span>
            <p className="text-center text-sm">Today we have more than 25,000 KFC restaurants in over 145 countries and territories around the world.</p>
          </div>
        </div>
      </section>

      {/* About KFC Pakistan */}
      <section className="max-w-6xl mx-auto my-10">
        <div className="p-8 mb-8 flex flex-col md:flex-row gap-8 rounded-lg bg-red-600">
          <div className="flex-1">
            <p className="text-base text-white">
              KFC entered Pakistan in 1997 and since then, it’s been a journey full of excitement and Finger Lickin’ goodness! The first KFC restaurant opened in Pakistan opened in Gulshan Iqbal, Karachi and now our Finger Lickin’ Chicken is available in 37 cities with over 128 restaurants! Being the most loved fast food chain in Pakistan, KFC leaves no stone unturned to provide its customers the most delicious chicken and an excellent dining experience.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white text-red-600 font-bold text-center rounded-lg px-8 py-6 text-lg">
              WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL INGREDIENTS FROM TRUSTED SUPPLIERS
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col md:flex-row gap-8 items-center rounded-lg bg-red-600">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white">History</h3>
            <p className="text-base text-white">
              It all started with Colonel Harland Sanders, the man who convinced the world by saying “We do chicken right!” Sanders took a great deal of time perfecting his iconic secret recipe of 11 herbs and spices, a legacy he’s brought to the world through KFC’s 10,000+ restaurants. Starting from outside of his gas station in Korbin, Kentucky to being a globally recognized face, we owe our success to the Colonel’s hard work and passion for sharing his love for chicken with the world!
            </p>
          </div>
        </div>
      </section>

      {/* Social Responsibility Cards */}
      <section className="max-w-6xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 flex flex-col items-center rounded-lg bg-transparent shadow-none">
            <p className="text-center">Adopted 6 TCF schools since 2014 in Gadaap West, Muzaffargarh, Faisalabad, and Quetta, educating 1700+ students</p>
          </div>
          <div className="p-8 flex flex-col items-center rounded-lg bg-transparent shadow-none">
            <p className="text-center">Proudly running the Deaf Reach KFC Campus and providing education and training to 340 deaf students</p>
          </div>
          <div className="p-8 flex flex-col items-center rounded-lg bg-transparent shadow-none">
            <p className="text-center">Sponsoring higher education of 200+ students across HEC recognized universities in Pakistan</p>
          </div>
          <div className="p-8 flex flex-col items-center rounded-lg bg-transparent shadow-none">
            <p className="text-center">Supporting TEGS – KFC Campus to provide quality education to students in Lahore</p>
          </div>
        </div>
      </section>
    
    </div>
  );
}
