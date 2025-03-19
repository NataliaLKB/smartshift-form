import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const AccountLayout = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navigation = [
    { name: 'Dashboard', href: '/account', icon: Home },
    { name: 'Profile', href: '/account/profile', icon: User },
  ];

  const NavLink = ({ item }: { item: { name: string; href: string; icon: React.ElementType } }) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;
    
    return (
      <Link
        to={item.href}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all",
          isActive 
            ? "bg-primary text-primary-foreground" 
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <Icon className="h-4 w-4" />
        <span>{item.name}</span>
      </Link>
    );
  };

  const NavigationItems = () => (
    <>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Account
        </h2>
        <div className="space-y-1">
          {navigation.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>
      </div>
      <div className="px-3 py-2 mt-auto">
        <div className="space-y-1">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#FAF9FA]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-primary">
            SmartShift
          </Link>
          
          {isMobile ? (
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <NavigationItems />
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="flex items-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6 md:py-8 flex">
        {/* Sidebar (desktop only) */}
        {!isMobile && (
          <aside className="w-64 mr-8 shrink-0 hidden md:flex flex-col border rounded-lg bg-white h-[calc(100vh-8rem)] sticky top-20">
            <NavigationItems />
          </aside>
        )}
        
        {/* Main content area */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AccountLayout;
