import React from 'react';
import { Box, Modal } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const DeleteConfirmModal = ({onClose, type, deleteAction}) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{...style, width: "100", height: "100", overflowY: "scroll"}}>
        <h1 class={"text-3xl font-bold mb-4"}>{type} 삭제하기</h1>
        <div class={"mb-8"}>정말 해당 게시글을 삭제하시겠습니까?</div>
        
        <div className="flex justify-between items-center flex-col md:flex-row gap-4">
          <button
            class="w-full md:w-auto cursor-pointer mb-4 md:mb-0 px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
            onClick={onClose}
            // onClick={() => document.getElementById("scrollRef").scrollTo(0, 0)}
          >
            뒤로 가기
          </button>
          <div
            onClick={deleteAction}
            className="w-full md:w-auto cursor-pointer justify-center px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
          >
            삭제하기
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmModal;
