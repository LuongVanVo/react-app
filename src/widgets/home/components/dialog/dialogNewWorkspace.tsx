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

export function DialogNewWorkspace() {
  const [workspaceName, setWorkspaceName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Create workspace", workspaceName, description);
    setWorkspaceName("");
    setDescription("");
  };
  return (
    <Dialog>
      {/*  Nút bấm để mở Dialog */}
      <DialogTrigger asChild>
        <Button>
          <FaPlus className="text-gray-400 mr-2 w-3 h-3" />
          New Workspace
        </Button>
      </DialogTrigger>

      {/* Nội dung popup */}
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Workspace</DialogTitle>
            <DialogDescription>
              Create a new workspace to organize your boards and collaborate
              with your team.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Input 1: Workspace Name */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Workspace Name</Label>
              <Input
                id="name"
                placeholder="Enter workspace name"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                required
              />
            </div>
            {/* Input 2: Description */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="description">Description (optional)</Label>
              <Input
                id="description"
                placeholder="Enter workspace description"
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
            <Button disabled={!workspaceName} type="submit">
              Create Workspace
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
