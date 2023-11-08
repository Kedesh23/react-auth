import React from 'react';
import Ecole from '../../Components/Ecole241';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';

export default function Forgot(){
    return(
        <div className='flex justify-between'>
            <div className='w-[50%] h-full'>
                <div className='ml-[7em] mt-[3em]'>
                    <Ecole/>
                    <div className='my-[1em]'>
                        <p className='font-bold text-4xl my-[1em]'>Mot de passe oublie</p>
                        <p className='text-gray-500 text-xl'>Saisissez votre email pour recuperer votre mot de passe, <br/> vous allez recevoir une email confirmer la la demande de <br/> reinitialisation</p>
                    </div>
                </div>
                <form className='flex justify-center'>
                    <div>
                        <div className='flex flex-col gap-[10px] my-[3em]'>
                            <label htmlFor='email' className='font-bold text-lg'>Email</label>
                            <Input type = "email" id = "mail" name = "email" placeholder = "boussougou@gmail.com" className = "outline-none py-[1.5em] bg-[#EEF2FF] rounded-lg w-[35em]"/>
                        </div>
                        <Button className="bg-[#3D37A3] text-white font-bold text-center w-full py-[1.5em] rounded-lg text-xl" title="Confirmer"/>
                    </div>
                </form>
                <div className="flex justify-center items-center my-[1em] font-bold text-2xl gap-[5px]">
                    <p className='text-[#BCBFC5]'>Je me souviens de mon mot de passe?</p>
                    <Link to = {"/"} className="text-[#3D37A3]">Connexion</Link>
                </div>
            </div>
            <div className="bg-[#3D37A3] w-[50%] h-[100%]">
                <img src = "forgot.png"/>
                <div className="mx-[7em] my-[5em]">
                    <h1 className="text-gray-400 text-lg font-bold my-[2em]">ECOLE241.BUSINESS</h1>
                    <p className="text-white text-3xl">Etudier en ligne devient plus facile - <br/> vous pouvez toujours etudier avec Ecole <br/> 241 Business</p>
                </div>
            </div>
        </div>
    )
}