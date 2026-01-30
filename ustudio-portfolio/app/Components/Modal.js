'use client'

import { Dialog, DialogBackdrop, DialogPanel, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Modal({children, isOpen, onClose}){

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
                        <DialogPanel className="w-full max-w-[80vw] space-y-4 bg-white p-12 rounded-2xl lg:rounded-4xl lg:max-w-[70vw]">
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