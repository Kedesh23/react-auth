import React from "react";
import { Link } from "react-router-dom";
import Ecole241 from "../../Components/Ecole241";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function Login() {
  return (
    <div className="flex items-center">
      <div className="w-[50%] h-[100vh]">
        <div className=" px-[9em] mt-[1em]">
          <Ecole241 />
          <div className="my-[1em]">
            <h1 className="font-bold text-4xl mb-[1em]">Connexion</h1>
            <p className="text-gray-500 text-xl">
              Saisissez votre email et votre mot de passe pour avoir acces au
              Dashboard
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center my-[1em]">
          <form className="gap-5">
            <div className=" my-[1.5em] flex flex-col">
              <label className="font-bold my-[1em] text-lg" htmlFor="email">
                Email
              </label>
              <Input
                type="text"
                placeholder="Robert@gmail.com"
                id="Email"
                name="email"
                className="bg-[#EEF2FF] border-[#EEF2FF] h-[3em] w-[35em] outline-none rounded-sm"
              />
            </div>
            <div>
              <div className="flex justify-between my-[1em] items-center">
                <label
                  className="font-bold my-[1em] text-lg"
                  htmlFor="password"
                >
                  Mot de passe
                </label>
                <Link to="/forgot" className="font-bold text-lg text-[#3D37A3]">
                  Mot de passe oublie?
                </Link>
              </div>
              <Input
                type="password"
                placeholder="**********"
                id="pwd"
                name="password"
                className="bg-[#EEF2FF] border-[#EEF2FF] h-[3em] w-[35em] outline-none rounded-sm"
              />
            </div>
            <div className="flex gap-5 items-center my-[1em]">
              <div className="w-[2em] h-[2em] bg-[#EEF2FF] rounded-lg"></div>
              <p className="font-bold text-xl">Se souvenir de moi</p>
            </div>
            <Button
              className="bg-[#3D37A3] text-white font-bold text-center w-full py-[1em] rounded-lg text-xl"
              title="Connexion"
            />
          </form>
          <div className="flex justify-between items-center my-[1em] font-bold text-2xl gap-[5px]">
            <p className="text-[#BCBFC5]">Vous n'avez pas un compte?</p>
            <Link to={"/create"} className="text-[#3D37A3]">
              C'est gratuit !
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#3D37A3] w-[50%] h-[100vh]">
        <img src="login.png" className="mt-[5em]" />
        <div className="mx-[7em] my-[5em]">
          <h1 className="text-gray-400 text-lg font-bold my-[2em]">
            ECOLE241.BUSINESS
          </h1>
          <p className="text-white text-3xl">
            Etudier en ligne devient plus facile - <br /> vous pouvez toujours
            etudier avec Ecole <br /> 241 Business
          </p>
        </div>
      </div>
    </div>
  );
}
