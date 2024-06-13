import React, { PropsWithChildren } from "react";
import styles from "./Modal.module.css";

interface Props {
	isOpen?: boolean;
	onClose?: () => void;
}

export const Modal = ({
	isOpen = false,
	onClose,
	children,
	...props
}: PropsWithChildren<Props>) => {
	const modalRef = React.useRef<HTMLDialogElement | null>(null);
	const [open, setOpen] = React.useState(isOpen);

	// Function: Control modal via props/parent
	React.useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	// Function: Control the modal with native browser APIs
	React.useEffect(() => {
		const modal = modalRef.current;

		if (modal) {
			if (open) {
				modal.showModal();
			} else {
				modal.close();
			}
		}
	}, [open]);

	// Function: Listen for escape key and close modal / sync state
	React.useEffect(() => {
		const escapeModal = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				if (onClose) {
					onClose();
				}
				setOpen(false);
			}
		};
		document.addEventListener("keydown", (e) => escapeModal(e));

		return () => document.removeEventListener("keydown", (e) => escapeModal(e));
	}, [onClose]);

	return (
		<dialog ref={modalRef} className={styles.modal} {...props}>
			{children}
		</dialog>
	);
};

export default Modal;
