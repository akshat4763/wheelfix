'use client';
import Image from 'next/image';
import { IndianRupee, Clock, ShieldCheck } from "lucide-react";
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import NavBar from '@/components/ui/navigation-menu';
import Footer from '@/components/ui/footer';
import { supabase } from '@/lib/supabaseConfig';

interface FormData {
  name: string;
  phone: string;
  mechanicType: 'individual' | 'shop';
  workingArea: string;
  shopName: string;
  shopLocation: string;
  shopAddress: string;
}

const MechanicPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    mechanicType: "individual",
    workingArea: "",
    shopName: "",
    shopLocation: "",
    shopAddress: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeField, setActiveField] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    if ((name === "workingArea" || name === "shopLocation") && value.length > 2) {
      fetchLocationSuggestions(value, name);
    } else {
      setShowSuggestions(false);
    }
  };

  const fetchLocationSuggestions = async (query: string, fieldName: string) => {
    const indianLocations = [
      "Gomti Nagar, Lucknow",
      "Hazratganj, Lucknow",
      "Aliganj, Lucknow",
      "Indira Nagar, Lucknow",
      "Alambagh, Lucknow",
      "Mahanagar, Lucknow",
      "Rajajipuram, Lucknow",
      "Chowk, Lucknow",
      "Aminabad, Lucknow",
      "Vikas Nagar, Lucknow",
      "Connaught Place, New Delhi",
      "Karol Bagh, New Delhi",
      "Dwarka, New Delhi",
      "Rohini, New Delhi",
      "Saket, New Delhi",
      "Bandra, Mumbai",
      "Andheri, Mumbai",
      "Powai, Mumbai",
      "Worli, Mumbai",
      "Colaba, Mumbai",
      "Koramangala, Bangalore",
      "Whitefield, Bangalore",
      "Indiranagar, Bangalore",
      "Electronic City, Bangalore",
      "MG Road, Bangalore",
      "Salt Lake, Kolkata",
      "Park Street, Kolkata",
      "Ballygunge, Kolkata",
      "Howrah, Kolkata",
      "Rajarhat, Kolkata"
    ];

    const filtered = indianLocations.filter(location =>
      location.toLowerCase().includes(query.toLowerCase())
    );

    setLocationSuggestions(filtered.slice(0, 5));
    setShowSuggestions(true);
    setActiveField(fieldName);
  };

  const handleLocationSelect = (location: string) => {
    if (activeField === "workingArea" || activeField === "shopLocation") {
      setFormData(prev => ({
        ...prev,
        [activeField]: location
      }));
    }
    setShowSuggestions(false);
    setLocationSuggestions([]);
  };

  const handleMechanicTypeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      mechanicType: value as 'individual' | 'shop',
      ...(value === "individual" && {
        shopName: "",
        shopLocation: "",
        shopAddress: ""
      }),
      ...(value === "shop" && {
        workingArea: ""
      })
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (formData.mechanicType === "individual") {
      if (!formData.workingArea.trim()) {
        newErrors.workingArea = "Working area is required";
      }
    }

    if (formData.mechanicType === "shop") {
      if (!formData.shopName.trim()) {
        newErrors.shopName = "Shop name is required";
      }
      if (!formData.shopLocation.trim()) {
        newErrors.shopLocation = "Shop location is required";
      }
      if (!formData.shopAddress.trim()) {
        newErrors.shopAddress = "Shop address is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const phoneWithCountryCode = `+91${formData.phone}`;
      
      const submissionData = {
        name: formData.name.trim(),
        phone: phoneWithCountryCode,
        mechanic_type: formData.mechanicType,
        working_area: formData.mechanicType === 'individual' ? formData.workingArea.trim() : null,
        shop_name: formData.mechanicType === 'shop' ? formData.shopName.trim() : null,
        shop_location: formData.mechanicType === 'shop' ? formData.shopLocation.trim() : null,
        shop_address: formData.mechanicType === 'shop' ? formData.shopAddress.trim() : null,
      };

      const { data, error } = await supabase
        .from('mechanics')
        .insert([submissionData])
        .select();

      if (error) {
        throw error;
      }

      console.log("Application submitted successfully:", data);
      
      // Show success dialog
      setShowSuccessDialog(true);
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        mechanicType: "individual",
        workingArea: "",
        shopName: "",
        shopLocation: "",
        shopAddress: ""
      });
      
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Please try again later.';
      console.error("Error submitting application:", error);
      setErrorMessage(errorMsg);
      setShowErrorDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
    
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 90 ? prev : prev + Math.random() * 40));
    }, 300);

    const timer = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-8">
        <Image src="/logo.svg" alt="Wheelfix" width={160} height={160} className="w-40 h-40" />
        
        <div className="w-64">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Join as Mechanic.
        </h1>
        <p className="text-4xl md:text-5xl font-bold text-gray-400 mb-12">
          Partner with Wheelfix for verified jobs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-black text-white hover:bg-gray-800 rounded-full px-10 py-6 text-lg font-medium"
            onClick={() => {
              const form = document.getElementById('application-form');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Apply Now
          </Button>
          <Button 
            variant="ghost" 
            className="text-black hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-medium"
            onClick={() => {
              const benefits = document.getElementById('benefits');
              if (benefits) benefits.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Why Join?
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto" id="benefits">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Earn More */}
          <Card className="bg-gray-50 border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 flex flex-col items-start min-h-[400px]">
              <div className="w-32 h-32 bg-white rounded-2xl mb-auto flex items-center justify-center">
                <IndianRupee className="w-16 h-16 text-gray-400" strokeWidth={2.5} />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-black mb-4">Earn More.</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Increase your earnings with more job opportunities every day.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Flexible Schedule */}
          <Card className="bg-gray-50 border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 flex flex-col items-start min-h-[400px]">
              <div className="w-32 h-32 bg-white rounded-full mb-auto flex items-center justify-center">
                <Clock className="w-16 h-16 text-gray-400" strokeWidth={2} />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-black mb-4">Flexible Schedule.</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Work when you want, where you want, across your city.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Verified Customers */}
          <Card className="bg-gray-50 border-0 rounded-3xl overflow-hidden">
            <CardContent className="p-8 flex flex-col items-start min-h-[400px]">
              <div className="w-32 h-32 bg-white rounded-full mb-auto flex items-center justify-center">
                <ShieldCheck className="w-16 h-16 text-gray-400" strokeWidth={2} />
              </div>
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-black mb-4">Verified Customers.</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Get access to pre-verified and secure customer requests.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="px-6 py-20 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Join as a Mechanic
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Start your application below.
          </p>
        </div>

        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-500 text-sm mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-gray-50 border-0 rounded-2xl px-6 py-6 text-base placeholder:text-gray-400 ${
                errors.name ? "ring-2 ring-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-gray-500 text-sm mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
                +91
              </span>
              <Input
                name="phone"
                type="tel"
                placeholder="9876543210"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                className={`w-full bg-gray-50 border-0 rounded-2xl pl-16 pr-6 py-6 text-base placeholder:text-gray-400 ${
                  errors.phone ? "ring-2 ring-red-500" : ""
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
            <p className="text-gray-400 text-xs mt-1">
              Enter 10-digit mobile number (Indian numbers only)
            </p>
          </div>

          {/* Mechanic Type Selection */}
          <div>
            <label className="block text-gray-500 text-sm mb-3">
              Registration Type <span className="text-red-500">*</span>
            </label>
            <RadioGroup
              value={formData.mechanicType}
              onValueChange={handleMechanicTypeChange}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <RadioGroupItem
                  value="individual"
                  id="individual"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="individual"
                  className="flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-50 p-6 peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white cursor-pointer transition"
                >
                  <span className="text-base font-medium">Individual</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="shop"
                  id="shop"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="shop"
                  className="flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-gray-50 p-6 peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white cursor-pointer transition"
                >
                  <span className="text-base font-medium">Shop Owner</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Working Area for Individual */}
          {formData.mechanicType === "individual" && (
            <div className="pt-4 border-t border-gray-200">
              <label className="block text-gray-500 text-sm mb-2">
                Working Area/Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  name="workingArea"
                  type="text"
                  placeholder="e.g., Gomti Nagar, Lucknow"
                  value={formData.workingArea}
                  onChange={handleChange}
                  onFocus={() => formData.workingArea.length > 2 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className={`w-full bg-gray-50 border-0 rounded-2xl px-6 py-6 text-base placeholder:text-gray-400 ${
                    errors.workingArea ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {showSuggestions && activeField === "workingArea" && locationSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-y-auto">
                    {locationSuggestions.map((location, index) => (
                      <div
                        key={index}
                        className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition"
                        onClick={() => handleLocationSelect(location)}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {errors.workingArea && (
                <p className="text-red-500 text-sm mt-1">{errors.workingArea}</p>
              )}
              <p className="text-gray-400 text-xs mt-1">
                Enter the area where you primarily work
              </p>
            </div>
          )}

          {/* Shop Details - Only show if shop owner */}
          {formData.mechanicType === "shop" && (
            <div className="space-y-6 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-black">Shop Details</h3>
              
              {/* Shop Name */}
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  Shop Name <span className="text-red-500">*</span>
                </label>
                <Input
                  name="shopName"
                  type="text"
                  placeholder="Enter shop name"
                  value={formData.shopName}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 border-0 rounded-2xl px-6 py-6 text-base placeholder:text-gray-400 ${
                    errors.shopName ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.shopName && (
                  <p className="text-red-500 text-sm mt-1">{errors.shopName}</p>
                )}
              </div>

              {/* Shop Location */}
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  Shop Location/Area <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    name="shopLocation"
                    type="text"
                    placeholder="e.g., Gomti Nagar, Lucknow"
                    value={formData.shopLocation}
                    onChange={handleChange}
                    onFocus={() => formData.shopLocation.length > 2 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className={`w-full bg-gray-50 border-0 rounded-2xl px-6 py-6 text-base placeholder:text-gray-400 ${
                      errors.shopLocation ? "ring-2 ring-red-500" : ""
                    }`}
                  />
                  {showSuggestions && activeField === "shopLocation" && locationSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-y-auto">
                      {locationSuggestions.map((location, index) => (
                        <div
                          key={index}
                          className="px-6 py-3 hover:bg-gray-50 cursor-pointer transition"
                          onClick={() => handleLocationSelect(location)}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {errors.shopLocation && (
                  <p className="text-red-500 text-sm mt-1">{errors.shopLocation}</p>
                )}
              </div>

              {/* Shop Address */}
              <div>
                <label className="block text-gray-500 text-sm mb-2">
                  Complete Shop Address <span className="text-red-500">*</span>
                </label>
                <Textarea
                  name="shopAddress"
                  placeholder="Enter complete address with pincode"
                  value={formData.shopAddress}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 border-0 rounded-2xl px-6 py-6 text-base placeholder:text-gray-400 min-h-[120px] resize-none ${
                    errors.shopAddress ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.shopAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.shopAddress}</p>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-7 text-lg font-medium mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </section>

      
     {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md rounded-3xl p-8 bg-white [&>button]:hidden">
          <button
            onClick={() => setShowSuccessDialog(false)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-gray-600 z-10"
          >
            ✕
          </button>
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl text-green-600">✓</span>
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-bold text-center text-black">
                Thank You!
              </DialogTitle>
              <DialogDescription className="text-center text-base sm:text-lg text-gray-600 pt-2">
                We'll notify you when Wheelfix launches.
              </DialogDescription>
            </DialogHeader>
          </div>
        </DialogContent>
      </Dialog>
      {/* Error Dialog */}
      <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-red-600">
              Submission Failed
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-4">
              {errorMessage}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowErrorDialog(false)}
              className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3"
            >
              Try Again
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="h-20"></div>
      <Footer />
    </div>
  );
};

export default MechanicPage;