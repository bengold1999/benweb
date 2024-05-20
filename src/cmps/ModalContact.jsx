export function ModalContact({ closeModal, message }) {
    return (
        <section onClick={closeModal} className="modal-container">
            <section className="modal" onClick={(e) => e.stopPropagation()}>
                <h3>{message}</h3>
                <button className="btn" onClick={closeModal}>Close</button>
            </section>
        </section>
    );
}