import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CiEdit } from "react-icons/ci";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ todos, updateTodo }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputValue, setInputValue] = React.useState(todos.text);

  const handleInputChange = (e) => {
    updateTodo(todos.id, inputValue);
    handleClose();
  };

  return (
    <div className="relative flex items-center justify-center ">
      <CiEdit
        onClick={handleOpen}
        className="absolute size-7 hover:text-gray-200 hover:size-10 transition-all ease-in duration-300 cursor-pointer"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className=" rounded-2xl" sx={style}>
          <input
            type="text"
            placeholder="Edit Todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="
        border-2
          border-gray-300
          bg-white
          h-10
          px-5
          pr-16
          rounded-lg
          text-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent
            placeholder:text-gray-400
            placeholder:italic
            placeholder:text-sm
            placeholder:font-semibold
            placeholder:tracking-wide
            text-black

"
          />
          <button onClick={handleInputChange} className="mt-5 relative left-40 font-bold rounded-xl bg-blue-400 text-sm py-2 px-4 text-white">
            Save changes
          </button>
        </Box>
      </Modal>
    </div>
  );
}
