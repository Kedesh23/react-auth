import React from 'react';
import Ecole from '../../Components/Ecole241';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

export default function Reset(){
    return (
        <div className='flex justify-between items-center h-[100vh]'>
            <div className="w-1/2 h-[100vh]">
                <div className=" px-[9em] mt-[1em]">
                    <Ecole/>
                    <div className='my-[3em]'>
                        <p className="font-bold text-3xl mb-[1em]">Reinitialisation de mot de passe</p>
                        <p className="text-gray-500 text-xl">N'utilisez pas de mot de passe difficile a utiliser, ce serait <br/> un probleme pour les gens</p>
                    </div>
                </div>
                <form className='flex justify-center'>
                    <div>
                        <div className=" my-[1.5em] flex flex-col">
                            <label htmlFor='password' className='font-bold text-lg my-[1em]'>Nouveau mot de passe</label>
                            <Input type = "password" placeholder = "**********" id = "pwd" name = "password" className="bg-[#EEF2FF] border-[#EEF2FF] h-[4em] w-[35em] outline-none rounded-sm"/>
                        </div>
                        <div className=" my-[1.5em] flex flex-col">
                            <label htmlFor='reset' className='font-bold text-lg my-[1em]'>Ressaissez le nouveau mot de passe</label>
                            <Input type = "password" placeholder = "********" id = "resetpwd" name = "reset" className="bg-[#EEF2FF] border-[#EEF2FF] h-[4em] w-[35em] outline-none rounded-sm"/>
                        </div>
                        <Button className="bg-[#3D37A3] text-white font-bold text-center w-full py-[1.5em] rounded-lg text-xl" title="Confirmer la reinitialisation"/>
                    </div>
                </form>
            </div>
            <div className="bg-[#3D37A3] w-1/2 h-[100vh]">
                <img src = "reset.png" className="mt-[5em]"/>
                <div className="mx-[7em] my-[5em]">
                    <h1 className="text-gray-400 text-lg font-bold my-[2em]">ECOLE241.BUSINESS</h1>
                    <p className="text-white text-3xl">Etudier en ligne devient plus facile - <br/> vous pouvez toujours etudier avec Ecole <br/> 241 Business</p>
                </div>
            </div>
        </div>
    )
}