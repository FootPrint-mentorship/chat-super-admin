import React from 'react';

interface ArchiveProjectsModalProps {
    onClose: () => void;
    project_name?: string | undefined;
    open: string | undefined | boolean;
}

function ArchiveProjectModal({onClose,project_name, open}: ArchiveProjectsModalProps) {
    if(!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center px-4 md:px-0 bg-black bg-opacity-80 z-50">

            <div className="bg-white py-2 pb-4 rounded-lg shadow-md w-full max-w-lg">
                <div className={'flex items-center justify-end w-full px-2'}>
                    <svg onClick={onClose} className={'w-[20px] h-[20px] cursor-pointer'} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 0h24v24h-24z" fill="#fff" opacity="0" transform="matrix(-1 0 0 -1 24 24)"/>
                        <path
                            d="m13.41 12 4.3-4.29a1 1 0 1 0 -1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0 -1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                            fill="#231f20"/>
                    </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-6 text-center">Archive Project</h2>

                <div className="flex justify-center px-8">
                    <p className={'text-center text-primaryTextColor font-medium'}>You are about to archived {project_name}.<br/> Are you really sure about
                        this? This action can <br/> be
                        reverse.</p>

                </div>

                    <div className="flex justify-center gap-4 flex-col md:flex-row mt-8 px-8">

                        <button
                            type="submit"
                            className="px-4 py-2 w-full bg-danger text-white rounded-md font-bold"
                        >
                            Archive Project
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 w-full bg-['inherit'] border-borderColor border-2 rounded-md font-bold"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            )
            }

            export default ArchiveProjectModal;