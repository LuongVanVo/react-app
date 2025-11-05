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
  import { useState } from "react";
  
  export function DialogNewBoard() {
    const [boardTitle, setBoardTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Create board", boardTitle, description);
      setBoardTitle("");
      setDescription("");
    };
    return (
      <Dialog>
        {/*  Nút bấm để mở Dialog */}
        <DialogTrigger asChild>
        <Button className="bg-white text-black border border-gray-300 hover:bg-gray-100"><FaPlus className="text-black mr-2 w-3 h-3" />Add Board</Button>
        </DialogTrigger>
  
        {/* Nội dung popup */}
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Create New Board</DialogTitle>
              <DialogDescription>
              Create a new board to organize your project tasks and collaborate with your team.
              </DialogDescription>
            </DialogHeader>
  
            <div className="grid gap-4 py-4">
              {/* Input 1: Workspace Name */}
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
              {/* Input 2: Description */}
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="description">Description (optional)</Label>
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
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              {/* Nút Create */}
              <Button disabled={!boardTitle} type="submit">
                Create Board
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
  