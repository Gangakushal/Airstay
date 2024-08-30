import React from 'react'

export default function Modal({ children, classNames, modal_id }) {
    return (
        <dialog id={modal_id} className="w-full modal">
            <div className={"modal-box "+classNames}>
                    {true && <form method="dialog">
                        <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>}
                    {children}

                </div>
                {true && <form method="dialog" className="modal-backdrop ">
                    <button>close</button>
                </form>}
              
        </dialog>
    )
}
