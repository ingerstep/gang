import React, { PropsWithChildren } from "react";
import ReactModal from 'react-modal';;



export const Modal = ({ visible, close, children }: { visible: boolean, close: () => void } & PropsWithChildren) => {
    const customStyles: ReactModal.Styles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            maxWidth: 1100,
            width: '100%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '12px',
            padding: '32px',
            background: '#EEEEEE'
        },
        overlay: {
            background: 'rgba(0, 0, 0, 0.8)'
        }
    };

    return (
        <ReactModal
            style={customStyles}
            isOpen={visible}
            onRequestClose={close}
            closeTimeoutMS={500}
        >
            {children}
        </ReactModal>
    );
};
