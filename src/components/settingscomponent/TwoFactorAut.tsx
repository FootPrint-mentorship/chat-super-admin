import { useState } from "react";
import { Card, CardContent } from "./TwoFactorCard";
import { Switch } from "./Switch";
import { Copy, Check } from "lucide-react";

export default function TwoFactorAuth() {
  const [googleAuthEnabled, setGoogleAuthEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [backupCode, setBackupCode] = useState("1KL7G57XCJ9FS");
  const [phoneNumber, setPhoneNumber] = useState("8813229534");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(backupCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-full mx-auto pt-8 space-y-4">
      <Card className="border border-green-300">
        <CardContent className="p-4 flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Google Authenticator</h3>
              <p className="text-sm text-gray-600">
                Use the Google Authenticator app to generate one-time security
                codes
              </p>
            </div>
            <Switch
              checked={googleAuthEnabled}
              onCheckedChange={setGoogleAuthEnabled}
            />
          </div>
          {googleAuthEnabled && (
            <div className="mt-2 text-sm text-gray-700">
              <p className="flex items-center gap-2 text-green-600">
                <Check size={16} /> Added June 20, 2021
              </p>
              <p className="flex items-center gap-2">
                Backup code:{" "}
                <span className="font-mono text-gray-900">{backupCode}</span>
                <button
                  onClick={handleCopy}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {copied ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} className=" " />
                  )}
                </button>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="border border-green-300">
        <CardContent className="p-4 flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Text message (SMS)</h3>
              <p className="text-sm text-gray-600">
                Use your phone number to receive one-time security codes
              </p>
            </div>
            <Switch checked={smsEnabled} onCheckedChange={setSmsEnabled} />
          </div>
          {smsEnabled && (
            <div className="mt-2 text-sm text-gray-700 flex">
              <p className="flex  gap-2 text-green-600">
                <Check size={16} /> Added July 5, 2021
              </p>
              <p>
                Binded Phone number:{" "}
                <span className="font-mono text-gray-900">{phoneNumber}</span>
                <button className="text-blue-500 ml-2 hover:text-blue-700">
                  Change
                </button>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
