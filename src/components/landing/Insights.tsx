
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, LineChart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    icon: <Lightbulb className="w-8 h-8 text-[#038B8D]" />,
    title: "Understanding Smart Meter Benefits",
    description: "Discover how smart meters can help you track and reduce your energy consumption in real-time.",
    link: "/insights/smart-meters"
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#038B8D]" />,
    title: "Peak vs Off-Peak Usage",
    description: "Learn how to save money by shifting your energy usage to off-peak hours with smart tariffs.",
    link: "/insights/peak-hours"
  },
  {
    icon: <Zap className="w-8 h-8 text-[#038B8D]" />,
    title: "Maximizing Energy Efficiency",
    description: "Tips and tricks to reduce your energy consumption and lower your monthly bills.",
    link: "/insights/energy-efficiency"
  }
];

export const Insights = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about energy saving tips and smart tariff optimization
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4">{article.icon}</div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{article.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={article.link}>
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
