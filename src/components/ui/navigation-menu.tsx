'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, MapPin, X, Menu } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const typingCities = ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Hyderabad', 'Chennai', 'Pune'];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [isDetecting, setIsDetecting] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loginStep, setLoginStep] = useState('phone');
  const [otp, setOtp] = useState('');
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  const cities = [
    'Lucknow', 'New Delhi', 'Mumbai', 'Bangalore', 'Kolkata',
    'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Jaipur',
    'Surat', 'Kanpur', 'Nagpur', 'Indore', 'Vadodara'
  ];

  useEffect(() => {
    detectLocation();
  }, []);

  useEffect(() => {
    const currentCity = typingCities[currentCityIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentCity.length) {
          setDisplayText(currentCity.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentCityIndex((prev) => (prev + 1) % typingCities.length);
        } else {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentCityIndex]);

  const detectLocation = () => {
    setIsDetecting(true);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
            );
            const data = await response.json();
            
            const city = data.address.city || 
                        data.address.town || 
                        data.address.village || 
                        data.address.state_district ||
                        'Lucknow';
            
            setSelectedLocation(city);
            setIsDetecting(false);
          } catch (error) {
            console.error('Error fetching location:', error);
            setSelectedLocation('Lucknow');
            setIsDetecting(false);
          }
        },
        () => {
          setSelectedLocation('Lucknow');
          setIsDetecting(false);
        }
      );
    } else {
      setSelectedLocation('Lucknow');
      setIsDetecting(false);
    }
  };

  const handleLocationSelect = (city: string) => {
    setSelectedLocation(city);
    setLocationOpen(false);
  };

  const handleLogin = () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    if (!agreedToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    console.log('Sending OTP to:', `+91${phoneNumber}`);
    setLoginStep('otp');
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    console.log('Verifying OTP:', otp);
    alert('Logged in successfully!');
    setLoginOpen(false);
    setLoginStep('phone');
    setPhoneNumber('');
    setOtp('');
    setAgreedToTerms(false);
  };

  const handleResendOTP = () => {
    console.log('Resending OTP to:', `+91${phoneNumber}`);
    alert('OTP resent successfully!');
  };

  const handleBackToPhone = () => {
    setLoginStep('phone');
    setOtp('');
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="WheelFix"
                  width={200}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/mechanic" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
              >
                Join as Mechanic
              </Link>

              <Link 
                href="/services" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
              >
                Services
              </Link>

              <Link 
                href="/business" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
              >
                Business
              </Link>

              <div className="relative group">
                <button className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors flex items-center gap-1">
                  About
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/faq" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">FAQs</Link>
                  <Link href="/terms" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">Terms of Service</Link>
                  <Link href="/privacy" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">Privacy Policy</Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100">Support</Link>
                </div>
              </div>
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative group">
                <button 
                  className="flex items-center gap-2 text-gray-900 hover:text-gray-600 text-sm font-medium"
                  onClick={detectLocation}
                >
                  <MapPin size={16} />
                  <span className="truncate max-w-[120px]">
                    {isDetecting ? 'Detecting...' : 
                     selectedLocation === 'Select Location' ? (
                       <span>
                         {displayText}
                         <span className="animate-pulse">|</span>
                       </span>
                     ) : selectedLocation}
                  </span>
                  <ChevronDown size={16} />
                </button>
                
                <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all max-h-80 overflow-y-auto">
                  <button
                    onClick={detectLocation}
                    className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 font-medium border-b"
                  >
                    🎯 Detect my location
                  </button>
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleLocationSelect(city)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        selectedLocation === city ? 'bg-gray-50 font-medium' : 'text-gray-900'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <Link 
                href="/support" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
              >
                Help
              </Link>

              <button 
                onClick={() => setLoginOpen(true)}
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800"
              >
                Log In
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-2">
              <Link 
                href="/mechanic"
                className="text-gray-900 text-xs font-medium hover:text-gray-600"
              >
                Join as Mechanic
              </Link>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <Link 
                href="/services" 
                className="block px-4 py-3 text-gray-900 hover:bg-gray-100 text-sm font-medium"
              >
                Services
              </Link>

              <Link 
                href="/business" 
                className="block px-4 py-3 text-gray-900 hover:bg-gray-100 text-sm font-medium"
              >
                Business
              </Link>

              <div className="px-4 py-3">
                <p className="text-sm font-medium text-gray-900 mb-2">About</p>
                <Link href="/faq" className="block px-4 py-2 text-xs text-gray-600 hover:text-gray-900">FAQs</Link>
                <Link href="/terms" className="block px-4 py-2 text-xs text-gray-600 hover:text-gray-900">Terms of Service</Link>
                <Link href="/privacy" className="block px-4 py-2 text-xs text-gray-600 hover:text-gray-900">Privacy Policy</Link>
                <Link href="/contact" className="block px-4 py-2 text-xs text-gray-600 hover:text-gray-900">Support</Link>
              </div>

              <div className="px-4 py-3 border-t border-gray-200">
                <button 
                  onClick={detectLocation}
                  className="w-full flex items-center gap-2 text-gray-900 text-sm font-medium py-2 hover:text-gray-600"
                >
                  <MapPin size={16} />
                  <span>
                    {isDetecting ? 'Detecting...' : selectedLocation}
                  </span>
                </button>
                {locationOpen && (
                  <div className="mt-2 bg-gray-50 rounded py-2 max-h-48 overflow-y-auto">
                    <button
                      onClick={() => {
                        detectLocation();
                        setLocationOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 font-medium border-b"
                    >
                      🎯 Detect my location
                    </button>
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleLocationSelect(city)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          selectedLocation === city ? 'bg-white font-medium' : 'text-gray-900'
                        }`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/support" 
                className="block px-4 py-3 text-gray-900 hover:bg-gray-100 text-sm font-medium border-t border-gray-200"
              >
                Help
              </Link>

              <button 
                onClick={() => setLoginOpen(true)}
                className="w-full mx-4 mt-3 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800"
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Login Dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white border-0 max-h-[90vh] overflow-y-auto">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Branding (Hidden on Mobile) */}
            <div className="hidden md:flex flex-col justify-center items-center bg-black p-12 text-white">
              <div className="mb-8">
                <Image
                  src="/logo.svg"
                  alt="WheelFix"
                  width={200}
                  height={60}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center">
                India&apos;s #1 Roadside Assistance
              </h2>
              <p className="text-gray-300 text-center text-lg mb-8">
                Get instant help wherever you are, 24/7
              </p>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-6 md:p-12 bg-white">
              {loginStep === 'phone' ? (
                <>
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl font-bold text-black">
                      Welcome to WheelFix
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Enter your phone number to get started
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
                          +91
                        </span>
                        <Input
                          type="tel"
                          placeholder="Mobile Number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                          maxLength={10}
                          className="pl-14 h-12 text-base bg-gray-50 border-gray-200"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        You&apos;ll receive an OTP for verification
                      </p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                      >
                        I agree to the{' '}
                        <Link href="/terms" className="text-black font-medium hover:underline">
                          Terms of Service
                        </Link>
                        {' '}and{' '}
                        <Link href="/privacy" className="text-black font-medium hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button
                      onClick={handleLogin}
                      className="w-full h-12 text-base font-medium bg-black text-white hover:bg-gray-800"
                      disabled={!phoneNumber || phoneNumber.length !== 10 || !agreedToTerms}
                    >
                      Continue
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl font-bold text-black">
                      Verify OTP
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Enter the 6-digit code sent to +91 {phoneNumber}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="flex flex-col items-center">
                      <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={(value) => setOtp(value)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} className="border-gray-300" />
                          <InputOTPSlot index={1} className="border-gray-300" />
                          <InputOTPSlot index={2} className="border-gray-300" />
                          <InputOTPSlot index={3} className="border-gray-300" />
                          <InputOTPSlot index={4} className="border-gray-300" />
                          <InputOTPSlot index={5} className="border-gray-300" />
                        </InputOTPGroup>
                      </InputOTP>
                      <p className="text-xs text-gray-500 mt-3">
                        Please enter the OTP sent to your phone
                      </p>
                    </div>

                    <Button
                      onClick={handleVerifyOTP}
                      className="w-full h-12 text-base font-medium bg-black text-white hover:bg-gray-800"
                      disabled={otp.length !== 6}
                    >
                      Verify &amp; Continue
                    </Button>

                    <div className="text-center">
                      <p className="text-sm text-gray-600">
                        Didn&apos;t receive the code?{' '}
                        <button
                          onClick={handleResendOTP}
                          className="text-black font-medium hover:underline"
                        >
                          Resend OTP
                        </button>
                      </p>
                    </div>

                    <div className="text-center">
                      <button
                        onClick={handleBackToPhone}
                        className="text-sm text-gray-600 hover:text-black font-medium"
                      >
                        {`← Change phone number`}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NavBar;