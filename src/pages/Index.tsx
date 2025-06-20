import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Zap, Users, Star, ChevronRight, Brain, Code, Eye, MessageSquare, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-['Inter',_'system-ui',_sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Poppins',_sans-serif]">
              AIVerse
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-300 hover:text-white transition-colors font-medium">Courses</a>
            <a href="#tools" className="text-gray-300 hover:text-white transition-colors font-medium">Tools</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors font-medium">Community</a>
            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                >
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={handleSignOut}
                  className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => navigate('/auth')}
                  className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate('/auth')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Start Learning
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-3xl rounded-full"></div>
            <h1 className="relative text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in font-['Poppins',_sans-serif]">
              Learn AI.
              <br />
              Build Tomorrow.
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in font-light">
            Master artificial intelligence with cutting-edge courses, hands-on tools, and a vibrant community of learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            {user ? (
              <Button
                size="lg"
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 font-semibold"
              >
                <User className="w-5 h-5 mr-2" />
                Go to Dashboard
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={() => navigate('/auth')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
            )}
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold">
              Explore Courses
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2 font-['Poppins',_sans-serif]">50K+</div>
              <div className="text-gray-300 font-medium">Students</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2 font-['Poppins',_sans-serif]">200+</div>
              <div className="text-gray-300 font-medium">Courses</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-3xl font-bold text-pink-400 mb-2 font-['Poppins',_sans-serif]">15+</div>
              <div className="text-gray-300 font-medium">AI Tools</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2 font-['Poppins',_sans-serif]">98%</div>
              <div className="text-gray-300 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-['Poppins',_sans-serif]">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              From beginner fundamentals to advanced AI applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prompt Engineering Mastery",
                description: "Learn to craft powerful prompts for AI models",
                level: "Beginner",
                duration: "4 weeks",
                price: "Free",
                image: "photo-1486312338219-ce68d2c6f44d",
                icon: MessageSquare
              },
              {
                title: "Natural Language Processing",
                description: "Deep dive into NLP techniques and applications",
                level: "Intermediate", 
                duration: "8 weeks",
                price: "$99",
                image: "photo-1487058792275-0ad4aaf24ca7",
                icon: BookOpen
              },
              {
                title: "Computer Vision Fundamentals",
                description: "Build AI systems that can see and understand",
                level: "Advanced",
                duration: "12 weeks", 
                price: "$149",
                image: "photo-1518770660439-4636190af475",
                icon: Eye
              }
            ].map((course, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${course.image}?w=400&h=300&fit=crop`}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600/80 text-white font-medium">
                    {course.level}
                  </Badge>
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <course.icon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">{course.duration}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white font-['Poppins',_sans-serif]">{course.title}</CardTitle>
                  <CardDescription className="text-gray-300 font-light">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-400 font-['Poppins',_sans-serif]">{course.price}</span>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-['Poppins',_sans-serif]">
              AI Tools Hub
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Explore and master the latest AI tools with guided tutorials
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ChatGPT", icon: MessageSquare, category: "Language" },
              { name: "Midjourney", icon: Eye, category: "Image Generation" },
              { name: "GitHub Copilot", icon: Code, category: "Code Assistant" },
              { name: "Claude", icon: Brain, category: "AI Assistant" }
            ].map((tool, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 font-['Poppins',_sans-serif]">{tool.name}</h3>
                  <p className="text-gray-400 text-sm font-medium">{tool.category}</p>
                  <Button variant="outline" className="mt-4 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 w-full font-semibold">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-['Poppins',_sans-serif]">
              What Our Students Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Data Scientist",
                content: "AIVerse transformed my understanding of machine learning. The courses are incredibly well-structured and practical.",
                rating: 5
              },
              {
                name: "Marcus Rodriguez",
                role: "Software Engineer", 
                content: "The AI tools section is a game-changer. I learned to integrate GPT-4 into my projects in just one week.",
                rating: 5
              },
              {
                name: "Emily Watson",
                role: "Product Manager",
                content: "Finally, AI education that's accessible and engaging. The community support is outstanding.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 font-light italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white font-['Poppins',_sans-serif]">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 font-medium">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Poppins',_sans-serif]">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Join thousands of learners building tomorrow's AI solutions today.
          </p>
          {user ? (
            <Button
              size="lg"
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-12 py-6 font-semibold"
            >
              <User className="w-5 h-5 mr-2" />
              Continue Learning
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={() => navigate('/auth')}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-12 py-6 font-semibold"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white font-['Poppins',_sans-serif]">AIVerse</span>
              </div>
              <p className="text-gray-400 font-light">Learn AI. Build Tomorrow.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 font-['Poppins',_sans-serif]">Courses</h3>
              <ul className="space-y-2 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Prompt Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Computer Vision</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 font-['Poppins',_sans-serif]">Tools</h3>
              <ul className="space-y-2 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">ChatGPT Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Midjourney Tutorial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub Copilot</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 font-['Poppins',_sans-serif]">Community</h3>
              <ul className="space-y-2 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 font-light">
            <p>&copy; 2024 AIVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
