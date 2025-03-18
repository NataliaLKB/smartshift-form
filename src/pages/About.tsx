
import { Navigation } from "@/components/landing/Navigation";
import { FinalCallToAction } from "@/components/landing/FinalCallToAction";
import { Info, Users, Zap, Globe, BarChart, ArrowRight, Briefcase, GraduationCap, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section - Enhanced with gradient background */}
        <section className="py-24 bg-gradient-to-r from-[#038B8D]/20 to-[#038B8D]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 text-gray-800">About SmartShift</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Helping homeowners find the perfect smart energy tariff to save money and reduce their carbon footprint.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Section - Added image shape and improved spacing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute -top-10 -left-20 w-40 h-40 bg-[#038B8D]/10 rounded-full blur-3xl -z-10 opacity-70"></div>
              <h2 className="text-3xl font-bold mb-10 text-center relative">
                <span className="relative inline-block">
                  Our Mission
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#038B8D]/30 rounded-full"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SmartShift, we're on a mission to simplify the complex world of energy tariffs. We believe that every homeowner should have access to clear, personalized information about their energy options.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Using advanced data analysis and a deep understanding of the energy market, we match you with the perfect smart tariff based on your unique usage patterns and preferences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to empower you to make informed decisions that benefit both your wallet and the planet.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section - Enhanced with improved card styling */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span className="relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#038B8D]/30 rounded-full"></span>
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 border-[#038B8D]/20 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-gradient-to-r from-[#038B8D]/20 to-[#038B8D]/5 p-6">
                  <div className="inline-flex p-3 bg-white rounded-full mb-4 shadow-md">
                    <BarChart className="w-8 h-8 text-[#038B8D]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Smart Tariff Analysis</h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We analyse your electricity usage patterns and match you with the most suitable smart tariff options available to you.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>We save people up to 50% off their electricity bill</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data driven recommendation based your electricity consumption patterns</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#038B8D] mr-2 mt-0.5 flex-shrink-0" />
                      <span>Full coverage of all smart import and export tariffs</span>
                    </li>
                  </ul>
                  <Button variant="outline" size="sm" className="text-[#038B8D] border-[#038B8D]/30 hover:bg-[#038B8D]/10" asChild>
                    <Link to="/import-export">Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-2 border-[#038B8D]/20 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-gradient-to-r from-[#038B8D]/20 to-[#038B8D]/5 p-6">
                  <div className="inline-flex p-3 bg-white rounded-full mb-4 shadow-md">
                    <Zap className="w-8 h-8 text-[#038B8D]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Energy Optimization</h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    We help you make the most of your smart tariff by identifying opportunities to optimize your energy consumption.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
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
                  <Button variant="outline" size="sm" className="text-[#038B8D] border-[#038B8D]/30 hover:bg-[#038B8D]/10" asChild>
                    <Link to="/import-export">Learn more</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Team Section - Updated to show 6 team members with simplified information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-14 text-center relative">
              <span className="relative inline-block">
                Meet Our Team
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#038B8D]/30 rounded-full"></span>
              </span>
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Team Member 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-[#038B8D]/20">
                      <AvatarFallback className="bg-[#038B8D]/10 text-[#038B8D] text-xl font-bold">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">Sarah Johnson</h3>
                    <p className="text-[#038B8D] mb-2">CEO & Founder</p>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-[#038B8D]/20">
                      <AvatarFallback className="bg-[#038B8D]/10 text-[#038B8D] text-xl font-bold">
                        DR
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">David Roberts</h3>
                    <p className="text-[#038B8D] mb-2">CTO</p>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-[#038B8D]/20">
                      <AvatarFallback className="bg-[#038B8D]/10 text-[#038B8D] text-xl font-bold">
                        MP
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">Maya Patel</h3>
                    <p className="text-[#038B8D] mb-2">Head of Customer Success</p>
                  </div>
                </div>
                
                {/* Team Member 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-[#038B8D]/20">
                      <AvatarFallback className="bg-[#038B8D]/10 text-[#038B8D] text-xl font-bold">
                        JL
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">James Lee</h3>
                    <p className="text-[#038B8D] mb-2">Lead Developer</p>
                  </div>
                </div>
                
                {/* Team Member 5 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-[#038B8D]/20">
                      <AvatarFallback className="bg-[#038B8D]/10 text-[#038B8D] text-xl font-bold">
                        EC
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">Emma Chen</h3>
                    <p className="text-[#038B8D] mb-2">Data Scientist</p>
                  </div>
                </div>
                
                {/* Team Member 6 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-[#038B8D]/20">
                      <AvatarFallback className="bg-[#038B8D]/10 text-[#038B8D] text-xl font-bold">
                        RH
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">Robert Harris</h3>
                    <p className="text-[#038B8D] mb-2">Energy Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section - Enhanced with better spacing and animations */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-14 text-center relative">
              <span className="relative inline-block">
                Our Values
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#038B8D]/30 rounded-full"></span>
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mb-5 inline-flex p-4 bg-[#038B8D]/10 rounded-full">
                  <Users className="w-6 h-6 text-[#038B8D]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Customer First</h3>
                <p className="text-gray-600">Your needs and preferences are at the center of everything we do.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mb-5 inline-flex p-4 bg-[#038B8D]/10 rounded-full">
                  <Info className="w-6 h-6 text-[#038B8D]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Transparency</h3>
                <p className="text-gray-600">We provide clear, honest information so you can make the best decisions.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mb-5 inline-flex p-4 bg-[#038B8D]/10 rounded-full">
                  <Zap className="w-6 h-6 text-[#038B8D]" />
                </div>
                <h3 className="font-bold text-xl mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously improve our technology to deliver better recommendations.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mb-5 inline-flex p-4 bg-[#038B8D]/10 rounded-full">
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
