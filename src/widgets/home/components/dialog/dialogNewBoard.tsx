import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/shared/ui/dialog/index";
import { Button } from "@/shared/ui/button/button";
import { FaPlus } from "react-icons/fa";
import { Label } from "@/shared/ui/label/label";
import { Input } from "@/shared/ui/input/input";
import { useState, useEffect } from "react";
import { useBoardContext } from "../context/BoardContext";

interface DialogNewBoardProps {
  headerTitle?: string;
  headerDescription?: string;
  mode?: "create" | "edit";
  triggerButton?: React.ReactNode;
}

export function DialogNewBoard({ 
  headerTitle,
  headerDescription,
  mode = "create",
  triggerButton
}: DialogNewBoardProps) {
  const [boardTitle, setBoardTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  // ✨ Lấy từ Context
  const { isEditDialogOpen, selectedBoard, closeEditDialog } = useBoardContext();

  // ✨ Sync với Context cho Edit mode
  useEffect(() => {
      if (mode === "edit" && isEditDialogOpen && selectedBoard) {
          setBoardTitle(selectedBoard.name);
          setDescription(selectedBoard.description);
          setIsOpen(true);
      }
  }, [mode, isEditDialogOpen, selectedBoard]);

  const isEdit = mode === "edit";
  const title = headerTitle || (isEdit ? "Edit Board" : "Create New Board");
  const desc = headerDescription || (isEdit 
      ? "Update your board information" 
      : "Create a new board to organize your tasks");

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (isEdit && selectedBoard) {
          // ✨ Update board trong context
          const { boards: currentBoards, setBoards } = useBoardContext();
          const updatedBoards = currentBoards.map(b => 
              b.id === selectedBoard.id 
                  ? { ...b, name: boardTitle, description }
                  : b
          );
          setBoards(updatedBoards);
          console.log("Update board:", selectedBoard.id, boardTitle, description);
          closeEditDialog();
      } else {
          console.log("Create board:", boardTitle, description);
      }
      
      setBoardTitle("");
      setDescription("");
      setIsOpen(false);
  };

  // ✨ Handle close
  const handleClose = (open: boolean) => {
      setIsOpen(open);
      if (!open && isEdit) {
          closeEditDialog();
      }
  };

  return (
      <Dialog open={isEdit ? isEditDialogOpen : isOpen} onOpenChange={handleClose}>
          {/* Trigger Button */}
          {!isEdit && (
              <DialogTrigger asChild>
                  {triggerButton || (
                      <Button className="bg-white text-black border border-gray-300 hover:bg-gray-100">
                          <FaPlus className="text-black mr-2 w-3 h-3" />
                          Add Board
                      </Button>
                  )}
              </DialogTrigger>
          )}

          {/* Dialog Content */}
          <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={handleSubmit}>
                  <DialogHeader>
                      <DialogTitle>{title}</DialogTitle>
                      <DialogDescription>{desc}</DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-4 py-4">
                      <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="name">Board Title</Label>
                          <Input
                              id="name"
                              placeholder="Enter board title"
                              value={boardTitle}
                              onChange={(e) => setBoardTitle(e.target.value)}
                              required
                          />
                      </div>
                      
                      <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor="description">Description</Label>
                          <Input
                              id="description"
                              placeholder="Enter board description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                          />
                      </div>
                  </div>

                  <DialogFooter>
                      <DialogClose asChild>
                          <Button variant="outline" type="button">Cancel</Button>
                      </DialogClose>
                      <Button disabled={!boardTitle} type="submit">
                          {isEdit ? "Update Board" : "Create Board"}
                      </Button>
                  </DialogFooter>
              </form>
          </DialogContent>
      </Dialog>
  );
}