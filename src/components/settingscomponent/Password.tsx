import React from "react";
import CustomInput from "../input/CustomInput";
import { IoIosLock } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../button/Button";

const Password = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div>
      <div className="mt-6">
        <p className="font-bold">Change password</p>
        <p className="text-gray-400 text-sm tracking-wide">
          Choose a new password, something easy to <br /> remember.
        </p>
      </div>
      <form>
        <div className="mt-3">
          <CustomInput
            name="password"
            // value={values.password}
            label="Enter old Password"
            icon={<IoIosLock />}
            rightIcon={
              showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(true)}
                  style={{ cursor: "pointer" }}
                />
              )
            }
            type={showPassword ? "text" : "password"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }} // onChange={(e) => setFieldValue("password", e.target.value)}
          />
        </div>
        {/* new password */}
        <div className="mt-3">
          <CustomInput
            name="password"
            // value={values.password}
            label="Enter new Password"
            icon={<IoIosLock />}
            rightIcon={
              showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(true)}
                  style={{ cursor: "pointer" }}
                />
              )
            }
            type={showPassword ? "text" : "password"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }} // onChange={(e) => setFieldValue("password", e.target.value)}
          />
        </div>
        {/* confirm password */}
        <div className="mt-3">
          <CustomInput
            name="password"
            // value={values.password}
            label="Confirm Password"
            icon={<IoIosLock />}
            rightIcon={
              showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(false)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(true)}
                  style={{ cursor: "pointer" }}
                />
              )
            }
            type={showPassword ? "text" : "password"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }} // onChange={(e) => setFieldValue("password", e.target.value)}
          />
        </div>
        <button className="bg-secondaryBgColor text-white rounded py-2 pl-7 pr-7 mt-7">
          Save
        </button>
      </form>
    </div>
  );
};

export default Password;
