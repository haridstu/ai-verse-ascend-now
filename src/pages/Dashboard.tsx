
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Brain, BookOpen, Award, Clock, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AIVerse
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <User className="w-4 h-4" />
              <span>{user?.email}</span>
            </div>
            <Button variant="outline" onClick={handleSignOut} className="border-red-500/50 text-red-400 hover:bg-red-500/10">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back!</h1>
          <p className="text-gray-300">Continue your AI learning journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                Courses Enrolled
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400">3</div>
              <p className="text-gray-400">Active courses</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Award className="w-5 h-5 mr-2 text-purple-400" />
                Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400">1</div>
              <p className="text-gray-400">Completed</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-green-400" />
                Learning Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">24h</div>
              <p className="text-gray-400">This month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Current Courses</CardTitle>
              <CardDescription className="text-gray-300">Your active learning paths</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Prompt Engineering Mastery</span>
                  <span className="text-gray-400">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Natural Language Processing</span>
                  <span className="text-gray-400">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Computer Vision Fundamentals</span>
                  <span className="text-gray-400">20%</span>
                </div>
                <Progress value={20} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Recent Achievements</CardTitle>
              <CardDescription className="text-gray-300">Your learning milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Prompt Engineering Certificate</div>
                  <div className="text-gray-400 text-sm">Completed 2 days ago</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">First Course Started</div>
                  <div className="text-gray-400 text-sm">1 week ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
