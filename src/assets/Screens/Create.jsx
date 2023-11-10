import React from 'react';
import Ecole from '../../Components/Ecole241';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { Link } from 'react-router-dom';

export default function(){
    return(
        <div className='flex items-center'>
            <div className='w-[50%] h-full py-[2em]'> 
                <div className='ml-[7em] mt-[3em]'>
                    <Ecole/>
                    <div className='my-[1em]'>
                        <p className='font-bold text-3xl'>Creer un compte</p>
                        <p className='text-gray-500'>Ce n'est pas difficile, il suffit de saisir quelques donnees</p>
                    </div>
                </div>
                <form className='flex justify-center'>
                    <div>
                        <div className='my-[1em]'>
                            <label htmlFor='name' className='font-bold text-lg'>Nom complet</label>
                            <div className='flex justify-between mt-[5px]'>
                                <Input type = "text" placeholder = "Nom" id = "lastname" name = "name" className = " outline-none py-[1em] bg-[#EEF2FF] rounded-lg w-[17em]"/>
                                <Input type = "text" placeholder = "Prenom" id = "firstname" name = "name" className = "outline-none py-[1em] bg-[#EEF2FF] rounded-lg w-[17em]"/>
                            </div>
                        </div>
                        <div className='flex flex-col my-[1em] gap-[5px]'>
                            <label htmlFor='email' className='font-bold text-lg'>Email</label>
                            <Input type = "email" placeholder = "sevan11@gmail.com" id = "mail" name = "email" className = "outline-none py-[1em] bg-[#EEF2FF] rounded-lg w-[40em]"/>
                        </div>
                        <div className='flex flex-col my-[1em] gap-[5px]'>
                            <label htmlFor='password' className='font-bold text-lg'>Mot de passe</label>
                            <Input type = "password" placeholder = "**********" id = "pwd" name = "password" className = "outline-none py-[1em] bg-[#EEF2FF] rounded-lg w-[40em]"/>
                        </div>
                        <div className='my-[1em]'>
                            <p className='text-xl text-gray-500'>En vous inscrivant, vous acceptez les conditions d'utilisation et la <br/> politique de confidentialite de Namanyajugabelajar.io</p>
                        </div>
                        <Button className="bg-[#3D37A3] text-white font-bold text-center w-full py-[1em] rounded-lg text-xl" title="S'inscrire"/>
                    </div>
                </form>
                <div className="flex justify-center items-center my-[1em] font-bold text-2xl gap-[5px]">
                    <p className='text-[#BCBFC5]'>Vous avez deja un compte?</p>
                    <Link to = {"/"} className="text-[#3D37A3]">Connecter vous</Link>
                </div>

            </div>
        
            <div className="w-[1/2] h-[100vh] bg-[#3D37A3]">
                <img src = "create.png" className='mt-[5em]'/>
                <div className="mx-[7em] my-[5em]">
                    <h1 className="text-gray-400 text-lg font-bold my-[2em]">ECOLE241.BUSINESS</h1>
                    <p className="text-white text-3xl">Etudier en ligne devient plus facile - <br/> vous pouvez toujours etudier avec Ecole <br/> 241 Business</p>
                </div>
            </div>
        </div>
    )
}