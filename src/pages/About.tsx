
import { Navigation } from "@/components/landing/Navigation";
import { FinalCallToAction } from "@/components/landing/FinalCallToAction";
import { Info, Users, Zap, Globe, BarChart, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#038B8D]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About SmartShift</h1>
              <p className="text-xl text-gray-600">
                Helping homeowners find the perfect smart energy tariff to save money and reduce their carbon footprint.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At SmartShift, we're on a mission to simplify the complex world of energy tariffs. We believe that every homeowner should have access to clear, personalized information about their energy options.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Using advanced data analysis and a deep understanding of the energy market, we match you with the perfect smart tariff based on your unique usage patterns and preferences.
              </p>
              <p className="text-lg text-gray-600">
                Our goal is to empower you to make informed decisions that benefit both your wallet and the planet.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 border-[#038B8D]/20 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#038B8D]/10 p-6">
                  <div className="inline-flex p-3 bg-white rounded-full mb-4">
                    <BarChart className="w-8 h-8 text-[#038B8D]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Smart Tariff Matching</h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    We analyze your energy usage patterns and match you with the most suitable smart tariff options from trusted providers.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personalized recommendations based on your consumption</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Comparison of potential savings across different tariffs</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Clear breakdown of terms and conditions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-2 border-[#038B8D]/20 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#038B8D]/10 p-6">
                  <div className="inline-flex p-3 bg-white rounded-full mb-4">
                    <Zap className="w-8 h-8 text-[#038B8D]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Energy Optimization</h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    We help you make the most of your smart tariff by identifying opportunities to optimize your energy consumption.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Smart device usage recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Peak and off-peak consumption guidance</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Renewable energy integration advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex p-3 bg-[#038B8D]/10 rounded-full">
                  <Users className="w-6 h-6 text-[#038B8D]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Customer First</h3>
                <p className="text-gray-600">Your needs and preferences are at the center of everything we do.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex p-3 bg-[#038B8D]/10 rounded-full">
                  <Info className="w-6 h-6 text-[#038B8D]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Transparency</h3>
                <p className="text-gray-600">We provide clear, honest information so you can make the best decisions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex p-3 bg-[#038B8D]/10 rounded-full">
                  <Zap className="w-6 h-6 text-[#038B8D]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously improve our technology to deliver better recommendations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4 inline-flex p-3 bg-[#038B8D]/10 rounded-full">
                  <Globe className="w-6 h-6 text-[#038B8D]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Sustainability</h3>
                <p className="text-gray-600">We're committed to promoting energy choices that benefit the environment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <FinalCallToAction />
    </div>
  );
};

export default About;
