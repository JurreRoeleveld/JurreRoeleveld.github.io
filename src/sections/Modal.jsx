import { Button } from '../components';

const Modal = ({ showModal, setShowModal }) => {

  return (
    <>
      {showModal ? (
        <>
          <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div
              className="w-full min-w-[50vw] max-w-3xl mx-auto my-6 relative"
              id="modal-content"
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Wine info</h3>
                </div>

                {/* modal footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <Button
                    label="Sluiten"
                    onClick={() => setShowModal(false)}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
