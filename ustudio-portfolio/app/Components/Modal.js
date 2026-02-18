'use client'

import { Dialog, DialogBackdrop, DialogPanel, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import CloseBox from '../Components/Svgs/Close';

export default function Modal({addedStyles, children, isOpen, onClose}){

    return(
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog className="relative z-50" onClose={onClose}>
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                        <DialogPanel className={`w-full relative max-w-[90vw] space-y-4 bg-white px-6 py-10 rounded-2xl lg:rounded-4xl lg:max-w-[1022px] lg:p-12 ${addedStyles}`}>
                            <button onClick={onClose} className='cursor-pointer absolute m-0 top-2.5 right-4 lg:top-4.5 lg:right-8' aria-label='close'><CloseBox className='fill-black h-6 w-6 lg:h-8 lg:w-8' /></button>
                            {children}
                            <div className="flex gap-4">
                            <button onClick={onClose} aria-label='Close'></button>
                            </div>
                        </DialogPanel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}