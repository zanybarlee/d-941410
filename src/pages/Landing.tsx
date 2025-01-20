import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Landing = () => {
  return (
    <BackgroundGradientAnimation 
      gradientBackgroundStart="rgb(234, 56, 76)" 
      gradientBackgroundEnd="rgb(255, 255, 255)"
      className="relative min-h-screen"
    >
      {/* Navigation */}
      <nav className="relative z-10 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/5d0792c7-11b1-4e59-af76-3c687201c682.png" 
                alt="Aptiv8 Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth" className="text-white hover:text-aptiv-light transition-colors">
                Sign in
              </Link>
              <Link to="/auth">
                <Button className="bg-white hover:bg-gray-100 text-aptiv hover:text-aptiv-dark transition-colors">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative pt-20 pb-32 sm:pt-24 sm:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Talent Matching
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
              Save 80% on recruitment costs with our intelligent CV matching system
            </p>
            <Link to="/auth">
              <Button className="bg-white hover:bg-gray-100 text-aptiv hover:text-aptiv-dark text-lg px-8 py-6 rounded-lg transition-colors">
                Start Hiring Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aptiv-gray-700 mb-4">
              How does it work?
            </h2>
            <p className="text-lg text-aptiv-gray-500 max-w-2xl mx-auto">
              Our AI system connects and engages candidates directly, automating the entire process
              to reduce costs and improve efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Matching",
                description: "Advanced algorithms match candidates to your job requirements with high accuracy"
              },
              {
                title: "Automated Screening",
                description: "Pre-screen candidates automatically based on your specific criteria"
              },
              {
                title: "Quick Hiring",
                description: "Reduce time-to-hire with our streamlined recruitment process"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-aptiv/10"
              >
                <div className="w-12 h-12 bg-aptiv/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <div className="w-6 h-6 text-aptiv">
                    {/* Icon placeholder */}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-aptiv-gray-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-aptiv-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-aptiv/90 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to transform your hiring process?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already using our AI-powered recruitment solution
          </p>
          <Link to="/auth">
            <Button className="bg-white hover:bg-gray-100 text-aptiv hover:text-aptiv-dark text-lg px-8 py-6 rounded-lg transition-colors">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Landing;