
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Admin credentials (in production, this should be in environment variables)
const ADMIN_CREDENTIALS = {
  username: 'svr@gmail.com',
  password: 'svrpoultry'
};

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple credential validation
    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      // Store admin session (simple approach)
      localStorage.setItem('adminAuthenticated', 'true');
      
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      
      navigate('/svr-admin/dashboard');
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please check your username and password",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
            <p className="text-gray-600 mt-2">Access the admin dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-gray-700 font-medium">
                  Username
                </Label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={credentials.username}
                    onChange={handleChange}
                    className="pl-10 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative mt-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={credentials.password}
                    onChange={handleChange}
                    className="pl-10 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg py-3 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Demo credentials:</p>
              <p>Username: svr@gmail.com | Password: svrpoultry</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
