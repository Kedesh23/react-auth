import React from 'react';
import Ecole from '../../Components/Ecole241';
import Input from '../../Components/Input';

export default function(){
    return(
        <div className='flex justify-between items-center'>
            <div className='w-[1/2] h-full'>
                <Ecole/>
                <div>
                    <h1 className='font-bold'>Creer un compte</h1>
                    <p>Ce n'est pas difficile, il suffit de saisir quelques donnees</p>
                </div>
                <div>
                    <form>
                        <div>
                            <p className='font-bold'>Nom complet</p>
                            <div className='flex justify-between items-center'>
                                <Input/>
                                <Input/>
                            </div>
                        </div>   
                    </form>
                </div>
            </div>
            <div className='w-[1/2] h-full'></div>
        </div>
    )
}