"use client";

import { useState } from "react";
import Image from "next/image";
import { Clipboard, X } from "lucide-react";
import CustomInput from "../input/CustomInput";
import { Button } from "flowbite-react/components/Button";

const GoogleAuthenticatorSetup = () => {
  const [verificationCode, setVerificationCode] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleChange = (index: number, value: string) => {
    if (value.match(/\d/) || value === "") {
      const newCodes = [...verificationCode];
      newCodes[index] = value;
      setVerificationCode(newCodes);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 relative">
      <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <X size={20} />
      </button>
      <h2 className="text-xl font-semibold text-center">
        Set up Google Authenticator
      </h2>
      <p className="text-gray-600 text-center text-sm mb-4">
        Follow the guide below to set up Google authenticator for an additional
        layer of security.
      </p>

      <div className="flex justify-center mb-4">
        <Image
          src="/qr-code.png"
          alt="QR Code"
          width={150}
          height={150}
          className="rounded-md"
        />
      </div>

      <div className="flex items-center bg-gray-100 p-2 rounded-md mb-4">
        <input
          type="text"
          value="1KLTG4RS7XCJK9FS"
          className="bg-transparent text-gray-700 text-sm w-full focus:outline-none"
          readOnly
        />
        <button className="text-gray-500 hover:text-gray-700">
          <Clipboard size={16} />
        </button>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        If you have any problem with scanning the QR code, enter this code
        manually into the app.
      </p>

      <div className="text-gray-600 text-sm mb-2">
        Verification code from app:
      </div>
      {/* <div className="flex justify-between gap-2 mb-4">
        {verificationCode.map((digit, index) => (
          <CustomInput
            key={index}
            className="w-10 text-center text-lg p-2 border rounded-md"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div> */}

      <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded-md">
        Enable 2FA
      </Button>

      <div className="mt-4 text-center text-sm text-gray-600">
        Use Google Authenticator app to scan this QR code.{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
          className="text-blue-600 hover:underline"
        >
          Download the app here
        </a>{" "}
        if you don’t already have it.
      </div>
    </div>
  );
};

export default GoogleAuthenticatorSetup;
