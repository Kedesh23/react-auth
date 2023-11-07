import React from "react";
import { Link } from "react-router-dom";
import Ecole241 from "../../Components/Ecole241";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

export default function Login(){
    return (
        <div className="flex">
            <div className="w-[50%] h-full">
                <div className=" px-[9em] mt-[3em]">
                    <Ecole241/>
                    <div className="my-[5em]">
                        <h1 className="font-bold text-4xl mb-[1em]">Connexion</h1> 
                        <p className="text-gray-500 text-2xl">Saisissez votre email et votre mot de passe pour avoir  acces au Dashboard</p>
                    </div>
                </div>
                <div className="flex flex-col items-center my-[3em]">
                    <form className="gap-5">
                        <div className=" my-[3em]">
                            <p className="font-bold my-[1em]">Email</p>
                            <Input type = "text" placeholder = "Robert@gmail.com" className="bg-[#EEF2FF] border-[#EEF2FF] border-transparentm h-[5em] w-[35em] outline-none rounded-sm"/>
                        </div>
                        <div>
                            <div className="flex justify-between my-[1em]">
                                <p className="font-bold">Mot de passe</p>
                                <Link to="/Reset" className="font-bold text-[#3D37A3]">Mot de passe oublie?</Link>
                            </div>
                            <Input type = "password" placeholder = "Mot de passe" className="bg-[#EEF2FF] border-[#EEF2FF] border-transparentm h-[5em] w-[35em] outline-none rounded-sm"/>
                        </div>
                        <div className="flex gap-5 items-center my-[3em]">
                            <div className="w-[3em] h-[3em] bg-[#EEF2FF]"></div>
                            <p className="font-bold text-xl">Se souvenir de moi</p>
                        </div>
                        <Button className="bg-[#3D37A3] text-white font-bold text-center px-[11.4em] py-[1.5em] rounded-lg text-xl" title="Connexion"/>
                    </form>
                    <div className="flex justify-between items-center my-[3em] font-bold text-2xl">
                        <p className="text-[#BCBFC5]">Vous n'avez pas un compte?</p>
                        <p className="text-[#3D37A3]">C'est gratuit !</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#3D37A3] w-[50%] ">
                <img src = "login.png" className="mt-[5em]"/>
                <div className="mx-[7em] my-[5em]">
                    <h1 className="text-gray-400 font-bold my-[2em]">ECOLE241.BUSINESS</h1>
                    <p className="text-white text-3xl">Etudier en ligne devient plus facile - <br/> vous pouvez toujours etudier avec Ecole <br/> 241 Business</p>
                </div>
            </div>
        </div>
    )
}