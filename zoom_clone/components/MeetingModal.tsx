import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: ReactNode;
  image?: string;
  buttonIcon?: any;
}
function MeetingModal({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  children,
}: MeetingModalProps) {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex w-full max-w-[420px] flex-col gap-6 border-none bg-dark-1 items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <Button
            onClick={handleClick}
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            {buttonText || "Schedule Meeting"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MeetingModal;
