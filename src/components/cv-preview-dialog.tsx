"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, FileDown } from "lucide-react";

interface CVPreviewDialogProps {
  triggerClassName?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export function CVPreviewDialog({
  triggerClassName,
  buttonVariant = "ghost",
}: CVPreviewDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [loadError, setLoadError] = useState(false);

  // Handle dialog open/close with state reset
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      // Reset state when opening
      setLoadError(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={triggerClassName} size="lg">
          <Eye className="mr-2 " />
          View CV
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] w-[95vw] sm:w-full p-0">
        <DialogHeader className="p-4 flex flex-row items-center justify-between border-b">
          <div className="relative h-full w-full overflow-auto bg-muted">
            {loadError ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <p className="mb-4 text-destructive font-medium">
                  Unable to display PDF in browser. You can open it in a new tab
                  or download it instead.
                </p>
                <div className="flex gap-2">
                  <Button asChild>
                    <a
                      href="/Ho-Quoc-Thang-CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Open in New Tab
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a
                      href="/Ho-Quoc-Thang-CV.pdf"
                      download="Ho-Quoc-Thang-CV.pdf"
                    >
                      <FileDown className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              // Show PDF options directly since iframe often fails in development
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-muted/30">
                <div className="max-w-md space-y-6">
                  <div className="text-6xl mb-4">📄</div>
                  <div className="space-y-2">
                    {/* <h3 className="text-xl font-semibold">CV Preview</h3> */}
                    <DialogTitle className="text-xl font-semibold">
                      CV Preview
                    </DialogTitle>
                    <p className="text-muted-foreground">
                      View my CV in a new tab for the best experience, or
                      download it directly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Button asChild>
                      <a
                        href="/Ho-Quoc-Thang-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        Open CV in New Tab
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="/Ho-Quoc-Thang-CV.pdf"
                        download="Ho-Quoc-Thang-CV.pdf"
                      >
                        <FileDown className="mr-2 h-4 w-4" />
                        Download CV
                      </a>
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground pt-2 border-t">
                    <p>File: Ho-Quoc-Thang-CV.pdf</p>
                    <p>Size: ~65KB</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
