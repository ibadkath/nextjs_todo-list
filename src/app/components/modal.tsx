
interface modalprops{
    openModal: boolean;
    setOpenModal:(open:boolean)=> boolean | void;
    children: React.ReactNode;
};

//function to handle modal
export default function Modal({openModal, setOpenModal, children}:modalprops){

    return(
        <div className={`modal ${openModal ? "modal-open" : ""}`}>
        <div className="modal-box relative">
          
            {/* if there is a button in form, it will close the modal */}
            <label
            onClick={() => setOpenModal(false)}
             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
            </label> 
          {children}
        </div>
      </div>
       
    )};